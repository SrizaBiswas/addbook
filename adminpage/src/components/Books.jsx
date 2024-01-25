import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [bookdata, setBookdata] = useState();
  const books = "books";
  const fetchbooks = async () => {
    const data = new FormData();
    data.set("books", books);

    try {
      axios
        .post("http://localhost:3001/get-dbcollections", data)
        .then((res) => {
          const databook = res.data.data;
          // alert(res.data.message);
          setBookdata(databook);
          //console.log(databook);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!bookdata) {
      fetchbooks();
    }
  });
  console.log(bookdata);
  return (
    <div className="main-book">
      {/* {bookdata.map((i) => {
        <div key={i.bkname}>{i.bkname ?? "name"}</div>;
      })} */}
    </div>
  );
};

export default Books;
