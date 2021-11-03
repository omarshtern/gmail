import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  More,
  MoreVert,
  Redo,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";
import { Section } from "./Section";

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
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section IconSection={<Inbox />} title="primary" color="red" selected />
        <Section IconSection={<Inbox />} title="primary" color="red" selected />
        <Section IconSection={<Inbox />} title="primary" color="red" selected />
      </div>
    </div>
  );
};
