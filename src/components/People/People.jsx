import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Structure from "../Structure/Structure";
import { PeopleContext } from "../../context/peopleContext";
import classes from "./People.module.css";
import ListItems from "../ListItems/ListItems";

const People = () => {
  const values = useContext(PeopleContext);
  const [newBrandName, setNewBrandName] = useState("");
  const [newInternalKeyword, setNewInternalKeyword] = useState("");
  const [valid, setValid] = useState(false);

  const inputFields = [
    {
      placeholder: "[first name and last name]",
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
      placeholder: "Personal email",
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
    if (newBrandName && newInternalKeyword) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [valid, newBrandName, newInternalKeyword]);

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

  return (
    <Structure titleText="People">
      <Grid container className={classes.People}>
        <Grid item md="10" container>
          {inputFields.map((field) => {
            return (
              <Grid item md="5">
                <div className={classes.input}>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                </div>
                <div className={classes.ListItemsWarper}>
                  <ListItems
                    field={field}
                    columns="12"
                    handleRemove={handleRemove}
                  />
                </div>
              </Grid>
            );
          })}
          <Grid item xs="1" className={classes.play}>
            <button
              disabled={!valid}
              onClick={(e) => {
                inputFields.forEach((field) => {
                  if (field.fetchEditItem) {
                    field.onEdit(
                      field.value,
                      field.fetchEditItem.id,
                      field.fetchItems,
                      field.setFetchItems,
                      field.setFetchEditItem
                    );
                  } else if (field.value) {
                    handleSubmit(
                      e,
                      field.onSubmit,
                      field.value,
                      field.onChange
                    );
                  }
                });
              }}
            >
              <PlayArrowIcon />
            </button>
          </Grid>
        </Grid>
        <Grid item md="2">
          <InfoOutlinedIcon />
        </Grid>
      </Grid>
    </Structure>
  );
};

export default People;
