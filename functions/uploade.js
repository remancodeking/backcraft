import multer from "multer";
import { __dirname } from "../utils/Functions/globlever.js";
import path from 'path'



let UploadeImages = (ImageName = 'image', Path = "/uploads/images", ImagesValdetor = ['jpg', 'png', 'svg'], ImagesSize = "1mb") => {
    // Convert the size to bytes
    const sizeInBytes = parseInt(ImagesSize) * 1024 * 1024;

    // Define the storage configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../../src/public', Path)); // Specify the directory where you want to save the uploaded files
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }
    });

    // Define the file filter to validate file types
    const fileFilter = (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        console.log(fileExtension)
        if (ImagesValdetor.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only ' + ImagesValdetor.join(', ') + ' files are allowed.'));
        }
    };

    // Set up the multer middleware
    const upload = multer({
        storage: storage,
        limits: { fileSize: sizeInBytes },
        fileFilter: fileFilter
    }).single(ImageName);

    // Middleware function to handle the upload process
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err) {
                req.error = err.message;
                res.status(400).json({ message: "Failed to upload file.", error: req.error });
            } else if (!req.file) {
                req.error = "No file selected.";
                res.status(400).json({ message: "No file selected.", error: req.error });
            } else {
                req.imagepath = req.file.path;
                next();
            }
        });
    };
};

// create the upload multefil file function


let UploadeMultepelImages = (ImageNames = ['one', 'two', 'three', 'four'], Path = "/uploads/images", ImagesValdetor = ['jpg', 'png', 'svg', 'jpeg'], ImagesSize = "1mb") => {
    // Convert the size to bytes
    const sizeInBytes = parseInt(ImagesSize) * 1024 * 1024;

    // Define the storage configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null,  path.join(__dirname, '../../src/public', Path)); // Specify the directory where you want to save the uploaded files
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }
    });

    // Define the file filter to validate file types
    const fileFilter = (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        console.log(fileExtension)
        if (ImagesValdetor.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only ' + ImagesValdetor.join(', ') + ' files are allowed.'));
        }
    };

    // Set up the multer middleware
    const upload = multer({
        storage: storage,
        limits: { fileSize: sizeInBytes },
        fileFilter: fileFilter
    }).fields(ImageNames.map(name => ({ name, maxCount: 1 })));

    // Middleware function to handle the upload process
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err) {
                req.error = err.message;
                res.status(400).json({ message: "Failed to upload files.", error: req.error });
            } else if (!req.files || Object.keys(req.files).length === 0) {
                req.error = "No files selected.";
                res.status(400).json({ message: "No files selected.", error: req.error });
            } else {
                req.imagepaths = {}
                next();
            }
        });
    };
};


// Create Uploade Video Function
let UploadeVideo = (VideoName = 'video', Path = "/uploads/videos", VideosValdetor = ['mp4', 'avi', 'mkv'], VideosSize = "100mb") => {
    // Convert the size to bytes
    const sizeInBytes = parseInt(VideosSize) * 1024 * 1024;

    // Define the storage configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../../src/public', Path)); // Specify the directory where you want to save the uploaded files
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }
    });

    // Define the file filter to validate file types
    const fileFilter = (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        if (VideosValdetor.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only ' + VideosValdetor.join(', ') + ' files are allowed.'));
        }
    };

    // Set up the multer middleware
    const upload = multer({
        storage: storage,
        limits: { fileSize: sizeInBytes },
        fileFilter: fileFilter
    }).single(VideoName);

    // Middleware function to handle the upload process
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err) {
                req.error = err.message;
                res.status(400).json({ message: "Failed to upload video.", error: req.error });
            } else if (!req.file) {
                req.error = "No file selected.";
                res.status(400).json({ message: "No file selected.", error: req.error });
            } else {
                req.videopath = req.file.path;
                next();
            }
        });
    };
};

// Create the audio upload function
let UploadeAudio = (AudioName = 'audio', Path = "/uploads/audios", AudiosValdetor = ['mp3', 'wav', 'aac', 'wave'], AudiosSize = "10mb") => {
    // Convert the size to bytes
    const sizeInBytes = parseInt(AudiosSize) * 1024 * 1024;

    // Define the storage configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../../src/public', Path)); // Specify the directory where you want to save the uploaded files
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }
    });

    // Define the file filter to validate file types
    const fileFilter = (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        console.log(fileExtension)
        if (AudiosValdetor.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only ' + AudiosValdetor.join(', ') + ' files are allowed.'));
        }
    };

    // Set up the multer middleware
    const upload = multer({
        storage: storage,
        limits: { fileSize: sizeInBytes },
        fileFilter: fileFilter
    }).single(AudioName);

    // Middleware function to handle the upload process
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err) {
                req.error = err.message;
                res.status(400).json({ message: "Failed to upload audio.", error: req.error });
            } else if (!req.file) {
                req.error = "No file selected.";
                res.status(400).json({ message: "No file selected.", error: req.error });
            } else {
                req.audiopath = req.file.path;
                next();
            }
        });
    };
};






export { UploadeImages, UploadeVideo, UploadeAudio, UploadeMultepelImages };
