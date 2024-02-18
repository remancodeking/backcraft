
import { fileURLToPath } from 'url'; // import the fileURLToPath function to convert URLs to file paths
import path, { dirname } from 'path'; // import the dirname function to get the directory name of a path
import fs from 'fs'


// Create Export path and dir 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export {__dirname, __filename}