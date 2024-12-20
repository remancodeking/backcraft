import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import { __dirname, __filename } from '../utils/Functions/globlever.js'
import path  from 'path'


// _________________________________________________________________________
// Create apps 
const app = express()
const server = http.createServer(app);

// _________________________________________________________________________
// Set the views directory for EJS templates
app.set('views', path.join(__dirname,'src', 'public', 'views'));

// _________________________________________________________________________
// Set EJS as the view engine
app.set('view engine', 'ejs');

// _________________________________________________________________________
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'src', 'public')));


// _________________________________________________________________________
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' })); 




export {app}
export default server



