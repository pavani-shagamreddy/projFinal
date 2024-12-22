import obj1 from "./Object";
import ExpandableContent from "./ExpandableContent";
import { Link } from "react-router-dom";
function ViewResource() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Resources</h1>
      {Object.keys(obj1).map((p) => (
        <ul className="list-group  bg-secondary p-2 mb-2">
          {console.log(p)}
          <li className="list-group-item">
            <ExpandableContent title={p}>
              {Object.keys(obj1[p]).map((n) => (
                <ul>
                  <li>
                    <ExpandableContent
                      title={n + " shared the following resources"}
                    >
                      <ul>
                        {console.log(n, obj1[p][n])}
                        {obj1[p][n].map((k) => (
                          <li>
                            <Link to={k} target="_blank">
                              {k}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ExpandableContent>
                  </li>
                </ul>
              ))}
            </ExpandableContent>
          </li>
        </ul>
      ))}
    </>
  );
}

export default ViewResource;
