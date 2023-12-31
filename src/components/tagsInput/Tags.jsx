import React, { useState } from "react";
import "./Tags.css";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <div className="tags-input">
      <div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}
      </div>
      <input className="input-new" type="text" onKeyDown={addTag} placeholder="Type here"/>
    </div>
  );
};

export default Tags;
