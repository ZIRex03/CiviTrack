import React, { useMemo, useState, useRef, useEffect } from "react";
import styles from "./MultiSelector.module.scss";

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => {
    if (Array.isArray(acc)) {
      return acc.map((item) => item?.[key]).filter(Boolean);
    }
    return acc?.[key];
  }, obj);
};

const MultiSelector = ({ placeholder, name, value = [], data = [], field, onChange}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const options = useMemo(() => {
    if (!data || !field) return [];

    const rawValues = data.flatMap((item) => {
      const val = getNestedValue(item, field);
      return Array.isArray(val) ? val : [val];
    });

    return [...new Set(rawValues.filter(Boolean))].sort((a,b) => a.localeCompare(b, "ru"));
  }, [data, field]);

  const toggleOption = (opt) => {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.selectorContainer} ref={ref}>
      <div
        className={`${styles.inputBox} ${open ? styles.active : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value.length === 0 ? styles.placeholder : ""}>
          {value.length > 0 ? value.join(", ") : ""}
        </span>
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
        <label
          className={`${styles.floatingLabel} ${
            open || value.length > 0 ? styles.active : ""
          }`}
          htmlFor={name}
        >
          {placeholder}
        </label>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt, index) => (
            <label key={index} className={styles.option}>
              <input
                type="checkbox"
                checked={value.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelector;
