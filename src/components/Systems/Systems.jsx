import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Structure from "../Structure/Structure";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { SystemContext } from "../../context/systemContext";
import classes from "./Systems.module.css";
import HelperText from "../HelperText/HelperText";
import ListItems from "../ListItems/ListItems";

const Systems = () => {
  const values = useContext(SystemContext);
  const [newDomainName, setNewDomainName] = useState("");
  const [newIpAddress, setNewIpAddress] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const inputFields = [
    {
      label: "Domain Name",
      helperText: "add a new domain name",
      placeholder: "Add Domain Name",
      value: newDomainName,
      onChange: setNewDomainName,
      onSubmit: values.addDomainName,
      fetchItems: values.domainNames,
      setFetchItems: values.setDomainNames,
      removeItems: values.removeDomainName,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editDomainName,
      setFetchEditItem: values.setEditDomainName,
      tooltip:
        " Brand and product names owned by your company. Unique names consisting of 5 or more characters work best. Add your company’s name to your product name, that works for us: Cyber Intelligence House Exposure Monitor.",
    },
    {
      label: "IP Address",
      helperText: "add a new ip address",
      placeholder: "Add Ip Address",
      value: newIpAddress,
      onChange: setNewIpAddress,
      onSubmit: values.addIpAddress,
      fetchItems: values.ipAddress,
      setFetchItems: values.setIpAddress,
      removeItems: values.removeIpAddress,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editIpAddress,
      setFetchEditItem: values.setEditIpAddress,
      tooltip:
        "Confidential terms only used within your company, that are impossible to know from the outside. Think of a project code name or a hash value in your internal database, servername, or embedded in office documents metadata. A hash value is a numeric code that uniquely identifies data.",
    },
    {
      label: "URL",
      helperText: "add a new url",
      placeholder: "Add Url",
      value: newUrl,
      onChange: setNewUrl,
      onSubmit: values.addUrl,
      fetchItems: values.url,
      setFetchItems: values.setUrl,
      removeItems: values.removeUrl,
      findItem: values.findItem,
      onEdit: values.editItem,
      fetchEditItem: values.editUrl,
      setFetchEditItem: values.setEditUrl,
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
    if (values.editDomainName !== null) {
      setNewDomainName(values.editDomainName.title);
    }
  }, [values.editDomainName]);

  useEffect(() => {
    if (values.editIpAddress !== null) {
      setNewIpAddress(values.editIpAddress.title);
    }
  }, [values.editIpAddress]);

  useEffect(() => {
    if (values.editUrl !== null) {
      setNewUrl(values.editUrl.title);
    }
  }, [values.editUrl]);

  return (
    <Structure titleText="Systems">
      <Grid container justify="space-around" className={classes.Systems}>
        {inputFields.map((field) => {
          return (
            <>
              <Grid item lg="3">
                <div className={classes.title}>
                  <Typography>{field.label}</Typography>
                  <InfoOutlinedIcon />
                </div>
                <div className={classes.input}>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                  <HelperText field={field} handleSubmit={handleSubmit} />
                </div>
                <Grid container className={classes.ListItemsWarper}>
                  <ListItems
                    field={field}
                    handleRemove={handleRemove}
                    columns="12"
                  />
                </Grid>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Structure>
  );
};

export default Systems;
