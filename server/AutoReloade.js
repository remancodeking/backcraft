import path, { dirname } from 'path'; // import the dirname function to get the directory name of a path
import { __dirname, __filename } from '../utils/Functions/globlever.js'
import dotenv from 'dotenv'
import server from './CreateServer.js';
import { Server } from 'socket.io'
const io = new Server(server);
import fs from 'fs'

dotenv.config()


if (process.env.socket == 'enable') {
  io.on('connection', (socket) => {
    console.log('\x1b[36m%s\x1b[0m', 'socket is connected...'); // Green
  });
}

// Auto-reload function
function setupAutoReload() {
  if (process.env.autoreloade == 'enable') {
    if (process.env.socket !== 'enable') {
      return console.log('\x1b[31m%s\x1b[0m', `Fast enable socket`); // Red
    }

    console.log('\x1b[36m%s\x1b[0m', `Auto reload is ${process.env.autoreloade}`); // Cyan

    function readDirRecursively(dir) {
      const files = fs.readdirSync(dir);

      const result = [];
      for (const file of files) {
        const filePath = path.join(dir, file);
        let stat;

        try {
          stat = fs.statSync(filePath);
        } catch (error) {
          if (error.code === 'EPERM' || error.code === 'EACCES') {
            console.warn(`Permission denied: ${filePath}`);
            continue;
          } else {
            throw error;
          }
        }

        if (stat.isDirectory() && !['node_modules', '.git', 'System Volume Information'].includes(file)) {
          result.push(...readDirRecursively(filePath));
        } else {
          result.push(filePath);
        }
      }

      return result;
    }

    readDirRecursively(path.join(__dirname, "../../")).forEach((filePath) => {
      fs.watch(filePath, (eventType, filename) => {
        if (eventType === 'change') {
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
              return;
            } else if (stats) {
              io.emit('save', stats);
            }
          });
        }
      });
    });
  }
}

export default setupAutoReload;
