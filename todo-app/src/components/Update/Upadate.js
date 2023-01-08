import './Upadate.scss';
import axios from 'axios';
import { useState,useEffect } from 'react';


const Update = (props) => {

  console.log(props.data)
  const {description, date, author, id } = props.data;


  const [authorName, setAuthor] = useState('');
  const [task, setTask] = useState('');
  const [date1, setDate] = useState('');
  const [newid, setNewid] = useState('');
  // const [postData, setPostData] = useState("");

  useEffect(() => {
    setAuthor(author)
    setTask(description)
    setDate(date)
    setNewid(id)
  }, [author]);
  

 
  const updateHandler = async (id) => {
    window.location.reload(true);
    await axios.put(`http://localhost:8000/task/${newid}`, {
      id: newid,
      description: task,
      date: date1,
      author: authorName,
    }).then((res) => {
      console.log("data is upadated", res);
      setTask("");
      setDate("");
      setAuthor("");
    })
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
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
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
                    onChange={(e) => setAuthor(e.target.value)}
                  />
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
                    onChange={(e) => setTask(e.target.value)}
                  />
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
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="modal-footer ">
                  <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close" onClick={(obj) => updateHandler(obj.id)}>SUBMIT</button>
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