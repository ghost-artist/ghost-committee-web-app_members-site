# GHOST Committee

> Gig Harbor Open Studio Tour

This is a project for a local community of artist in Gig Harbor. It is deployed on it's own server, but bound to an existing SquareSpace website via anchor links.

---

### The requirements for the project were:

- Workflow automation where members can electronically fill out contracts. 
  - Contracts can be processed into PDFs
  - Contracts can be edited up to a specific date
  - Contracts contain a real-time "Committee Role" self-assignment section
  - Contracts are integrated with a PayPal checkout solution
    - The checkout can accept a automated discount
- Community members can apply to join GHOST
  - New applications are reviewed by contract members with the Role: President or Applicant Review Chair
- GHOST members can apply for scholarships
  - The can edit their application 
  - The scholarships can be reviewed by GHOST board members

- Gmail and Google Sheets integrations requires minimal setup (see instructions below)
---

### Development Note

If you are adding to this project, run `npm run dev` script which compiles the components folder, and host the website locally, and compiles the SCSS files.

### Project Structure

```
app/
    api/
        paypal/ <-- Served from server.js
    cloudFunctions/ (NO LONGER USED)
    components/ <--- Encapsulations of styles & logic (custom html components)
        3rdParty/
        application/
        dual-login-form/
        footer/
        header/
        input/
        markdown/
        scholarship-application/
        component-build.js   <----- webpack.components.config.js points to this
    firebase.rules  <-- txt files (Protecting data on firebase - Directly deploy on firebase)
    pages/ <---- Pages served from server.js dynamically
        artist-sign-on/
        members/
        my-contract/
        new-application/
        new-applications/
        scholarship-application/
        scholarship-applications/
    styles.scss
dist/     <---- STATIC FOLDER
    assets/
    components.js <----- webpack.components.config.js builds this
    CRUD.js  <--- Encapsulated database api
    firebase.js  <--- Database/Image storage
    styles.css <-- Built by running 'npm run watch:scss'
utils/
    custom-element.js  <--- Core file for creating custom elements.
    logIf.js  <--- A Global Constant for handling logs.
server.js  <--- Serves all content (Entry point). Run with 'npm run start:w'
watch.json <--- Config file (hosted on Glitch)
webpack.components.config.js  <--- Run with 'npm run build:w'
package.json <--- Build scripts (Run `npm run dev` to compile everything; Push changes to deploy )
    
```

### Google Workspace Integration Steps 

Clone the server-configuration folder, (which is a nested git repo)
Within the server configuration file, clone the google-server folder

In the server-configuration/deployment-management.js file, enter your Glitch server name
In the server-configuration/package.json file, enter your GAS script ID. 
- Create a Google Sheet/Apps Script project
- Find the script id in the settings
- Create a Google Cloud Project
  - Create an Oauth Screen with your account as a "test" account for the OAuth screen
  - Enable APIs - AppsScript, Drive, Docs, Sheets, Gmail
  - Locate your project number in the Google Cloud
    - Add the project number to the GAS project (on the settings page)

Push to GAS with `run run push` (from the server-configuration folder). Changes can be view in GAS editor located in the spreadsheet menu
(Extensions < Apps Script)

- If this is the first time deploying this, you must do this through the GAS Editor
  - Deploy < New Deployment < Web App < Apply Permissions < Deploy


Your Glitch app should be deployed within a Google Iframe, and now able to communicate with Google via an IFrame "API"

#### Examples can be found in this Glitch Project

> See app/outbound-emails for GMail examples
> See app/exports for Other examples.

### New artist application mediums

New submissions use `schemaVersion: 2` and store a `mediums` array in each
`new-applications` document. Each entry has `medium`, `description` (the
public demonstration/education response), and three `images` entries with
`url` and `description` (the artwork caption). Files are uploaded to
`new-applications/` in Firebase Storage before their URLs are saved to Firestore.
The studio/booth photo remains the application-wide `digitalImage4` field.

The committee review page reads this nested data. Older records without
`mediums` are displayed as a single group using `medium`, `art-demo`, and
`digitalImage1`–`digitalImage3` plus their `Info` captions. No migration is
required. Review approval updates merge into the document and preserve the
medium groups. The existing deletion behavior removes the Firestore document;
it does not delete uploaded Storage files. The new-artist application has no
applicant edit/reopen flow; this change preserves its submit-and-review workflow.

Run `npm ci` then `npm run test:mediums` to rebuild the checked-in browser bundle
and run the DOM integration tests with an in-memory Firebase stand-in. These
cover repeatable groups, validation, upload/save errors, nested save/read-back,
legacy records, approval, and deletion. They do not exercise live Firebase rules
or visual browser layout. After deploying, submit an application with two
mediums and a studio image, verify all captions/photos in committee review, and
check approval and deletion with your development Firebase project.

### Local application testing without email

On your local site, open the browser developer console (F12 → Console) and run:

```js
localStorage.setItem('ghost.suppressApplicationEmails', 'true');
```

This skips application confirmation, new-application notification, approval,
and rejection emails on localhost/127.0.0.1 only. Database and image saves,
committee review, and deletion continue normally. Use the same browser and
local site address/port for the application and review pages. The switch
persists across reloads. To restore emails:

```js
localStorage.removeItem('ghost.suppressApplicationEmails');
```

The existing `TESTING.newApplication` flag redirects email to the developer;
it does **not** suppress sending. Use the local switch above for no-email tests.

### Normalize existing application documents

While signed into the member site with committee access, preview the migration
from the browser console:

```js
await import('/utils/migrate-application-mediums.js');
```

After checking the preview, apply it:

```js
await migrateApplicationMediums({dryRun: false});
```

This adds only `schemaVersion` and `mediums`, retaining original fields, dates,
review status, and image URLs. Existing modern records are skipped. Each write
re-reads the document in a Firestore transaction so concurrent edits/deletions
are respected; failures are reported per document and reruns are safe. No images
are uploaded and no email functions are called. Refresh review after applying.

Legacy comma-separated medium text stays in one group because old applications
have only one shared description and three shared images. Splitting those into
separate groups requires a person to assign the images to the correct mediums.

To test just one application, copy its Firestore document ID (not the artist's
name) and keep that ID in both calls:

```js
await migrateApplicationMediums({applicationId: 'DOCUMENT_ID', dryRun: true});
await migrateApplicationMediums({applicationId: 'DOCUMENT_ID', dryRun: false});
```

Only that document is read/migrated. An application already using the new schema
is reported as “already current — skipped,” even when explicitly selected.
Omit `applicationId` to preview or migrate all applications.
