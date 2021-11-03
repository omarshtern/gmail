import { Checkbox, IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import "./EmailList.css";

export const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <Checkbox />
            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
        </div>
      </div>
    </div>
  );
};
