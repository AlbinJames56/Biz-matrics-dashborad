import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Tables from "./Pages/Tables";
import Notifications from "./Pages/Notifications";
import "./styles/tailwind.css";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex-none ">
          <SideNav />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-auto p-3 pt-2 ml-5">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
             <Footer />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
