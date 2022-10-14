import { useEffect } from "react";
import { useState } from "react";

export default function SearchCountry(props) {
  const [searchText, setSearchText] = useState("");
  const onChangeText = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.searchCountry(searchText);
    // eslint-disable-next-line
  }, [searchText]);
  return (
    <div>
      <label htmlFor="searchCountry">
        <span
          style={{
            color: "purple",
            fontSize: "22px",
          }}
        >
          Search Country:{" "}
        </span>
        <input
          type="search"
          placeholder="Search Country..."
          id="searchCountry"
          value={searchText}
          onChange={onChangeText}
          style={{
            padding: "12px 8px",
            fontSize: "17px",
            marginTop: "15px",
            outline: "none",
            border: "none",
            boxShadow: "0 0 5px blueviolet",
            borderRadius: "2px",
          }}
        />
      </label>
    </div>
  );
}
