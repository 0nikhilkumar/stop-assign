import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { CiGrid2H } from "react-icons/ci";
import { MdOutlineLink } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import { IoMdWifi } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";


const Home = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="main-home">
          <h3>Assessments Overview</h3>
          <div className="overview-section">
            <div className="first">
              <p>Total Assessment</p>
              <div className="item-1">
                <CiGrid2H className="item-1-icon" />
                <p>34</p>
              </div>
            </div>
            <div className="second">
              <p>Candidates</p>
              <div className="item-1">
                <div className="main-total">
                  <MdOutlinePeopleAlt className="item-1-icon" />
                  <div className="content-numbers">
                    <div className="only-numbers">
                      <p>11,498</p> <label>+39</label>
                    </div>
                    <p className="candi">Total Candidates</p>
                  </div>
                  {/* <div className="vert-border"></div> */}
                  <div className="content-numbers">
                    <div className="only-numbers">
                      <p>1,14</p> <label>+89</label>
                    </div>
                    <p className="candi">Who attempted</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="second">
              <p>Candidates Source</p>
              <div className="item-1">
                <div className="main-total">
                  <IoMdWifi className="item-4-icon" />
                  <div className="content-numbers">
                    <div className="only-numbers">
                      <p>11,000</p> <label>+39</label>
                    </div>
                    <p className="candi">E-mail</p>
                  </div>
                  {/* <div className="vert-border"></div> */}
                  <div className="content-numbers">
                    <div className="only-numbers">
                      <p>145</p> <label>+89</label>
                    </div>
                    <p className="candi">Social Share</p>
                  </div>
                  <div className="content-numbers onlyborders">
                    <div className="only-numbers newOne">
                      <p>145</p> <label>+89</label>
                    </div>
                    <p className="candi">Unique Link</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fourth">
              <p>Total Purpose</p>
              <div className="item-2">
                <MdOutlineLink className="item-2-icon" />
                <p>11</p>
              </div>
            </div>
          </div>
          <h3 className="assess">My Assessment</h3>
          <div className="all-cards">
            <div className="card" onClick={() => navigate("/form")}>
              <CiCirclePlus className="circle" />
              <div className="inner-div">
                <h3>New Assessment</h3>
                <p>
                  From here you can add questions of multiple types like MCQs,
                  subjective (text or paragraph)!
                </p>
              </div>
            </div>
            {data?.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
