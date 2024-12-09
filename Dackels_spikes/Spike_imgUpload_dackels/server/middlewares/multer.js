import multer from "multer";
import path from "path";
import colors from "colors";

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  //   console.log("req :>> ", req);
  console.log("file :>> ", file);
  const fileExtension = path.extname(file.originalname);
  //fileExtension will store something like ".jpeg", ".pdf"

  if (
    fileExtension !== ".jpeg" &&
    fileExtension !== ".jpg" &&
    fileExtension !== ".png"
  ) {
    console.log("file not supported".bgRed, fileExtension);
    // To reject this file pass `false`, like so:
    cb(null, false);
  } else {
    // To accept the file pass `true`, like so:
    console.log("file extension accepted");
    cb(null, true);
  }

  //   // You can always pass an error if something goes wrong:
  //   cb(new Error("I don't have a clue!"));
};

const multerUpload = multer({ storage: storage, fileFilter: fileFilter });

export default multerUpload;
