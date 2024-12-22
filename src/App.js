import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import MyLearningOne from "./components/MyLearningOne";
// import FrontEnd from "./components/FrontEnd";
// import BackEnd from "./components/BackEnd";
// import DataBase from "./components/DataBase";
// import ViewResource from "./components/ViewResource";
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion";
import QuestionDetails from "./pages/QuestionDetails";
import Navbar from "./components/Header/Navbar";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div className="App">
      {/* Add Navbar here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/question/:id" element={<QuestionDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* Add footer here */}
    </div>
  );
}

export default App;
