import server from "./server/CreateServer.js";
import {app} from './server/CreateServer.js'
import setupAutoReload from "./server/AutoReloade.js";
import ConnectMongodb from "./DBConnections/Mongodb.js";
import SQLconnect from "./DBConnections/SQLDB.js";
import BackcraftEmail from "./functions/SendEmail/SendEmail.js";




// _______________________________________________________________________________
// Define default email options with HTML content
// const emailOptions = {
//     from: 'remanurdu7374@gmail.com', // Sender's email
//     to: "remankhanrw@gmail.com", // Recipient's email
//     subject: "Welcome to Backcraft!", // Subject of the email
//     text: "Welcome to Backcraft! This is a plain text version of the email.", // Plain text fallback
//     html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//             <h1 style="color: #4CAF50;">Welcome to Backcraft!</h1>
//             <p>Thank you for joining our platform. We're excited to have you on board.</p>
//             <p>
//                 Explore our features and let us know if you need any help. Click 
//                 <a href="https://example.com" style="color: #4CAF50; text-decoration: none;">here</a> 
//                 to get started.
//             </p>
//             <p style="margin-top: 20px;">Cheers,<br/>The Backcraft Team</p>
//         </div>
//     `, // HTML version of the email
// };
// Send the email
// BackcraftEmail(emailOptions)



// _____________________________________________________________________________
// Configor all port host and more 
const port = process.env.PORT || 3000
const host = process.env.HOST || "127.0.0.1"


// ________________________________________________________________________________
// Render the default page backcraft
app.get('/',(req, res)=>{

    res.render('index')
})


// _____________________________________________________________________________
// Call global function 
setupAutoReload()




// ___________________________________________________________________________
// Conncet Mongodb Database 
// ConnectMongodb(options) // also pass this functons any options



// ____________________________________________________________________________
// Connect MySqul Database 
// Default Options provide Backcraft
// defule:{
//     host: 'localhost',
//     user: 'admin',
//     password: 'admin123',
//     database: 'backraft'
// }
// SQLconnect(Option) // also pass this functions any options 



// ______________________________________________________________________________
server.listen(port, host, ()=>{
    console.log(`Opne this link ::: http://${host}:${port}/`)
})