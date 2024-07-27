import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#222831] text-[#EEEEEE] text-sm">
      <div className="w-full max-w-2xl bg-[#393E46] h-[400px] rounded-lg p-4 shadow-md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
