import React, { createContext, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import obj1 from "./Object";
export const UserContext = createContext();
function AddResource({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [resource, setResource] = useState("");
  const handleAddResource = () => {
    if (title in obj1) {
      if (name in obj1[title]) {
        obj1[title][name].push(resource);
      } else {
        const key = name;
        obj1[title][key] = [resource];
      }
    } else {
      const obj2 = {};
      const key = name;
      obj2[key] = [resource];
      obj1[title] = obj2;
    }

    console.log(obj1);
  };
  if (!isOpen) return null;
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} style={{ width: "100%" }}>
        <DialogTitle>{"Add a Resouce"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="input-group mb-3">
              <label>
                Name
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name here..."
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="input-group mb-3">
              <label>
                Title
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="input-group mb-3">
              <label>
                Resouce Link
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setResource(event.target.value);
                  }}
                />
              </label>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddResource} color="primary" autoFocus>
            Add
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AddResource;
