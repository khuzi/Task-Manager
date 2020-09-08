import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const ItemsListContext = createContext();

const ItemsContextProvider = (props) => {
  const [brandNames, setBrandNames] = useState([{}]);

  const [internalKeyword, setInternalKeyword] = useState([{}]);

  const [otherKeyword, setOtherKeyword] = useState([{}]);

  const [editBrandName, setEditBrandName] = useState(null);
  const [editInternalKeyword, setEditInternalKeyword] = useState(null);
  const [editOtherKeyword, setEditOtherKeyword] = useState(null);

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

  //Add Other Keyword
  const addOtherKeyword = (otherKeywordTitle) => {
    setOtherKeyword([
      ...otherKeyword,
      { title: otherKeywordTitle, id: uuid() },
    ]);
  };

  //Remove Other Keyword
  const removeOtherKeyword = (id) => {
    setOtherKeyword(otherKeyword.filter((keyword) => keyword.id !== id));
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
    <ItemsListContext.Provider
      value={{
        brandNames,
        internalKeyword,
        otherKeyword,
        editBrandName,
        editInternalKeyword,
        editOtherKeyword,
        setBrandNames,
        setInternalKeyword,
        setOtherKeyword,
        addBrandName,
        addInternalKeyword,
        addOtherKeyword,
        removeBrandName,
        removeInternalKeyword,
        removeOtherKeyword,
        findItem,
        setEditBrandName,
        setEditInternalKeyword,
        setEditOtherKeyword,
        editItem,
      }}
    >
      {props.children}
    </ItemsListContext.Provider>
  );
};
export default ItemsContextProvider;
