import React, { useState, useEffect } from "react";
import classes from "./Filter.module.css";
import PriceFilter from "./PriceFilter";

// const Brand = ({ brand, change }) => {
//   return (
//     <div className={classes.BrandNameContainer}>
//       <input type="checkbox" onChange={change} value={brand} />
//       <p>{brand}</p>
//     </div>
//   );
// };

const Filter = ({
  ascending,
  descending,
  sortClicked,
  // brands,
  brandFilter,
  priceFilter,
}) => {
  // const [selectedBrands, setSelectedBrands] = useState([]);

  // useEffect(() => {
  //   brandFilter(selectedBrands);
  // }, [selectedBrands, brandFilter]);

  // const brandChangeHandler = (event) => {
  //   if (event.target.checked) {
  //     setSelectedBrands((prev) => {
  //       if (!prev.includes(event.target.value))
  //         return [...prev, event.target.value];
  //       else return prev;
  //     });
  //   } else {
  //     if (selectedBrands.includes(event.target.value)) {
  //       setSelectedBrands((prev) => {
  //         prev.splice(prev.indexOf(event.target.value), 1);
  //         return [...prev];
  //       });
  //     }
  //   }
  // };

  // let brandJsx = brands.map((brand, index) => (
  //   <Brand key={index} brand={brand} change={brandChangeHandler} />
  // ));

  return (
    <div className={classes.Filter}>
      <h4>Filter</h4>
      <section className={classes.FilterSection}>
        <p>By Price</p>
        <PriceFilter priceFilter={priceFilter} />
      </section>
      <h4>Sort</h4>
      <div className={classes.SortOptContainer}>
        <p
          onClick={() => sortClicked(true)}
          className={
            ascending ? classes.SortOpt + " " + classes.Active : classes.SortOpt
          }
        >
          Price - low to high
        </p>
        <p
          onClick={() => sortClicked(false)}
          className={
            descending
              ? classes.SortOpt + " " + classes.Active
              : classes.SortOpt
          }
        >
          Price - high to low
        </p>
      </div>
    </div>
  );
};

export default Filter;
