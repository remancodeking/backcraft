import server from "./server/CreateServer.js";
import {app} from './server/CreateServer.js'
import setupAutoReload from "./server/AutoReloade.js";
// Configor all port host and more 
const port = process.env.PORT || 3000
const host = process.env.HOST || "127.0.0.1"

app.get('/',(req, res)=>{
    res.render('index')
})


setupAutoReload()
// Call global function 


server.listen(port, host, ()=>{
    console.log(`Opne this link ::: http://${host}:${port}/`)
})