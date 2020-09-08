import React, { useContext, useState, useEffect } from "react";
import { ItemsListContext } from "../../context/itemsContext";
import classes from "./general.module.css";
import InfoIcon from "@material-ui/icons/Info";
import { Grid, Tooltip } from "@material-ui/core";

export default function General() {
  const values = useContext(ItemsListContext);
  const [newBrandName, setNewBrandName] = useState("");
  const [newInternalKeyword, setNewInternalKeyword] = useState("");
  const [newOtherKeyword, setNewOtherKeyword] = useState("");

  const inputFields = [
    {
      label: "Brand Name",
      helperText: "add a brand name",
      value: newBrandName,
      onChange: setNewBrandName,
      onSubmit: values.addBrandName,
      fetchItems: values.brandNames,
      setFetchItems: values.setBrandNames,
      removeItems: values.removeBrandName,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editBrandName,
      setFetchEditItem: values.setEditBrandName,
      tooltip:
        " Brand and product names owned by your company. Unique names consisting of 5 or more characters work best. Add your company’s name to your product name, that works for us: Cyber Intelligence House Exposure Monitor.",
    },
    {
      label: "Internal keywords",
      helperText: "add an internal keyword",
      value: newInternalKeyword,
      onChange: setNewInternalKeyword,
      onSubmit: values.addInternalKeyword,
      fetchItems: values.internalKeyword,
      setFetchItems: values.setInternalKeyword,
      removeItems: values.removeInternalKeyword,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editInternalKeyword,
      setFetchEditItem: values.setEditInternalKeyword,
      tooltip:
        "Confidential terms only used within your company, that are impossible to know from the outside. Think of a project code name or a hash value in your internal database, servername, or embedded in office documents metadata. A hash value is a numeric code that uniquely identifies data.",
    },
    {
      label: "Other keywords",
      helperText: "add an other keyword",
      value: newOtherKeyword,
      onChange: setNewOtherKeyword,
      onSubmit: values.addOtherKeyword,
      fetchItems: values.otherKeyword,
      setFetchItems: values.setOtherKeyword,
      removeItems: values.removeOtherKeyword,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editOtherKeyword,
      setFetchEditItem: values.setEditOtherKeyword,
      tooltip:
        "Other keywords you want to monitor. Looking for malware? Add the malware hash, not the malware name. Want to monitor a Hacker group? Add group member names, instead of their group name. A hash value is numeric code that uniquely identifies data.",
    },
  ];

  const handleChange = (e, setNewFunction) => {
    e.preventDefault();
    setNewFunction(e.target.value);
  };

  const handleSubmit = (e, setFunction, newItem, setValue) => {
    e.preventDefault();
    setFunction(newItem);
    setValue("");
  };

  const handleRemove = (e, removeFunction, id) => {
    e.preventDefault();
    removeFunction(id);
  };

  useEffect(() => {
    if (values.editBrandName !== null) {
      setNewBrandName(values.editBrandName.title);
    }
  }, [values.editBrandName]);

  useEffect(() => {
    if (values.editInternalKeyword !== null) {
      setNewInternalKeyword(values.editInternalKeyword.title);
    }
  }, [values.editInternalKeyword]);

  useEffect(() => {
    if (values.editOtherKeyword !== null) {
      setNewOtherKeyword(values.editOtherKeyword.title);
    }
  }, [values.editOtherKeyword]);

  return (
    <div className={classes.general} style={{ border: "1px solid #000" }}>
      <div className={classes.title}>
        <h1>General</h1>
      </div>
      <div className={classes.formControl}>
        <Grid item xs="6">
          <label htmlFor="">Company Name</label>
        </Grid>
        <Grid item xs="6">
          <input type="text" />
        </Grid>
      </div>

      {inputFields.map((field) => {
        return (
          <>
            <Grid className={classes.formControl} key={field.label}>
              <Grid item container xs="6" className={classes.labelWarper}>
                <label htmlFor="">{field.label}</label>
                <Tooltip title={field.tooltip}>
                  <InfoIcon style={{ marginLeft: "1rem" }} />
                </Tooltip>
              </Grid>
              <Grid item container xs="6" className={classes.inputWarper}>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleChange(e, field.onChange)}
                />
                <p>
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
                        handleSubmit(
                          e,
                          field.onSubmit,
                          field.value,
                          field.onChange
                        );
                      }
                    }}
                  >
                    +
                  </span>{" "}
                  &nbsp;
                  {field.helperText}
                </p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="7"></Grid>
              <Grid item xs="5" className={classes.list}>
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
            </Grid>
          </>
        );
      })}
    </div>
  );
}
