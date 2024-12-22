import React from "react";
import { NavLink } from "react-router-dom";
function MyLearningOneComp({ image, title, track_no }) {
  return (
    <div className="col-md-3 mt-5">
      <div className="card">
        <img
          class="card-img-top"
          src={image}
          alt="frontend"
          style={{ width: "260px", height: "180px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <NavLink to="/frontend">
            <button
              type="button"
              class="btn btn-primary"
              // style={{ backgroundColor: "#009fdb" }}
            >
              TRACK-{track_no}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function MyLearningOne() {
  return (
    <div>
      <div className="container mt-2">
        <div className="row my-5 align-items-center justify-content-center">
          <MyLearningOneComp
            image="https://th.bing.com/th/id/OIP.Y_sY0gD0wKumAdCyUWK5pgHaEK?pid=ImgDet&rs=1"
            title="Front-end"
            track_no={1}
          />
          <MyLearningOneComp
            image="https://th.bing.com/th/id/OIP.IFS6BChELXFCVmG_TynJWwHaEO?pid=ImgDet&rs=1"
            title="Back-end"
            track_no={2}
          />
          <MyLearningOneComp
            image="https://myventurepad.com/wp-content/uploads/2017/07/database.jpg"
            title="Database"
            track_no={3}
          />
        </div>
      </div>
    </div>
  );
}
export default MyLearningOne;
