import React from "react";
import "./Home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Inputs from "../Inputs/Inputs";

const Home = (props) => {
  const [works, setWorks] = useState([]);
  const [err, setErr] = useState();
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [postData, setPostData] = useState("");
  const [newid, setNewid] = useState();
  useEffect(() => {
    getJsonData();
  }, [err, postData]);
  const baseURL = "http://localhost:8000/task";
  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  }
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  }
  //get Call
  const getJsonData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        const response = res.data;
        console.log("response", response);
        setWorks(response);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  // post Call
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(baseURL, {
      description: task,
      date: date,
    }).then((res) => {
      setPostData(res)
      setTask("")
      setDate("")
    })
  }
  //delete call
  const deleteHandler = async (id) => {
    // window.location.reload(true);
    console.log(id)
    await axios.delete(`http://localhost:8000/task/${id}`).then((res) => {
      console.log('deleted', res);
      setErr(res)
    }).catch((err) => {
      console.log(err);
    });
  }
  //put call
  const updateHandler = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8000/task/${newid}`, {
      id: newid,
      description: task,
      date: date
    }).then((res) => {
      setPostData(res)
      setTask("");
      setDate("");
    })
  }

  return (
    <div className="todo">
      <div className="navbar">
        <input type="text" placeholder="MY todo list list"></input>
        <button>Save This List</button>
      </div>
      <div>
        <Inputs />
      </div>
      <div className="list">
        <div className="one">
          {works.map((obj, key) => {
            return (
              <div className="task-list" key={key}>
                {obj.description}
                <div>{obj.date}</div>
                <div className="icons">

                  <i
                    className="fa fa-pencil-square-o update-icon"
                    aria-hidden="true"
                    data-bs-target="#exampleModalOne"
                    data-bs-whatever="@fat"
                    data-bs-toggle="modal"
                    onClick={() => { setNewid(obj.id) }}
                  ></i>
                  &emsp;

                  <i type="button"
                    className="fa fa-trash-o delete-icon "
                    aria-hidden="true"
                    onClick={() => { deleteHandler(obj.id) }}></i>
                </div>
              </div>
            );
          })}
          <div className='Form-component'>
            <div className="two">
              <button
                type="button"
                className="btn btn-primary add-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
              >
                Add Item
              </button>
              <div className="popups">
                {/* pop up for update call */}
                <div
                  className="modal fade"
                  id="exampleModalOne"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="fs-5" id="exampleModalLabel"> Add Item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">
                              Enter Task to upadate
                            </label>
                            <input
                              value={task}
                              type="text"
                              className="form-control"
                              id="recipient-name"
                              onChange={changeTaskHandler}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">
                              Enter date to update
                            </label>
                            <input
                              value={date}
                              type="date"
                              className="form-control"
                              id="recipient-name"
                              onChange={changeDateHandler}
                            />
                          </div>
                          <div className="modal-footer ">
                            <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close" onClick={updateHandler}>SUBMIT</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* POP UP for post call*/}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="fs-5" id="exampleModalLabel"> Add Item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">
                              Add Item
                            </label>
                            <input
                              value={task}
                              type="text"
                              className="form-control"
                              id="recipient-name"
                              onChange={changeTaskHandler}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">
                              Add Data
                            </label>
                            <input
                              value={date}
                              type="date"
                              className="form-control"
                              id="recipient-name"
                              onChange={changeDateHandler}
                            />
                          </div>
                          <div className="modal-footer ">
                            <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close" onClick={submitHandler}>SUBMIT</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
