function createRoleSetUp() {
    const htmlCommitteePositions = document.querySelector('#committee-positions')
    const roleElems = Array.from(htmlCommitteePositions.querySelectorAll('.role'))

    roleElems.forEach(role => {
        //Add a button to add a new role between other roles "Add Role"
        const addRoleBtn = createAddRoleButton()
        role.insertAdjacentElement('beforeend', addRoleBtn)

    })


    // create role
    function createAddRoleButton() {
        // This button appears as a line between roles
        const insertRoleContainer = document.createElement('div');
        insertRoleContainer.classList.add('insert-role-container', 'editor-control');

        const addRoleBtn = document.createElement('button');
        addRoleBtn.setAttribute('type', 'button');
        const icon = document.createElement('i');
        icon.classList.add('fa', 'fa-plus');
        addRoleBtn.appendChild(icon);

        const icon2 = document.createElement('i');
        icon2.classList.add('fa', 'fa-user', 'icon-white');
        addRoleBtn.appendChild(icon2);

        addRoleBtn.classList.add('insert-role-btn', 'editor-control');
        addRoleBtn.setAttribute('title', "Insert Role");
        insertRoleContainer.appendChild(addRoleBtn);

        const line = document.createElement('div');
        const line2 = document.createElement('div');
        line.classList.add('line', 'right');
        line2.classList.add('line', 'left');
        insertRoleContainer.appendChild(line);
        insertRoleContainer.appendChild(line2);

        return insertRoleContainer;
    }

    //  Create Role
    document.querySelectorAll('.role:not(:nth-of-type(1)) .content').forEach(role => {
        role.addEventListener('mouseover', (e) => {
            let prev;
            if (role.closest('.role').previousElementSibling) {
                prev = role.closest('.role').previousElementSibling.querySelector('.insert-role-container');
            }
            if (prev && prev.classList.contains('insert-role-container')) {
                prev.style.opacity = '1';
            }
            const next = role.nextElementSibling;
            if (next && next.classList.contains('insert-role-container')) {
                next.style.opacity = '1';
            }
        });

        role.addEventListener('mouseout', (e) => {

            let prev;
            if (role.closest('.role').previousElementSibling) {
                prev = role.closest('.role').previousElementSibling.querySelector('.insert-role-container');
            }
            if (prev && prev.classList.contains('insert-role-container')) {
                prev.style.opacity = '0';
            }
            const next = role.nextElementSibling;
            if (next && next.classList.contains('insert-role-container')) {
                next.style.opacity = '0';
            }
        });
    });
    document.querySelectorAll('.role:nth-of-type(1) .content').forEach(role => {
        role.addEventListener('mouseover', (e) => {
            const prev = role.closest('ol').previousElementSibling
            if (prev && prev.classList.contains('insert-role-container')) {
                prev.style.opacity = '1';
            }
            const next = role.nextElementSibling;
            if (next && next.classList.contains('insert-role-container')) {
                next.style.opacity = '1';
            }
        });

        role.addEventListener('mouseout', (e) => {
            const prev = role.closest('ol').previousElementSibling
            if (prev && prev.classList.contains('insert-role-container')) {
                prev.style.opacity = '0';
            }
            const next = role.nextElementSibling;
            if (next && next.classList.contains('insert-role-container')) {
                next.style.opacity = '0';
            }
        });
    });

    fetch('modal/createRole/createRole.html').then(response => response.text()).then(html => {
        console.log("Fetched createRole.html", { html })
        document.body.insertAdjacentHTML('beforeend', html)
        moveLabel(document.getElementById('createRoleModal'))

        Array.from(document.querySelectorAll('.insert-role-btn')).forEach(btn => {
            btn.addEventListener('click', () => {
                console.log("Insert Role", btn)

                // set the committee-select2 based on the committee container
                const committeeContainer = btn.closest('.committee')
                const committeeSelect2 = document.querySelector('#createRoleModal .committee-select2')
                committeeSelect2.value = committeeContainer.getAttribute('data-committee-id')
                // update the select2 field
                committeeSelect2.dispatchEvent(new Event('change'));

                // for most operations, insert html after the btn
                const createRoleModal = document.querySelector('#createRoleModal')
                createRoleModal.committeeInsertionTarget = btn.closest('.insert-role-container')

                document.querySelector('#createRoleModal').classList.add('show')
            })
        })

        // Add event listener to the submit button
        document.querySelector('#createRoleModal #createRole')
            .addEventListener('click', (e) => {
                const createRoleModal = document.querySelector('#createRoleModal')
                const title = createRoleModal.querySelector('#title').value
                const committeeId = createRoleModal.querySelector('.committee-select2').value
                const responsibility = createRoleModal.querySelector('#responsibility').value
                const driveFolderId = document.querySelector('#editRoleModal select.doc-link-select2').value
                const driveFolderIdLink = `https://drive.google.com/file/d/${driveFolderId}/view`
                // TODO: Get the other properties: btns, user, privileges, etc 
                const sidebarButtons = createRoleModal.querySelector('.sideBarButtons-select2 ').value || []
                const privileges = createRoleModal.querySelector('.privileges-select2 ').value || []
                const assignToUserId = createRoleModal.querySelector('.role-assignment-select2').value
                const tasks = createRoleModal.querySelector('.tasks-select2').value

                console.log("Create Role", { title, committee: committeeId, responsibility, sidebarButtons,
                    user: assignToUserId, privileges, tasks })
                const nextId = mapId(roles, 'id').reduce((acc, curr) => {
                    return Math.max(acc, parseInt(curr.id))
                }, 0) + 1


                // Save new role to the database (committee-roles)
                const newRole = {
                    title,
                    committeeId,
                    responsibility,
                    driveFolderIdLink,
                    sideBarButtons: [],
                    privileges: [],
                    tasks: [],
                }

                console.log("Create Role", { newRole, nextId })
                CRUD.update('committee-roles', String(nextId), newRole).then((res) => {

                    const htmlNode = createHtmlNodeForNewRoleInEditMode(nextId, title, responsibility)
                    addRoleToUI(newRole, htmlNode)

                    saveCommitteeHTMLToDB()
                })

                if(assignToUserId){
                    console.log("Assigning user to role", { assignToUserId, nextId })
                    // update the user with the new role
                    // fetch the user
                    CRUD.read('ghost-contracts', assignToUserId).then((user) => {
                        console.log("User", user)
                        // update the user with the new role
                        
                        CRUD.update('ghost-contracts', assignToUserId, {
                            committeeRoleId: [...(user.committeeRoleId || []), String(nextId)],
                            artistDetails: {
                                committeePreAssignment: true
                            }
                        })
                    })
                }



                // add role to ui and save to database
                function addRoleToUI(role, htmlNode) {

                    // add role to the committee container in correct spot
                    const target = document.querySelector('#createRoleModal').committeeInsertionTarget

                    if (target.hasAttribute('first-role-insert-btn')) {
                        // get the role container and insert at beginning
                        const committeeContainer = document.querySelector(`.committee[data-committee-id="${role.committeeId}"]`)
                        committeeContainer.querySelector('ol').insertAdjacentElement('afterbegin', htmlNode)
                    } else {

                        target.closest('.role').insertAdjacentElement('afterend', htmlNode)
                    }

                }

                // Assign the user to the role if the user is selected

                // close the modal
                createRoleModal.classList.remove('show')
                // reset the form
                createRoleModal.querySelector('form').reset()
            })

        // listen for modal close event
        document.querySelector('#createRoleModal').addEventListener('modal-closing', (e) => {
            console.log("Close Create Role Modal", e)
            // reset form
            document.querySelector('#createRoleModal form').reset()
        })

    }).then(() => {
        setSelect2FieldOptionsForRoleEditors()
    })


    // Create Committee
    // For the first role insert a button to add a new role before
    document.querySelectorAll('.committee').forEach(committee => {
        const firstRole = committee.querySelector('ol');
        if (firstRole) {
            const addRoleBtn = createAddRoleButton();
            addRoleBtn.setAttribute('first-role-insert-btn', 'true');
            firstRole.insertAdjacentElement('beforebegin', addRoleBtn);
            addRoleBtn.style.marginLeft = '40px';
        }
    });

}


function createHtmlNodeForNewRoleInEditMode(nextId, title, responsibility) {
    const newRole = document.createElement('li');
    newRole.classList.add('role');
    newRole.setAttribute('data-role-id', nextId);
    newRole.innerHTML = `
    <div class="content">
        <label class="role-checkbox editor-control">
            <input type="checkbox" name="${title}" value="${nextId}">
        </label>           
        <b class="role-title">${title}</b>
        <span class="responsibility">
            <div class="responsibility-description editor-control">${responsibility}</div>
            <ul class="tasks editor-control"></ul>
        </span>
        <button type="button" class="small edit-role-btn editor-control" title="Edit Role">
            <i class="fa fa-user-edit icon-white" aria-hidden="true"></i>
        </button>
    </div>
    <div class="insert-role-container editor-control" style="opacity: 0;"><button type="button" class="insert-role-btn editor-control" title="Insert Role" fdprocessedid="kdtgra"><i class="fa fa-plus" aria-hidden="true"></i><i class="fa fa-user icon-white" aria-hidden="true"></i></button><div class="line right"></div><div class="line left"></div></div>
    `;

    // if() user, then select them
    //  <span class="user-name editor-control">
    // </span>


    // const insertRoleContainer = createAddRoleBtn()
    // newRole.insertAdjacentElement('afterend', insertRoleContainer)


    // Add the editor-controls to the role
    // dragula, edit role button
    addContainerToDragula(dragulaRoleInstance, newRole.querySelector('.content'), 'drag-handle-role')

    // set listeners on editor buttons
    newRole.querySelector('.edit-role-btn').addEventListener('click', openEditRoleModal)


    return newRole
}