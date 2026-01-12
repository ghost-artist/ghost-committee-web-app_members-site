const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5500;
const fs = require('fs');
const cors = require('cors');
const createOrderMiddleware = require('./app/api/paypal/order.js');
const createCaptureMiddleware = require('./app/api/paypal/capture.js');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const logIf = require('./utils/logIf.js');


logIf.server && console.log("Starting up server.js");
logIf.archive && console.log("process.env.PORT", process.env.PORT);


// Enable CORS for requests from http://localhost:5500
app.use(cors({
    origin: ['http://localhost:5500', 'http://localhost:3000', 'https://few-right-mandible.glitch.me', 'https://gig-harbor-studio-tour.org'],
    credentials: true
}));
app.use(express.json());

app.use((req, res, next) => {
    logIf.server && console.log(`${req.method} ${req.url}`);
    next();
});


// Parse JSON bodies
app.use(bodyParser.json());



app.post('/submit', (req, res) => {
    const data = req.body;
    logIf.server && console.log('Received data:', data);
    res.send('Data received');
});

app.post('/api/paypal/capture', createCaptureMiddleware);
app.post('/api/paypal/order', createOrderMiddleware);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/utils', express.static(path.join(__dirname, 'utils')));
app.use('/outbound-emails', express.static(path.join(__dirname, 'app/outbound-emails')));

// serve the exports folder as a static folder (a nested folder)
app.use('/exports', express.static(path.join(__dirname, 'app/exports')));
// Serve all folders in exports as static folders
const exportsDir = path.join(__dirname, 'app/exports');
fs.readdir(exportsDir, (err, folders) => {
    if (err) {
        logIf.server && console.error('Unable to read exports directory:', err);
        return;
    }
    folders.forEach(folder => {
        const folderPath = path.join(exportsDir, folder);
        if (fs.lstatSync(folderPath).isDirectory()) {
            app.use(`/exports/${folder}`, express.static(folderPath));
        }
    });
});


app.get('/committee-roles', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/pages/my-contract/committee-roles.js'));
})

app.get('/', (req, res) => {   
    res.redirect('/members')
 });

// Specific imports
app.get('/my-contract/committee-positions.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/pages/my-contract/committee-positions.html'));
})



// Serve all folders in pages as a page
const pagesDir = path.join(__dirname, 'app/pages');
fs.readdir(pagesDir, (err, folders) => {
    if (err) {
        logIf.server && console.error('Unable to read pages directory:', err);
        return;
    }
    folders.forEach(folder => {
        const folderPath = path.join(pagesDir, folder);
        if (fs.lstatSync(folderPath).isDirectory()) {
            app.use(`/${folder}`, express.static(folderPath));


            // conditionally serve a nest folder 'modal' if it exists
            const modalDir = path.join(folderPath, 'modal');
            if (fs.existsSync(modalDir)) {
                app.use(`/${folder}/modal`, express.static(modalDir));
            }
        }
    });
});


// Serve the api folder (POST REQUEST)
// const apiDir = path.join(__dirname, 'app/api');
// fs.readdir(apiDir, (err, files) => {
//     if (err) {
//         logIf.server && console.error('Unable to read api directory:', err);
//         return;
//     }
//     files.forEach(file => {
//         const filePath = path.join(apiDir, file);
//         if (fs.lstatSync(filePath).isFile()) {
//             const route = file.replace('.js', '');
//             app.post(`/api/${route}`, require(filePath));
//         }
//     });
// });




// Serve info about the API
app.use('/api', (req, res) => {

    /// THIS IS JUST DOCUMENTATION !!!

    res.send({
        message: 'Welcome to my custom Paypal API integration',
        author: "William Owen",
        contact: "william.owen.career@gmail.com",
        routes: {
            "/api/paypal/order": {
                method: "POST",
                description: "Create a PayPal order",
                body: {
                    "intent": "CAPTURE",
                    "purchase_units": [
                        {
                            "amount": {
                                "currency_code": "USD",
                                "value": "100.00"
                            }
                        }
                    ]
                }
            },
            "/api/paypal/capture": {
                method: "POST",
                description: "Capture a PayPal order",
                body: {
                    "orderID": "ORDER_ID"
                }
            },
        }
    });
})

// // fall back
// app.get('*', (req, res) => {
//     res.redirect('/')
// });




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

