import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [bookdata, setBookdata] = useState();
  const fetchbooks = async () => {
    const data = new FormData();
    data.set("email", "email");
    try {
      axios.post("http://localhost:3001/get-books", data).then((res) => {
        const databook = res.data.data;
        // alert(res.data.message);
        setBookdata(databook);
        //console.log(databook);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookdata);
  useEffect(() => {
    if (!bookdata) {
      fetchbooks();
    }
  });
  return <div className="main-book">Books</div>;
};

export default Books;
