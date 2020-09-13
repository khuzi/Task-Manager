import React from "react";
import classes from "./HelperText.module.css";

const HelperText = (props) => {
  const { field, handleSubmit } = props;
  return (
    <p className={classes.HelperText}>
      <span
        onClick={(e) => {
          if (field.fetchEditItem) {
            field.onEdit(
              field.value,
              field.fetchEditItem.id,
              field.fetchItems,
              field.setFetchItems,
              field.setFetchEditItem
            );
            field.onChange("");
          } else if (field.value) {
            handleSubmit(e, field.onSubmit, field.value, field.onChange);
          }
        }}
      >
        +
      </span>
      &nbsp;
      {field.helperText}
    </p>
  );
};

export default HelperText;
