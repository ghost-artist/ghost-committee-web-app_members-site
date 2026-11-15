
import '../../../utils/logIf.js'
import { enableTimelinePrivileges } from './timelinePriviledge.js';
import { sendTestEmail } from '../../outbound-emails/sendTestEmail.js';
import { processContractsToSheets } from '../../exports/google-sheets/processContractsToSheets.js';

import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-functions.js';

async function attachDriveScaffold(user, panel) {
  const token = await user.getIdTokenResult();
  if (token.claims.ghostDriveAdmin !== true) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Scaffold Google Drive for active year';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  panel.append(button, status);

  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = 'Preparing the annual Google Drive folder…';
    try {
      const scaffold = httpsCallable(getFunctions(firebase.app), 'scaffoldGhostDrive');
      const { data } = await scaffold();
      const link = document.createElement('a');
      link.href = data.sheetUrl;
      link.textContent = `Open Master Artist Information Sheet ${data.year}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const committeeLink = link.cloneNode();
      committeeLink.href = data.committeeSheetUrl;
      committeeLink.textContent = `Open Committee Sign-Ups ${data.year}`;
      const imagesLink = link.cloneNode();
      imagesLink.href = data.imagesFolderUrl;
      imagesLink.textContent = `Open ${data.year} Ghost Artist Images`;
      status.replaceChildren(link, document.createElement('br'), committeeLink, document.createElement('br'), imagesLink);
    } catch (error) {
      status.textContent = error.message;
    } finally {
      button.disabled = false;
    }
  });
}

const timeline = {}
const userRoles = {}
let configDocument;
let roles;

document.addEventListener('DOMContentLoaded', async function () {
  firebase.redirectIfNotLoggedIn('/artist-sign-on')
  .then(async (user) => {
    if (user) {
        roles = await CRUD.readAll('committee-roles').then(function (roles) {
          // return roles.sort(function (a, b) {
          //   return Number(a.fbId) - Number(b.fbId);
          // });
          return roles.reduce((acc, next) => {
            acc[next.fbId] = next
            return acc
        }, {})
        });

        document.body.style.display = 'block'
        const userDiv = document.querySelector('#user')
        userDiv.style.display = 'block'
        userDiv.querySelector('#username').innerHTML = `Hello, ${user.displayName}`




        // configDocument = await CRUD.read('ghost-timeline', 'configDocument')
        await CRUD.read('app-settings', 'activeYear').then((doc => {
          configDocument = {
            activeYear: doc.data
          }
        }))


        // Add timeline event from the database to the timeline
        await CRUD.readAll('ghost-timeline').then(ghostTimeline => {
        

          // set the year to the configDocument year
          document.getElementById('activeYear').innerText = configDocument.activeYear


          ghostTimeline = ghostTimeline.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse()
          console.log({ timeline: ghostTimeline })
          const timelineContainer = document.getElementById('timeline')
          ghostTimeline.forEach(event => {
            const li = document.createElement('li')
            li.setAttribute('data-id', event.fbId)
            li.innerHTML = `
            <strong>${event.date}: </strong>
            ${event.description}
            `
            timelineContainer.querySelector('ul').appendChild(li)

            // Add the event to the timeline object
            timeline[event.fbId] = event
          })

        })

        // Get the GHOST contract for the user
        CRUD.read('ghost-contracts', user.uid).then(contract => {
          logIf.client && console.log(contract)
          // Get role name
          contract.committeeRoleId = contract.committeeRoleId || []

          // Also assigns userRoles object
          const sidePanel = getGhostSidePanel(contract.committeeRoleId)

          applyPrivileges(userRoles)

          document.querySelector('#user-role').innerHTML = `<h3>My Committee Role${contract.committeeRoleId.length > 1 ? 's' : ''}:</h3>${sidePanel.trim() ? sidePanel : 'No role assigned'}`
          attachDriveScaffold(user, document.querySelector('#user-role')).catch(error => {
            console.warn('Could not load Google Drive scaffold control', error.code);
          });
        })


        function applyPrivileges(userRoles) {
          Object.values(userRoles).forEach(role => {
            if (role.privileges && role.privileges.includes('editTimeline')) {

              enableTimelinePrivileges(configDocument, timeline)




            }

          })
        }


      

        /**
         * Side Panels are unique based on the role of the user
         * 
         * @param {Array int} roleId
         */
        function getGhostSidePanel(roleIds) {
          if (!roleIds) return ''
          return roleIds.map(roleId => {
            const role = roles[roleId]
            const roleTitle = role.title
            const roleButtons = role.sideBarButtons
            const responsibility = role.responsibility
            logIf.memberSidePanel && console.log("Rendering Member SidePanel for role", { role })
            userRoles[roleId] = role

            let sidePanelHTML = `<h4>${roleTitle}</h4><div>${responsibility}</div>`
            let buttons = document.createElement('div')
            buttons.setAttribute('style', 'display: flex; flex-direction: column;')


            if (roleButtons) {
              if (roleButtons.includes('newApplications')) {
                buttons.insertAdjacentHTML('beforeend', newApplicationsSidePanel(role))
              }
              if (roleButtons.includes('newScholarshipApplications')) {
                buttons.insertAdjacentHTML('beforeend', newScholarshipApplicationsButton(role))
              }
              if (roleButtons.includes('contracts-received')) {
                buttons.insertAdjacentHTML('beforeend', allContractsButton(role))
              }
              if (roleButtons.includes('testEmail')) {
                buttons.insertAdjacentHTML('beforeend', testEmailButton(role))
              }
              if (roleButtons.includes('testSheets')) {
                buttons.insertAdjacentHTML('beforeend', testSheetsButton(role))
              }
              if (roleButtons.includes('processToSheets')) {
                buttons.insertAdjacentHTML('beforeend', textOpenSheetsButton(role))
                buttons.insertAdjacentHTML('beforeend', textProcessToSheetsButton(role))
              }
              if (roleButtons.includes('createDriveFolder')) {
                buttons.insertAdjacentHTML('beforeend', textCreateDriveFolderButton(role))
              }
              if (roleButtons.includes('createDocument')) {
                buttons.insertAdjacentHTML('beforeend', testCreateDocumentButton(role))
              }

            }

            sidePanelHTML += buttons.outerHTML

            return sidePanelHTML


          }).join("")
        }
      }
    })

  document.querySelector('#reset-password').addEventListener('click', () => {
    const email = firebase.auth.currentUser.email
    firebase.sendPasswordResetEmail(firebase.auth, email).then(() => {
      alert(`Password reset email sent to ${email}`)
    })
  })

  document.getElementById('logout').addEventListener('click', () => {
    firebase.signOut(firebase.auth).then(() => {
      window.location.href = '/artist-sign-on'
    })
  })
})

/*

Workflow for processing docs to pdf

Get folder name
create folder
for each contract: create a document, add content, add to folder
for each contract: convert to pdf, add to folder

*/

function processContractsToPdf() {
  const folderName = prompt("Enter a name for the folder", "GHOST Contracts")
  if (!folderName) return

  window.sendMessageToParent({
    controller: 'driveController',
    action: 'createFolder',
    folderName: folderName
  })

  window.addEventListener("message", (event) => {
    if (event.data.dispatch !== 'driveController-response') return
    if (event.data.error) {
      alert('Error creating folder')
      return
    }
    // You can add additional logic here to handle the message
    // show success message
    alert('Folder created successfully')
    // get all contracts
    CRUD.readAll('ghost-contracts').then(contracts => {
      logIf.client || true && console.log({ contracts })
      contracts.forEach(contract => {
        const docName = `${contract.artistDetails.firstName} ${contract.artistDetails.lastName} Contract`
        window.sendMessageToParent({
          controller: 'docsController',
          action: 'createDoc',
          docName: docName
        })

        window.addEventListener("message", (event) => {
          if (event.data.dispatch !== 'docsController-response') return
          if (event.data.error) {
            alert('Error creating document')
            return
          }
          // You can add additional logic here to handle the message
          // show success message
          alert('Document created successfully')

          // add content to the document
          const docId = event.data.data.docId
          const content = `
          <h1>Gig Harbor Open Studio Tour Contract</h1>
          <p>Contract for ${contract.artistDetails.firstName} ${contract.artistDetails.lastName}</p>
          <p>Medium: ${contract.artistDetails.medium}</p>
          <p>Artist Statement: ${contract.artistDetails.artistStatement}</p>
          <p>Website: ${contract.artistDetails.website}</p>
          <p>Facebook: ${contract.artistDetails.facebook}</p>
          <p>Instagram: ${contract.artistDetails.instagram}</p>
          <p>Phone: ${contract.artistDetails.phone}</p>
          <p>Personal Email: ${contract.artistDetails.personalEmail}</p>
          <p>Business Email: ${contract.artistDetails.businessEmail}</p>
          <p>Images: ${contract.images.digitalImage1}, ${contract.images.digitalImage2}, ${contract.images.digitalImage3}, ${contract.images.artistInStudioImage}</p>
        }
        `
          window.sendMessageToParent({
            controller: 'docsController',
            action: 'addContent',
            docId: docId,
            content: content
          })

          window.addEventListener("message", (event) => {
            if (event.data.dispatch !== 'docsController-response') return
            if (event.data.error) {
              alert('Error adding content to document')
              return
            }
            // You can add additional logic here to handle the message
            // show success message
            alert('Content added to document successfully')

            // add document to folder
            window.sendMessageToParent({
              controller: 'driveController',
              action: 'addDocToFolder',
              docId: docId,
              folderId: event.data.data.folderId
            })

            window.addEventListener("message", (event) => {
              if (event.data.dispatch !== 'driveController-response') return
              if (event.data.error) {
                alert('Error adding document to folder')
                return
              }
              // You can add additional logic here to handle the message
              // show success message
              alert('Document added to folder successfully')

              // convert document to pdf
              window.sendMessageToParent({
                controller: 'docsController',
                action: 'convertToPdf',
                docId: docId
              })

              window.addEventListener("message", (event) => {
                if (event.data.dispatch !== 'docsController-response') return
                if (event.data.error) {
                  alert('Error converting document to pdf')
                  return
                }
                // You can add additional logic here to handle the message
                // show success message
                alert('Document converted to pdf successfully')

                // add pdf to folder
                window.sendMessageToParent({
                  controller: 'driveController',
                  action: 'addPdfToFolder',
                  pdfId: event.data.data.pdfId,
                  folderId: event.data.data.folderId
                })

                window.addEventListener("message", (event) => {
                  if (event.data.dispatch !== 'driveController-response') return
                  if (event.data.error) {
                    alert('Error adding pdf to folder')
                    return
                  }
                  // You can add additional logic here to handle the message
                  // show success message
                  alert('Pdf added to folder successfully')

                })

              })

            })

          })

        })

      })
    })

  })

}




function newApplicationsSidePanel(role) {

  setTimeout(() => {
    // listen to new applications changes
    CRUD.listen('new-applications', null, (newApplications) => {
      logIf.client && console.log({ newApplications })
      const totalToReview = newApplications.filter(app => app.hasBeenReviewed === false).length
      const badge = document.querySelector('a.new-applications .badge')
      badge.innerText = totalToReview
      badge.setAttribute('data-count', totalToReview)
    })

  }, 1)

  return `
      <a href="/new-applications" onclick="navigateTo('/new-applications')" class="new-applications">
        <button style="position: relative;">New Artist Applications Received <span class="badge" data-count="0"></span></button>
    </a>`
}

function newScholarshipApplicationsButton(role) {
  setTimeout(() => {
    CRUD.listen('scholarship-applications', null, (newApplications) => {
      logIf.client && console.log({ newApplications })
      const totalToReview = newApplications.filter(app => app.hasBeenReviewed === false).length
      const badge = document.querySelector('a.scholarship-applications .badge')
      badge.innerText = totalToReview
      badge.setAttribute('data-count', totalToReview)
    })
  })
  return `
      <a href="/scholarship-applications" onclick="navigateTo('/scholarship-applications')" class="scholarship-applications">
        <button  style="position: relative;">Scholarships Received <span class="badge" data-count="0"></span></button>
    </a>`
}

function allContractsButton(role) {

  setTimeout(() => {
    // listen to new applications changes
    CRUD.readAll('ghost-contracts').then(contracts => {
      logIf.client || true && console.log({ contracts })
      const totalToReview = contracts.filter(c => c.artistDetails).filter(contract => contract.artistDetails.membershipPaid).length
      const badge = document.querySelector('a.contracts-received .badge')
      badge.innerText = totalToReview
      badge.setAttribute('data-count', totalToReview)
    })

  }, 1)

  return `
      <a href="/contracts-received" onclick="navigateTo('/contracts-received')" class="contracts-received">
        <button style="position: relative;">Contracts Received <span class="badge" data-count="0"></span></button>
    </a>`
}




function testSheetsButton(role) {
  setTimeout(() => {

    document.getElementById('generateSheets').addEventListener('click', () => {

      // get some input from user (for testing purposes)
      const data = document.querySelector('textarea').value

      window.sendMessageToParent({
        controller: 'sheetsController',
        sheetName: 'testSheet',
        spreadsheetId: '1sAka-Rs4LhHhkX3J4s7SaDlpIXEdv5R5Qm7meGIL6Wk',
        action: 'upsert',
        key: 'rowId',
        data: JSON.parse(data)
      })

      window.addEventListener("message", (event) => {
        if (event.data.dispatch !== 'sheetsController-response') return
        if (event.data.error) {
          alert('Error generating sheets')
          return
        }
        console.log("sheetsController-response", event)
        // You can add additional logic here to handle the message
        // show success message
        alert('Sheets generated successfully: ' + event.data.sheetUrl)
      })
    })
  }, 1)

  return `<button id="generateSheets" style="position: relative;">Test Sheets </button>
  <textarea style="height:100px; width: 200px;">
{
  "rowId": 1,
  "name": "",
  "email": "",
  "newField": 
}
  </textarea>
  `
}

function textCreateDriveFolderButton(role) {
  setTimeout(() => {
    document.getElementById('createDriveFolder').addEventListener('click', () => {
      window.sendMessageToParent({
        controller: 'driveController',
        action: 'createFolder',
        folderName: 'Test Folder'
      })

      window.addEventListener("message", (event) => {
        if (event.data.dispatch !== 'driveController-response') return
        if (event.data.error) {
          alert('Error creating folder')
          return
        }
        // You can add additional logic here to handle the message
        // show success message
        alert('Folder created successfully')
      })
    })
  }, 1)

  return `<button id="createDriveFolder" style="position: relative;">Create Drive Folder </button>`
}

function testCreateDocumentButton(role) {
  setTimeout(() => {
    document.getElementById('createDocument').addEventListener('click', () => {
      window.sendMessageToParent({
        controller: 'docsController',
        action: 'createDoc',
        docName: 'Test Document'
      })

      window.addEventListener("message", (event) => {
        if (event.data.dispatch !== 'docsController-response') return
        if (event.data.error) {
          alert('Error creating document')
          return
        }
        // You can add additional logic here to handle the message
        // show success message
        alert('Document created successfully')
      })
    })
  }, 1)

  return `<button id="createDocument" style="position: relative;">Create Drive Document </button>`
}

function textOpenSheetsButton(role){
  
  setTimeout(() => {

    document.getElementById('openSheets').addEventListener('click', () => {

      // Just open the spreadsheet (1cmfgdGc8L5li_kx79W9SO5-ZwukiaXxlV5EZ3o8RYpY)
      
      window.openUrl('https://docs.google.com/spreadsheets/d/1cmfgdGc8L5li_kx79W9SO5-ZwukiaXxlV5EZ3o8RYpY/edit?usp=sharing')
    })
  }, 1)

  return `<button id="openSheets" style="position: relative;">Open Google Sheets </button>
  <a href="https://docs.google.com/document/d/1wHtkK3xZbZwYfg0c1-8cQr1GtijNdh21/edit?usp=sharing&ouid=109956459933316731861&rtpof=true&sd=true" target="_blank">Need help viewing the spreadsheet?</a>
  `

}

function textProcessToSheetsButton(role) {
  setTimeout(() => {
    document.getElementById('processToSheets').addEventListener('click', async () => {

      // get the text of the button
      const buttonText = document.getElementById('processToSheets').innerText
      // show loading sign
      document.getElementById('processToSheets').innerText = 'Loading...'

      processContractsToSheets()

      window.addEventListener("message", (event) => {
        // return button text to normal
        document.getElementById('processToSheets').innerText = buttonText


        if (event.data.dispatch !== 'sheetsController-response') return
        if (event.data.error) {
          alert('Error generating sheets')
          return
        }


        const data = event.data.data
        const sheetUrl = data.sheetUrl
        // console.log("sheetsController-response", event)
        // You can add additional logic here to handle the message
        // show success message
        alert('Contracts have been processed to Google Sheets. Click the link to view the sheet.\n\n' + sheetUrl)
        // window.openUrl(sheetUrl)
      })
    })
  }, 1)

  return `<button id="processToSheets" style="position: relative;">Update Google Sheets</button>
  `
}

function testEmailButton(role) {
  setTimeout(() => {
    document.getElementById('sendEmail').addEventListener('click', () => {

      sendTestEmail()


      window.addEventListener("message", (event) => {
        if (event.data.dispatch !== 'gmailController-response') return

        if (event.data.error) {
          alert('Error sending email')
          return
        }

        // You can add additional logic here to handle the message
        // show success message
        alert('Email is sent.')
        // redirect to the dashboard
      });



    }, 1)
  })
  return `        <button id="sendEmail" style="position: relative;">Test Email </button>`
}