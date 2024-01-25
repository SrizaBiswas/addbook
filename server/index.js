import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { promisify } from "util";
import { writeFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  // process.env.MONGO_URL,
  "mongodb+srv://exp:explore@explorecluster.yweprwi.mongodb.net/expdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("\nDB connected");
  }
);

const bookSchema = new mongoose.Schema(
  {
    bkname: {
      type: String,
      required: true,
    },
    authname: {
      type: String,
      required: true,
    },
    bkimage: {
      type: String,
      required: true,
    },
    bkgenre: {
      type: String,
      required: true,
    },
    desp: {
      type: String,
      required: true,
    },
    bkcon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post(
  "/addbook",
  upload.fields([
    { name: "bkImg", maxCount: 1 },
    { name: "bkCon", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { bkname, authname, bkgenre, desp } = req.body;

      const bkImg = req.files["bkImg"] ? req.files["bkImg"][0] : null;
      const bkCon = req.files["bkCon"] ? req.files["bkCon"][0] : null;

      const bookInfo = await Book.findOne({ bkname: bkname });

      if (bookInfo) {
        return res.send({ message: "book already there!" });
      }

      let bkImgPath = "";
      let bkConPath = "";

      if (bkImg) {
        const bufferBkImg = bkImg.buffer;
        const bkImgPathPublic = `../adminpage/public/users/bookCover/${
          bkname + "_" + bkImg.originalname
        }`;
        await writeFile(bkImgPathPublic, bufferBkImg);

        bkImgPath = `/users/bookCover/${bkname + "_" + bkImg.originalname}`;
      } else {
        bkImgPath = "/assets/logoExplore.png";
      }

      if (bkCon) {
        const bufferBkCon = bkCon.buffer;
        const bkConPathPublic = `../adminpage/public/users/bookCon/${
          bkname + "_" + bkCon.originalname
        }`;
        await writeFile(bkConPathPublic, bufferBkCon);

        bkConPath = `/users/bookCon/${bkname + "_" + bkCon.originalname}`;
      } else {
        bkConPath = "noBookContent";
      }

      const book = new Book({
        bkname: bkname,
        authname,
        bkimage: bkImgPath,
        bkgenre,
        desp,
        bkcon: bkConPath,
      });

      book.save();
      return res.send({ message: "Book add Successfully!" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

app.post("/get-books", async (req, res) => {
  try {
    const bookInfo = await Book.find({});

    if (!bookInfo) {
      return res.send({ message: "No book in DB!" });
    }
    console.log(bookInfo);
    return res.send({ message: "Data found", data: bookInfo });
  } catch (error) {
    console.log(error);
  }
});

//audiobook
const audiobookSchema = new mongoose.Schema(
  {
    audioBkName: {
      type: String,
      required: true,
    },
    audioAuthName: {
      type: String,
      required: true,
    },
    audioBkImage: {
      type: String,
      required: true,
    },
    audioBkGenre: {
      type: String,
      required: true,
    },
    audioDesp: {
      type: String,
      required: true,
    },
    audioBkCon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Audiobook = new mongoose.model("Audiobook", audiobookSchema);

const audiostorage = multer.memoryStorage();
const audioupload = multer({ storage: audiostorage });

app.post(
  "/addaudiobook",
  audioupload.fields([
    { name: "audioBkImage", maxCount: 1 },
    { name: " audioBkCon", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { audioBkName, audioAuthName, audioBkGenre, audioDesp } = req.body;

      const audioBkImage = req.files["audioBkImage"]
        ? req.files["audioBkImage"][0]
        : null;
      const audioBkCon = req.files["audioBkCon"]
        ? req.files["audioBkCon"][0]
        : null;

      const audiobookInfo = await Audiobook.findOne({
        audioBkName: audioBkName,
      });

      if (audiobookInfo) {
        return res.send({ message: "book already there!" });
      }

      let audioBkImagePath = "";
      let audioBkConPath = "";

      if (audioBkImage) {
        const bufferaudioBkImage = audioBkImage.buffer;
        const audioBkImagePathPublic = `../adminpage/public/users/audioBookCover/${
          audioBkName + "_" + audioBkImage.originalname
        }`; //why is ` used??
        await writeFile(audioBkImagePathPublic, bufferaudioBkImage);

        audioBkImagePath = `/users/audioBookCover/${
          audioBkName + "_" + audioBkImage.originalname
        }`;
      } else {
        audioBkImagePath = "/assets/logoExplore.png";
      }

      if (audioBkCon) {
        const bufferaudioBkCon = audioBkCon.buffer;
        const audioBkConPathPublic = `../adminpage/public/users/audioBookCon/${
          audioBkName + "_" + audioBkCon.originalname
        }`;
        await writeFile(audioBkConPathPublic, bufferaudioBkCon);

        audioBkConPath = `/users/audioBookCon/${
          audioBkName + "_" + audioBkCon.originalname
        }`;
      } else {
        audioBkConPath = "noBookContent";
      }

      const audiobook = new Audiobook({
        audioBkName: audioBkName,
        audioAuthName,
        audioBkImage: audioBkImagePath,
        audioBkGenre,
        audioDesp,
        audioBkCon: audioBkConPath,
      });

      audiobook.save();
      return res.send({ message: "Book add Successfully!" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

// app.post("/get-book", async (req, res) => {
//   try {
//     const bookInfo = await Book.find({});

//     if (!bookInfo) {
//       return res.send({ message: "No book in DB!" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

app.listen(3001, () => {
  console.log("BE started at port 3001");
});
