import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const SystemContext = createContext();

const ItemsContextProvider = (props) => {
  const [domainNames, setDomainNames] = useState([{}]);

  const [ipAddress, setIpAddress] = useState([{}]);

  const [url, setUrl] = useState([{}]);

  const [editDomainName, setEditDomainName] = useState(null);
  const [editIpAddress, setEditIpAddress] = useState(null);
  const [editUrl, setEditUrl] = useState(null);

  //Add Brand Name
  const addDomainName = (brandTitle) => {
    setDomainNames([...domainNames, { title: brandTitle, id: uuid() }]);
  };

  //Remove Brand Name
  const removeDomainName = (id) => {
    setDomainNames(domainNames.filter((brandName) => brandName.id !== id));
  };

  //Add Internal Keyword
  const addIpAddress = (IpAddressTitle) => {
    setIpAddress([...ipAddress, { title: IpAddressTitle, id: uuid() }]);
  };

  //Remove Internal Keyword
  const removeIpAddress = (id) => {
    setIpAddress(ipAddress.filter((keyword) => keyword.id !== id));
  };

  //Add Other Keyword
  const addUrl = (UrlTitle) => {
    setUrl([...url, { title: UrlTitle, id: uuid() }]);
  };

  //Remove Other Keyword
  const removeUrl = (id) => {
    setUrl(url.filter((keyword) => keyword.id !== id));
  };

  //Find edit element
  const findItem = (id, initialItemsArray, setEditFunction) => {
    const item = initialItemsArray.find((initialItem) => initialItem.id === id);
    setEditFunction(item);
  };

  //Edit Item
  const editItem = (
    title,
    id,
    initialItemsArray,
    setInitialItemsArray,
    setEditFunction
  ) => {
    const newItems = initialItemsArray.map((initialItem) =>
      initialItem.id === id ? { title, id } : initialItem
    );
    setInitialItemsArray(newItems);
    setEditFunction(null);
  };

  return (
    <SystemContext.Provider
      value={{
        domainNames,
        ipAddress,
        url,
        editDomainName,
        editIpAddress,
        editUrl,
        setDomainNames,
        setIpAddress,
        setUrl,
        addDomainName,
        addIpAddress,
        addUrl,
        removeDomainName,
        removeIpAddress,
        removeUrl,
        findItem,
        setEditDomainName,
        setEditIpAddress,
        setEditUrl,
        editItem,
      }}
    >
      {props.children}
    </SystemContext.Provider>
  );
};
export default ItemsContextProvider;
