import axios from 'axios';
import './Form.scss';
import { useState } from 'react';

const Form = (props) => {
    const [task, setTask] = useState({});
    const [date, setDate] = useState({});

    const changeTaskHandler = (event) => {
        setTask(event.target.value);
    }

    const changeDateHandler = (event) => {
      setDate(event.target.value);
    }

    const submitHandler = () => {
        axios.post(props.baseURL , {
            description : task,
            date : date,
        })
    }


    return(
        <div className='Form-component'>
             <div>
            <button
              type="button"
              class="btn btn-primary add-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@fat"
            >
              Add Item
            </button>

            {/* POP UP */}

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="fs-5" id="exampleModalLabel"> Add Item</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                            Enter Task
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          onChange={changeTaskHandler}
                        />
                      </div>

                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                            Enter date
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="recipient-name"
                          onChange={changeDateHandler}
                        />
                      </div>
                    </form>
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={submitHandler}>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Form; 