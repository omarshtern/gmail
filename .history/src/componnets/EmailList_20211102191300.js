import { Checkbox, IconButton } from "@material-ui/core";
import { ArrowDropDown, ChevronLeft, More, MoreVert, Redo } from "@material-ui/icons";
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
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft
          </IconButton>
          <IconButton></IconButton>
          <IconButton></IconButton>
          <IconButton></IconButton>
        </div>
      </div>
    </div>
  );
};
