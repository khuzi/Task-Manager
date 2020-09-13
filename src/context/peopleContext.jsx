import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const PeopleContext = createContext();

const ItemsContextProvider = (props) => {
  const [brandNames, setBrandNames] = useState([{}]);
  const [internalKeyword, setInternalKeyword] = useState([{}]);

  const [editBrandName, setEditBrandName] = useState(null);
  const [editInternalKeyword, setEditInternalKeyword] = useState(null);

  //Add Brand Name
  const addBrandName = (brandTitle) => {
    setBrandNames([...brandNames, { title: brandTitle, id: uuid() }]);
  };

  //Remove Brand Name
  const removeBrandName = (id) => {
    setBrandNames(brandNames.filter((brandName) => brandName.id !== id));
  };

  //Add Internal Keyword
  const addInternalKeyword = (internalKeywordTitle) => {
    setInternalKeyword([
      ...internalKeyword,
      { title: internalKeywordTitle, id: uuid() },
    ]);
  };

  //Remove Internal Keyword
  const removeInternalKeyword = (id) => {
    setInternalKeyword(internalKeyword.filter((keyword) => keyword.id !== id));
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
    <PeopleContext.Provider
      value={{
        brandNames,
        internalKeyword,
        editBrandName,
        editInternalKeyword,
        setBrandNames,
        setInternalKeyword,
        addBrandName,
        addInternalKeyword,
        removeBrandName,
        removeInternalKeyword,
        findItem,
        setEditBrandName,
        setEditInternalKeyword,
        editItem,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};
export default ItemsContextProvider;
