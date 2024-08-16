
import { fileURLToPath } from 'url'; // import the fileURLToPath function to convert URLs to file paths
import path, { dirname } from 'path'; // import the dirname function to get the directory name of a path
import fs from 'fs'


// Create Export path and dir 
let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

__dirname = path.join(__dirname, '../../')



export {__dirname, __filename}