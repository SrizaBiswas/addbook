import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Homee from "./Homee";
import Inventory from "./components/Inventory";
import Customer from "./components/Customer";
import Books from "./components/Books";
import Genre from "./components/Genre";
import Audiobooks from "./components/Audiobooks";
import Adddbook from "./admincompo/Adddbook";
import Addpreuser from "./admincompo/Addpremiumuser";
import AddGenre from "./admincompo/Addgenre";
import AddUser from "./admincompo/Adduser";
import AddAudio from "./admincompo/Addaudiobook"


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Router>
          <Routes>
            <Route exact path="/" element={<Homee />} />
            <Route path="/books" element={<Books/>} />
            <Route path="/audiobooks" element={<Audiobooks/>} />
            <Route path="/genre" element={<Genre/>} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/addbook" element={<Adddbook />} />
            <Route path="/addaudio" element={<AddAudio />} />
            <Route path="/addgenre" element={<AddGenre />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/addpreuser" element={<Addpreuser />} />
          </Routes>
        </Router>
        {/* <Homee /> */}
      </div>
    </>
  );
}

export default App;
