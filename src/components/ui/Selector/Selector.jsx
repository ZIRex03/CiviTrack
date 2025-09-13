import React, { useMemo } from "react";
import styles from "./Selector.module.scss";

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => {
    if (Array.isArray(acc)) {
      return acc.map((item) => item?.[key]).filter(Boolean);
    }
    return acc?.[key];
  }, obj);
};

const Selector = ({ 
  placeholder, 
  name, 
  value, 
  data = [], 
  field, 
  onChange, 
}) => {
  const options = useMemo(() => {
    if (!data || !field) return [];

    const rawValues = data.flatMap((item) => {
      const val = getNestedValue(item, field);
      return Array.isArray(val) ? val : [val];
    });

    return [...new Set(rawValues.filter(Boolean))];
  }, [data, field]);

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={styles.selectorContainer}>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {options.map(
          (opt, index) =>
            opt && (
              <option key={index} value={opt}>
                {opt}
              </option>
            )
        )}
      </select>
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
};

export default Selector;
