import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderTwoTone } from "@material-ui/icons";
import React from "react";
import "./EmailRow.css";

export const EmailRow = ({ title, subject, desc, time, id }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderTwoTone />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__desc">{desc}</span>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};
