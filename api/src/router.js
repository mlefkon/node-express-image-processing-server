const { Router } = require('express');
const multer = require('multer');
const path = require('path');

function fileFilter(request, file, callback) {
    if (file.mimetype != 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error('Wrong file type') );
    } else {
        callback(null, true);
    }
}
function filename(request, file, callback) {
    callback(null, file.originalname);
}

const storage = multer.diskStorage({ destination: 'api/uploads/', filename: filename});
const upload = multer( {fileFilter: fileFilter, storage: storage })
const router = Router();
const photoPath = path.resolve(__dirname, '../../client/photo-viewer.html');
router.get('/photo-viewer', (req, res) => {
    res.sendFile(photoPath);
})
router.post('/upload', upload.single('photo'), (req, res) => {
    if (req.fileValidationError) {
        return res.status(400)
                  .json( {error: req.fileValidationError} );
    } else {
        return res.status(201)
                  .json( {success: true} );
    }
})


module.exports = router;