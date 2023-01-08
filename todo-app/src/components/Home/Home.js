// import React from "react";
// import "./Home.scss";
// import axios from "axios";
// import { useState, useEffect } from "react";
// // import Inputs from "../Inputs/Inputs";

// const Home = (props) => {
// const [works, setWorks] = useState([]);
// const [err, setErr] = useState();
// const [author, setAuthor] = useState("");
// const [task, setTask] = useState("");
// const [date, setDate] = useState("");
// const [postData, setPostData] = useState("");
// const [filteredItem, setFilteredItem] = useState("");
// const [newid, setNewid] = useState();

// useEffect(() => {
//   getJsonData();
// }, [err, postData]);

// works.sort((a, b) => new Date(a.date) - new Date(b.date));       // code for sorting 

// const baseURL = "http://localhost:8000/task";

// const changeAuthorNameHandler = (event) => {
//   setAuthor(event.target.value);
// }
// const changeTaskHandler = (event) => {
//   setTask(event.target.value);
// }
// const changeDateHandler = (event) => {
//   setDate(event.target.value);
// }
// // function to search item by items name or date

// const SearchHandler = (event) => {
//   setFilteredItem(event.target.value)

// }

// //get Call
// const getJsonData = () => {
//   axios
//     .get(baseURL)
//     .then((res) => {
//       const response = res.data;
//       console.log("read data", response);
//       setWorks(response);
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// };
// // post Call
// const submitHandler = (e) => {
//   e.preventDefault()
//   axios.post(baseURL, {
//     description: task,
//     date: date,
//     author: author,
//   }).then((res) => {
//     setPostData(res)
//     console.log("data is created", res);
//     setTask("")
//     setDate("")
//     setAuthor("");
//   })
// }
// //delete call
// const deleteHandler = async (id) => {
//   // window.location.reload(true);
//   // if (confirm("Are you sure wanted to delete")) {
//     console.log()
//     await axios.delete(`http://localhost:8000/task/${newid}`).then((res) => {
//       console.log('Item Is deleted', res);
//       setErr(res)
//     }).catch((err) => {
//       console.log(err);
//     });
//   /* }  else {
//     alert("not deleted")
//   } */

// }
// //put call
// const updateHandler = async () => {
//   await axios.put(`http://localhost:8000/task/${newid}`, {
//     id: newid,
//     description: task,
//     date: date,
//     author: author,
//   }).then((res) => {
//     setPostData(res)
//     console.log("data is upadated", res);
//     setTask("");
//     setDate("");
//     setAuthor("");
//   })
// }


// return (
// <div className="todo">
//   <div className="navbar">
//     <h2>My Todo Application</h2>
//   </div>
//   <div className="list">
//     <div className="one ">
//       <div className="input-box ">
//         <input
//           type="text"
//           placeholder="Type Here To Search"
//           className="search-box rounded-start"
//           onChange={SearchHandler}
//         ></input>

//         <button
//           type="button"
//           className="btn btn-primary add-btn"
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//           data-bs-whatever="@fat"
//         >
//           Add Item
//         </button>

//       </div>
//       {works.filter((itemName) => itemName.author.toLowerCase().includes(filteredItem) || itemName.date.includes(filteredItem) || itemName.description.includes(filteredItem)).map((obj, key) => {
//         return (
//           <div className="task-list" key={key}>
//             <div className="list-item">{obj.author}</div>
//             <div className="list-item">{obj.description}</div>
//             <div className="list-item">{obj.date}</div>
//             <div className=" icons ">

//               <i
//                 className="fa fa-pencil-square-o update-icon"
//                 aria-hidden="true"
//                 data-bs-target="#exampleModalOne"
//                 data-bs-whatever="@fat"
//                 data-bs-toggle="modal"
//                 onClick={() => { setNewid(obj.id);setAuthor(obj.author); setDate(obj.date); setTask(obj.description); }}
//               ></i>
//               &emsp;

//               <i type="button"
//                 className="fa fa-trash-o delete-icon "
//                 aria-hidden="true"
//                 data-bs-toggle="modal"
//                 data-bs-target="#deleteexampleModal"
//                 // onClick={() => { deleteHandler(obj.id) }}
//                 onClick={() => { setNewid(obj.id); }}

//               ></i>
//             </div>
//           </div>
//         );
//       })}
//           <div className='Form-component'>
//             <div className="two">
//               <div className="popups">
//                 {/* pop up for delete  */}
//                 <div class="modal fade" id="deleteexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                   <div class="modal-dialog">
//                     <div class="modal-content">
//                       <div class="modal-header">
//                         <h1 class="modal-title fs-5" id="exampleModalLabel">{`Confirmation to delete ${works.author}`}</h1>
//                         {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
//                       </div>
//                       <div class="modal-body">
//                         <h5>Are you sure wanted to delete</h5>
//                       </div>
//                       <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={(obj) => { deleteHandler(obj.id) }}>confirm</button>
//                         <button type="button" class="btn btn-primary" data-bs-dismiss="modal">cancel</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* pop up for update call */}
//                 <div
//                   className="modal fade"
//                   id="exampleModalOne"
//                   tabIndex="-1"
//                   aria-labelledby="exampleModalLabel"
//                   aria-hidden="true"
//                 >
//                   <div className="modal-dialog">
//                     <div className="modal-content">
//                       <div className="modal-header">
//                         <h1 className="fs-5" id="exampleModalLabel"> Update Item</h1>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
//                         ></button>
//                       </div>

//                       <div className="modal-body">
//                         <div>
//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Enter Author to upadate
//                             </label>
//                             <input
//                               value={author}
//                               type="text"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={(e) => setAuthor(e.target.value) }
//                               placeholder={author}
//                             >{works.author}</input>
//                           </div>

//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Enter Task to upadate
//                             </label>
//                             <input
//                               value={task}
//                               type="text"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={(e) => setTask(e.target.value)}
//                             />
//                           </div>

//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Enter date to update
//                             </label>
//                             <input
//                               value={date}
//                               type="date"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={(e) => setDate(e.target.value)}
//                             />
//                           </div>
//                           <div className="modal-footer ">
//                             <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close" onClick={updateHandler}>SUBMIT</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* POP UP for post call*/}
//                 <div
//                   className="modal fade"
//                   id="exampleModal"
//                   tabIndex="-1"
//                   aria-labelledby="exampleModalLabel"
//                   aria-hidden="true"
//                 >
//                   <div className="modal-dialog">
//                     <div className="modal-content">
//                       <div className="modal-header">
//                         <h1 className="fs-5" id="exampleModalLabel"> Add Item</h1>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
//                         ></button>
//                       </div>
//                       <div className="modal-body">
//                         <div>
//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Add Author Name
//                             </label>
//                             <input
//                               value={author}
//                               type="text"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={changeAuthorNameHandler}
//                             />
//                           </div>
//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Add Title
//                             </label>
//                             <input
//                               value={task}
//                               type="text"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={changeTaskHandler}
//                             />
//                           </div>
//                           <div className="mb-3">
//                             <label htmlFor="recipient-name" className="col-form-label">
//                               Add Date
//                             </label>
//                             <input
//                               value={date}
//                               type="date"
//                               className="form-control"
//                               id="recipient-name"
//                               onChange={changeDateHandler}
//                             />
//                           </div>
//                           <div className="modal-footer ">
//                             <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close" onClick={submitHandler}>SUBMIT</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Post Call pop up end  */}
//               </div>
//               {/* popups div ending here  */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react'
import './Home.scss'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Update from '../Update/Upadate';
import Delete from '../Delete/Delete';
// import Update from '../Update/Upadate';
// import Delete from '../Delete/Delete';
// import Modal from '../modal/Modal';

const Home = () => {
  const [works, setWorks] = useState([]);
  const [id, setId] = useState(0);
  const [data, setData] = useState({});
  const [filteredItem, setFilteredItem] = useState("");
  // const [openModal, setOpenModal] = useState(false);
  // const [postData, setPostData] = useState("");
  // const [deletedItem, setDeletedItem] = useState();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const getJsonData = () => {
    axios
      .get("http://localhost:8000/task")
      .then((res) => {
        const response = res.data;
        setWorks(response);
        console.log("read data", response);

      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const SearchHandler = (event) => {
    setFilteredItem(event.target.value)

  }
  works.sort((a, b) => new Date(a.date) - new Date(b.date));       // code for sorting
  useEffect(() => {
    getJsonData();
  }, []);


  const deleteRow = (id) => {
    const updateWorks = works.filter((obj) => {
      return obj.id !== id;
    })
    setWorks(updateWorks);
  }
  return (
    <div>
      <div className='nav-input'>
        <Navbar />
        <input type="text" className='input-box' onChange={SearchHandler} placeholder='Write your text here to serach... ' />
        <div>{
          works.filter((itemName) => itemName.author.toLowerCase().includes(filteredItem) || itemName.date.includes(filteredItem) || itemName.description.includes(filteredItem)).map((obj) => {
            return (
              <div className='todo' key={obj.id}>
                <div className='task-list'  >
                  {/* <div className='list-item'>{key+1}</div> */}
                  <div className="checkbox-input"><input type="checkbox" /></div>
                  <div className="list-item">{obj.author}</div>
                  <div className="list-item">{obj.description}</div>
                  <div className="list-item">{obj.date}</div>
                  <div className='icons'>
                    <div className='update-icon'>
                      <i
                        className="fa fa-pencil-square-o update-icon"
                        aria-hidden="true"
                        data-bs-target="#exampleModalOne"
                        data-bs-whatever="@fat"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setData(obj)
                        }}
                      ></i>
                    </div>&emsp;
                    <div className='delete-icon'>
                      <i type="button"
                        className="fa fa-trash-o  "
                        aria-hidden="true"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteexampleModal"
                        //   onClick={() => { deleteHandler(props.obj.id) }}
                        onClick={() => setId(obj.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* {openModal && <Modal closeModal={setOpenModal} />} */}
      <Update Id={id} updateWorks={deleteRow} data={data} setdata={setData} />
      <Delete Id={id} updateWorks={deleteRow} />
    </div>
  )
}

export default Home