import React from "react";
import Select from "react-select";

export default function SearchBar(props) {
  const optionList = props.options.map((e) => ({ value: e, label: e }));
  return (
    <Select
      className="basic-single mb-3 mt-3 searchDiv "
      isClearable={props.isClearable}
      isSearchable={props.isSearchable}
      placeholder={props.placeholder}
      options={optionList}
      onChange={(event) => {
        if (!event) {
          props.onChange("");
        } else {
          props.onChange(event.value);
        }
      }}
    />
  );
}
