import axios from 'axios';
import './Form.scss';
import { useState } from 'react';

const Form = (props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  

  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  }

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(props.baseURL, {
      description: task,
      date: date,
    }).then((res)=>{
      console.log('response',res)
    })
  }



  return (
    <div className='Form-component'>
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

        {/* POP UP */}

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
                      Enter Task
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={changeTaskHandler}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Enter date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="recipient-name"
                      onChange={changeDateHandler}
                    />
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={submitHandler}>SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form; 