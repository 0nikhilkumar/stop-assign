import { IoBagRemoveOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLink } from "react-icons/md";

import React from "react";

const Card = ({data}) => {
  return (
    <>
      <div className="card">
        <div className="card-inner-div">
          <IoBagRemoveOutline className="bag" />
          <HiOutlineDotsVertical className="three-dot" />
        </div>
        <div className="content">
          <h3>{data.assessment}</h3>
          <p>
            Job | <SlCalender /> 20 Apr 2023{" "}
          </p>
        </div>
        <div className="dash-line-one"></div>
        <div className="last-div">
          <div className="left-div">
            <div className="duration">
              <p>{data.duration}</p>
              <p>Duration</p>
            </div>
            <div className="duration">
              <p>00</p>
              <p>Questions</p>
            </div>
          </div>
          <div className="right-div">
            <div className="share-btn">
              <MdOutlineLink className="share-icon"/>
              <p>Share</p>
            </div>
            <p className="user">LP</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
