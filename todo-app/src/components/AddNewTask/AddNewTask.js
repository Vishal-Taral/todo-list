// import React, { useEffect } from 'react';
import './AddNewTask.scss';
import axios from 'axios';
import { useState } from 'react';

const AddNewTask = (props) => {

  const [author, setAuthor] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  // const [Item, setItem] = useState([]);

  const changeAuthorNameHandler = (event) => {
    setAuthor(event.target.value);
  }
  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  }
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  }


  const submitHandler = (e) => {
    // window.location.reload(true);
    axios.post("http://localhost:8000/task", {
      description: task,
      date: date,
      author: author,
    }).then((res) => {
      console.log("data is created", res);
      props.getJsonData();
      setTask("")
      setDate("")
      setAuthor("");
    })
  }


  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary add-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@fat"
        >
          Add Item
        </button>
      </div>

      <div>
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
                <div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Add Author Name
                    </label>
                    <input
                      value={author}
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={changeAuthorNameHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" >
                      Add Task
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
                      Add Date
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewTask