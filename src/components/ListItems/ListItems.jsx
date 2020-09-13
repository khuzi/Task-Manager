import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./ListItems.module.css";

const ListItems = (props) => {
  const { field, handleRemove, columns } = props;
  return (
    <Grid item xs={columns} className={classes.list}>
      <ul style={{ maxHeight: "100px", overflowY: "auto" }}>
        {field.fetchItems.map((value) => {
          return (
            <li>
              {value.title}
              {value.title && (
                <div>
                  <i
                    class="fas fa-edit"
                    onClick={() =>
                      field.findItem(
                        value.id,
                        field.fetchItems,
                        field.setFetchEditItem
                      )
                    }
                  ></i>
                  <i
                    class="fas fa-times-circle"
                    onClick={(e) =>
                      handleRemove(e, field.removeItems, value.id)
                    }
                  ></i>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Grid>
  );
};

export default ListItems;
