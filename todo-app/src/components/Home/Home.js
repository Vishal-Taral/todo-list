import React from "react";
import "./Home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Inputs from "../Inputs/Inputs";

const Home = (props) => {
  const [works, setWorks] = useState([]);

  // json Calling
  const baseURL = "http://localhost:8000/task";
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

  
  useEffect(() => {
    getJsonData();
  }, []);

  const deleteHandler = (id) => {
    axios.delete(`${baseURL},${id}`)
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
                  <i className="fa fa-trash-o delete-icon" aria-hidden="true" onClick={deleteHandler}></i>
                  &emsp;
                  <i
                    className="fa fa-pencil-square-o update-icon"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            );
          })}

          <Form baseURL={baseURL}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
