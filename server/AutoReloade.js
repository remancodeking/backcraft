import path, { dirname } from 'path'; // import the dirname function to get the directory name of a path
import { __dirname, __filename } from '../utils/Functions/globlever.js'
import server from './CreateServer.js';
import {Server} from 'socket.io'
const io = new Server(server);
import fs from 'fs'

// Auto-reload function
function setupAutoReload() {

  function readDirRecursively(dir) {
    const files = fs.readdirSync(dir);

    const result = [];
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && file !== 'node_modules' && stat.isDirectory() && file !== '.git' && stat.isDirectory() && file !== "README.md") {
        result.push(...readDirRecursively(filePath));
      } else {
        result.push(filePath);
      }
    }

    return result;
  }

  readDirRecursively(path.join(__dirname,"../../")).forEach((filePath) => {
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

  io.on('connection', (socket) => { });
}

export default setupAutoReload
