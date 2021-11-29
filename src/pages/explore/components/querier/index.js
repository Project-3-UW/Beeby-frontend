import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import { useState } from "react";
import styles from "./styles.module.css";
const Querier = () => {
  const [queriersConfigs, setQueriersConfigs] = useState([
    {
      label: "Distance",
      key: "distance",
      defaultValue: "distance1",
      value: "",
      options: [
        { value: "distance1", label: "Less than 5 miles" },
        { value: "distance2", label: "More than 5 miles" },
      ],
    },
    {
      label: "Category",
      key: "category",
      defaultValue: "category1",
      value: "",
      options: [{ value: "category1", label: "Feeding" }],
    },
    {
      label: "Condition",
      key: "condition",
      defaultValue: "condition1",
      value: "",
      options: [{ value: "condition1", label: "New" }],
    },
    {
      label: "Age",
      key: "age",
      defaultValue: "age1",
      value: "",
      options: [{ value: "age1", label: "0-6m" }],
    },
  ]);

  const handleValueChange = (key, value) => {
    setQueriersConfigs(
      queriersConfigs.map((querierConfig) => {
        if (querierConfig.key === key) {
          querierConfig.value = value;
        }
        return querierConfig;
      })
    );
  };

  const renderQueriers = () => {
    return queriersConfigs.map((querierConfig) => {
      return (
        <div className={styles.queryKey} key={querierConfig.key}>
          <Typography variant="h6" component="div">
            {querierConfig.label}
          </Typography>

          <FormControl>
            <Select
              style={{ width: "300px" }}
              onChange={(e) =>
                handleValueChange(querierConfig.key, e.target.value)
              }
              label={querierConfig.label}
              value={querierConfig.value || querierConfig.defaultValue}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className={styles.selecter}
            >
              {querierConfig.options.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      );
    });
  };
  return <div className={styles.wrapper}>{renderQueriers()}</div>;
};

export default Querier;
