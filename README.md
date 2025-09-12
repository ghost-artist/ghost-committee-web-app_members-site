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
