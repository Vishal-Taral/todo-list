import './Upadate.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Update = (props) => {

  const { description, date, author, id } = props.data;

  const [authorName, setAuthor] = useState('');
  const [task, setTask] = useState('');
  const [date1, setDate] = useState('');
  const [newid, setNewid] = useState('');

  const [authorNameError, setAuthorNameError] = useState(false);
  const [taskError, setTaskError] = useState(false);
  const [dateError, setDateError] = useState(false);
  // const [postData, setPostData] = useState("");

  useEffect(() => {
    setAuthor(author)
    setTask(description)
    setDate(date)
    setNewid(id)
  }, [author, date, description, id]);

  const updateAuthor = (e) => {
    let enteredName = e.target.value;
    setAuthor(enteredName);

    if (enteredName.length === 0) {
      setAuthorNameError(true);
    } else {
      setAuthorNameError(false);
    }
  }

  const updateTask = (e) => {
    let enteredTasks = e.target.value;
    setTask(enteredTasks);

    if (enteredTasks.length === 0) {
      setTaskError(true);
    } else {
      setTaskError(false);
    }
  }

  const updateDate = (e) => {
    let enteredDates = e.target.value;
    setDate(enteredDates);

    if (enteredDates.length === 0) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  }

  const updateHandler = async (id) => {
    // window.location.reload(true);

    if (authorName.length === 0) {
      setAuthorNameError(true);
    }
    if (task.length === 0) {
      setTaskError(true);
    }
    if (date1.length === 0) {
      setDateError(true);
    }

    if (author.length !== 0 && task.length !== 0 && date.length !== 0) {
      await axios.put(`http://localhost:8000/task/${newid}`, {
        id: newid,
        description: task,
        date: date1,
        author: authorName,
      }).then((res) => {
        console.log("data is upadated", res);
        props.getJsonData();
        // setTask("");
        // setDate("");
        // setAuthor("");
      })
    }
  }

  const ErrorClearHandler = () => {
    setAuthorNameError(false);
    setTaskError(false);
    setDateError(false);
  }

  return (
    <>
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
              <h1 className="fs-5" id="exampleModalLabel"> Update Item</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ErrorClearHandler}
              ></button>
            </div>

            <div className="modal-body">
              <div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Enter Author to upadate
                  </label>
                  <input
                    value={authorName}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={updateAuthor}
                  />
                  {authorNameError ? <p style={{ color: "red" }}>author name reqired</p> : ""}
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Enter Task to upadate
                  </label>
                  <input
                    value={task}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={updateTask}
                  />
                  {taskError ? <p style={{ color: "red" }}>task reqired</p> : ""}
                </div>

                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Enter date to update
                  </label>
                  <input
                    value={date1}
                    type="date"
                    className="form-control"
                    id="recipient-name"
                    onChange={updateDate}
                  />
                </div>
                <span>{dateError ? <p style={{ color: "red" }}>date reqired</p> : ""}</span>
                <div className="modal-footer ">
                  <button className="btn btn-primary submit-btn" /* data-bs-dismiss="modal" aria-label="Close" */ onClick={(obj) => updateHandler(obj.id)}>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Update