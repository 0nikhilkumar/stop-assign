import React, { useState } from "react";
import "./Form.css";
import { RxCross2 } from "react-icons/rx";
import Tags from "../tagsInput/Tags";
import { useNavigate } from "react-router-dom";

const Form = ({ setNewData }) => {
  const [assessment, setAssessment] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const options = ["Select", "Learning", "Job"];
  const [data, setData] = useState([{
    assessment,
    purpose,
    duration,
  }])
  const navigate = useNavigate();

  const newData = {
    assessment,
    purpose,
    duration,
  }


  const dataOne = ()=> {
    setData([...data, newData]);
    setNewData(data);
    setPurpose("");
    setDuration("");
    setAssessment("");
    }

  return (
    <>
      <div className="form">
        <div className="main-form">
          <div className="upper-heading-div">
            <p>Create new assignment</p>
            <RxCross2 onClick={() => navigate("/")} />
          </div>
          <div className="second-div">
            <div className="first-input">
              <p>Name of assessment</p>
              <input
                value={assessment}
                onChange={(e) => setAssessment(e.target.value)}
                className="input"
                type="text"
                placeholder="Type Here"
              />
            </div>
            <div className="first-input">
              <p>Purpose of the test is</p>
              <select
                value={purpose}
                name="none"
                id="input"
                onChange={(e) => setPurpose(e.target.value)}>
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="first-input">
              <p>Description</p>
              <select name="none" id="input">
                <option className="options" value="none">
                  Select
                </option>
                <option className="options" value="learning">
                  Learning
                </option>
                <option className="options" value="marks">
                  Marks
                </option>
              </select>
            </div>
            <div className="first-input">
              <p>Skills</p>
              <Tags />
            </div>
            <div className="first-input">
              <p>Duration of assessment</p>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="input"
                type="text"
                placeholder="HH:MM:SS"
              />
            </div>
          </div>
          <div className="last-div-one">
            <div className="btn" onClick={dataOne}>
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
