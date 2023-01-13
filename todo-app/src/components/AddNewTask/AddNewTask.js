import './AddNewTask.scss';
import axios from 'axios';
import { useState } from 'react';

const AddNewTask = (props) => {

  const [author, setAuthor] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [authorNameError, setAuthorNameError] = useState(false);
  const [taskError, setTaskError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const changeAuthorNameHandler = (event) => {
    let enterdName = event.target.value;
    setAuthor(enterdName);
    if (enterdName.length === 0) {
      setAuthorNameError(true);
    } else {
      setAuthorNameError(false);
    }
  }
  const changeTaskHandler = (event) => {
    let enteredTask = event.target.value;
    setTask(enteredTask);
    if (enteredTask.length === 0) {
      setTaskError(true);
    } else {
      setTaskError(false);
    }
  }
  const changeDateHandler = (event) => {
    let enteredDate = event.target.value;
    console.log("length of date is ", enteredDate.length);
    setDate(enteredDate);
    if (enteredDate.length === 0) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  }

  const submitHandler = (e) => {
    if (author.length === 0) {
      setAuthorNameError(true);
    }
    if (task.length === 0) {
      setTaskError(true);
    }
    if (date.length === 0) {
      setDateError(true);
    }
    if (author.length !== 0 && task.length !== 0 && date.length !== 0) {
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
  }

  const ErrorClearHandler = () => {
    setAuthorNameError(false);
    setTaskError(false);
    setDateError(false);
    setDate("");
    setAuthor("");
    setTask("");
  }

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary add-btn btn-outline-warnin"
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
                <h1 className="fs-5g" id="exampleModalLabel " style={{ color: "black", fontSize: "20px" }}> Add Item</h1>
                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" onClick={ErrorClearHandler}></button>
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
                      required
                    />
                    {authorNameError ? <p style={{ color: "red" }}>author name reqired</p> : ""}
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
                      required
                    />
                    {taskError ? <p style={{ color: "red" }}>task reqired</p> : ""}
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
                      required
                    />
                    {dateError ? <p style={{ color: "red" }}>date reqired</p> : ""}
                  </div>
                  <div className="modal-footer ">
                    <button className="btn btn-primary submit-btn " /* data-bs-dismiss="modal"  aria-label="Close" */ onClick={submitHandler} >SUBMIT</button>
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

export default AddNewTask;