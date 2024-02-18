import http from 'http'
import express from 'express'
import { __dirname, __filename } from '../utils/Functions/globlever.js'
import path  from 'path'
// Configor all port host and more 
const port = process.env.PORT || 3000
const host = process.env.HOST || "127.0.0.1"



// Create apps 
const app = express()
const server = http.createServer(app);


// Set the views directory for EJS templates
app.set('views', path.join(__dirname, '..', '..', 'src', 'public', 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', '..', 'src', 'public', 'static')));





export {app}
export default server



