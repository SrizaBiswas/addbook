import React from "react";

const Adddbook = () => {
  //   const [book, setBook] = useState({
  //     bknme: "",
  //     authnme: "",
  //     bkimage: "",
  //     bkgenre: "",
  //     desp: "",
  //     bkcon: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setBook({
  //       ...book,
  //       [name]: value,
  //     });
  //   };

  //   const addbook = (e) => {
  //     e.preventDefault();
  //     const { bknme, authnme, bkimage, bkgenre, desp, bkcon } = book;
  //     if (bknme && authnme && bkimage && bkgenre && desp && bkcon) {
  //       axios.post("http://localhost:3001/addbook", book).then((res) => {
  //         alert(res.data.message);
  //         navigate("/");
  //       });
  //     } else {
  //       alert("invlid input");
  //     }
  //   };

  return (
    <main className="main-bk">
      <div className="inbk">
        <div className="headbk">
          <img src="/assests/logoExplore.png" alt="Logo Image" />
          <span className="line">
            <h2>Upload a Book</h2>
          </span>
        </div>
        <form className="input-form">
          <div className="outbk">
            <div className="innerbk">
              <div className="inputbk">
                <label htmlFor="bkname">Book Title</label>
                <div className="input-flexbk">
                  <input
                    type="text"
                    name="bknme"
                    //value={book.bknme}
                    required
                    placeholder="Enter book name"
                  ></input>
                </div>
              </div>
              <div className="inputbk">
                <label htmlFor="authname">Author Name</label>
                <div className="input-flexbk">
                  <input
                    type="text"
                    name="authnme"
                    // value={book.authnme}
                    required
                    placeholder="Author name"
                  ></input>
                </div>
              </div>
            </div>
            <div className="innerbk">
              <div className="inputbk">
                <label htmlFor="bkimage">Book Cover Url</label>
                <div className="input-flexbk">
                  <input
                    type="text"
                    name="bkimage"
                    //value={book.bkimage}
                    required
                    placeholder="Book Image Url"
                  ></input>
                </div>
              </div>
              <div className="inputbk">
                <label htmlFor="bkgenre">Book Genre</label>
                <div className="input-flexbk">
                  <input
                    type="text"
                    name="bkgenre"
                    //value={book.bkgenre}
                    required
                    placeholder="Books Category"
                  ></input>
                </div>
              </div>
            </div>
            <div className="innerbk">
              <div className="inputbk">
                <label htmlFor="bkimage">Book Description</label>
                <div className="input-flexbk">
                  <textarea
                    name="desp"
                    // value={book.desp}
                    id="myTextarea"
                    rows={2} // Set the number of visible rows
                    cols={55} // Set the number of visible columns
                    placeholder="Write books Description" // Placeholder text
                  ></textarea>
                </div>
              </div>
              <div className="inputbk">
                <label htmlFor="bkgenre">Books Content</label>
                <div className="input-flexbk">
                  <input
                    type="text"
                    name="bkcon"
                    //value={book.bkcon}
                    required
                    placeholder=" Add your books pdf"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="adbtn">
            <span>Add</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Adddbook;
