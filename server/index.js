import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
   // process.env.MONGO_URL,
   "mongodb+srv://exp:explore@explorecluster.yweprwi.mongodb.net/bookdb?retryWrites=true&w=majority",
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
      bknme: {
        type: String,
        required: true,
      },
      authnme: {
        
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

  //routes
  app.post("/addbook", (req, res) => {
    const { bknme, authnme, bkimage, bkgenre, desp, bkcon } = req.body;
    Book.findOne({ bknme: bknme }, (err, book) => {
      if (book) {
        res.send({ message: "book already there" });
      } else {
        const book = new Book({
            bknme,
            authnme,
            bkimage,
            bkgenre,
            desp,
            bkcon,
        });
        book.save((err) => {
          if (err) {
            res.send({ error: err });
          } else {
            res.send({ message: "Successfully Registered, Please login now." });
          }
        });
      }
    });
  });

  app.listen(3001, () => {
    console.log("BE started at port 3001");
  });