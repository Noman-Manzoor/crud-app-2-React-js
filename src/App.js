import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [idimp, setidimp] = useState(1);
  const [state, setstate] = useState([]);
  const [info, setinfo] = useState({
    fname: "",
    lname: "",
    age: 0,
  });

  const [edituser, setedituser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3500/users").then((res) => setstate(res.data));
  }, []);

  function handleInputChnage(event) {
    const value = event.target.value;
    setinfo({
      ...info,
      [event.target.name]: value,
    });
  }

  // function handleOnChnage(event) {
  //   const value = event.target.value;
  //   setedituser({
  //     ...info,
  //     [event.target.name]: value,
  //   });
  // }

  const saveRecord = () => {
    axios.post("http://localhost:3500/users", {
      fname: info.fname,
      lname: info.lname,
      age: info.age,
    });
  };
  const editUser = (id) => {
    axios
      .get(`http://localhost:3500/users/${id}`)
      .then((res) => {
        setedituser(res.data)
        setidimp(res.data.id)
      })
      ;
  };

  console.log(idimp);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3500/users/${id}`);
    axios.get("http://localhost:3500/users").then((res) => setstate(res.data));
  };

  const updateUser = (idimp)=>{

      axios.put(`http://localhost:3500/users/${idimp}`, {
      fname: document.getElementById('firstname').value,
      lname:  document.getElementById('lastname').value,
      age:  document.getElementById('age').value
    })
  }

  return (
    <>
      {/* form for editing the existing user starts from here */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter the details Below
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="firstname" className="form-label">
                    first Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="fname"
                    value={edituser.fname}
                    // onChange = {handleOnChnage}
                    onChange={(e) => setedituser(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="lastname" className="form-label">
                    last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lname"
                    value={edituser.lname}
                    //  onChange = {handleOnChnage}
                    onChange={(e) => setedituser(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder=""
                    name="age"
                    value={edituser.age}
                    // onChange = {handleOnChnage}
                    onChange={(e) => setedituser(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary"
                 onClick={()=>updateUser(edituser.id)}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* form for editing the existing user ends  here */}

      {/* form for adding new user starts from here */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Add New User
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter the details Below
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="inputname8" className="form-label">
                    first Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname8"
                    name="fname"
                    value={info.fname}
                    onChange={handleInputChnage}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputname4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname4"
                    name="lname"
                    value={info.lname}
                    onChange={handleInputChnage}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    placeholder=""
                    name="age"
                    value={info.age}
                    onChange={handleInputChnage}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveRecord}
                >
                  Save Record
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* form for adding new user ends here */}

      <h1>Data Fetched From API</h1>
      {state.map((e, index) => {
        return (
          <p key={e.id}>
            {" "}
            {index + 1} - {e.fname} {e.lname} is a {e.age} years old having id .{" "}
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              onClick={() => editUser(e.id)}
            >
              Edit
            </button>{" "}
            <button type="button" onClick={() => deleteUser(e.id)}>
              Delete
            </button>
          </p>
        );
      })}
    </>
  );
}

export default App;
