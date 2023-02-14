import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import "./todo.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "42rem",
  bgcolor: "#666699",
  borderRadius: "20px",
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const AddModal = (props) => {
  const { open, onClose, dispatch, addTodo } = props;
  const [inputData, setInputData] = useState("");
  const [dateTime, setDateTime] = useState("");
  const checked = false;

  return (
    <Modal className="addItems" open={open} onClose={onClose}>
      <Box sx={style}>
        <form>
          <input
            type="text"
            placeholder="Add items...."
            value={inputData}
            required
            onChange={(event) => setInputData(event.target.value)}
          />
          <label htmlFor="dateTime">
            Deadline Date and Time{" "}
            <input
              id="dateTime"
              name="dateTime"
              type="datetime-local"
              format="dd/mm/yyyy h:mm a"
              value={dateTime}
              onChange={(event) => setDateTime(event.target.value)}
            />
          </label>
        </form>
        <div className="showItems addList-btn">
          <button
            className="btn effect04 "
            data-sm-link-text="Add List"
            onClick={() =>
              dispatch(
                addTodo(
                  {
                    data: inputData,
                    dateTime: dateTime,
                    checked: checked,
                  }
                ),
                setInputData(""),
                setDateTime(""),
                onClose(false)
              )
            }
            disabled={!inputData}
          >
            <span>Add List</span>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddModal;
