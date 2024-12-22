import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddResource from "./AddResource";
import { IoIosAddCircle } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";

function FronEndComponent({ n1, n2, topic }) {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-xl-6 mb-4" style={{ width: "48%", marginLeft: "20px" }}>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button type="button" class="btn btn-secondary ">
                WEEK
                <br /> ({n1} - {n2})
              </button>
              <div className="ms-3">
                <h5 className="fw-bold mb-1">{topic}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer border-0 bg-light p-2 d-flex justify-content-around">
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          onClick={handleClickToOpen}
        >
          <IoIosAddCircle /> &nbsp; Add Resource
        </button>
        <AddResource isOpen={open} onClose={handleToClose} />

        <nav>
          <NavLink to="/viewresource" role="button">
            <button type="button" class="btn btn-outline-primary btn-sm  ">
              <VscOpenPreview /> &nbsp; View Resources
            </button>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

function FrontEnd() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>FRONTEND</h2>
      <div className="row">
        <FronEndComponent n1={1} n2={2} topic="  React fundamentals & Hooks" />
        <FronEndComponent n1={3} n2={4} topic="  React Routing, Redux & Git" />
        <FronEndComponent
          n1={5}
          n2={6}
          topic=" React Testing & Project structure"
        />
        <FronEndComponent n1={7} n2={8} topic="  Project" />
      </div>
    </div>
  );
}

export default FrontEnd;
