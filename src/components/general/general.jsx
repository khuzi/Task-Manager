import React, { useContext, useState, useEffect } from "react";
import { ItemsListContext } from "../../context/itemsContext";
import classes from "./general.module.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Grid, Tooltip } from "@material-ui/core";
import Structure from "../Structure/Structure";
import ListItems from "../ListItems/ListItems";
import HelperText from "../HelperText/HelperText";

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
    <Structure titleText="General">
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
                  <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
                </Tooltip>
              </Grid>
              <Grid item container xs="6" className={classes.inputWarper}>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleChange(e, field.onChange)}
                />
                <HelperText field={field} handleSubmit={handleSubmit} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="7"></Grid>
              <ListItems field={field} handleRemove={handleRemove} columns="5"/>
            </Grid>
          </>
        );
      })}
    </Structure>
  );
}
