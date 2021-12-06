import { FormControl, MenuItem, Select, Typography, Button} from "@material-ui/core";
import { useState } from "react";
import GetDistance from "../../../../utils/distance";
import styles from "./styles.module.css";
const Querier = ({changeQueryHandler}) => {
  const [queriersConfigs, setQueriersConfigs] = useState([
    {
      label: "Distance",
      key: "distance",
      defaultValue: "",
      value: "",
      options: [
        { value: "", label: "Show all" },
        { value: "5", label: "less than 5 miles" },
        { value: "10", label: "less than 10 miles" },
        { value: "15", label: "less than 15 miles" },
        { value: "20", label: "less than 20 miles" }
      ],
    },
    {
      label: "Category",
      key: "category",
      defaultValue: "",
      value: "",
      options: [
        { value: "", label: "Show all" },
        {
          value: "Feeding",
          label: "Feeding",
        },
        {
          value: "Baby food",
          label: "Baby food",
        },
        {
          value: "Clothing, Shoes & Accessories",
          label: "Clothing, Shoes & Accessories",
        },
        {
          value: "Car seats & Accessories",
          label: "Car seats & Accessories",
        },
        {
          value: "Nursery furniture & Decor",
          label: "Nursery furniture & Decor",
        },
        {
          value: "Baby toys",
          label: "Baby toys",
        },
        {
          value: "Bathing & Skincare",
          label: "Bathing & Skincare",
        },
        {
          value: "Diapering",
          label: "Diapering",
        },
        {
          value: "Strollers",
          label: "Strollers",
        },
        {
          value: "Pregnancy & Maternity",
          label: "Pregnancy & Maternity",
        },
        {
          value: "Potty Training",
          label: "Potty Training",
        },
        {
          value: "Safety Equipment",
          label: "Safety Equipment",
        },
        {
          value: "Books",
          label: "Books",
        },
        {
          value: "Others",
          label: "Others",
        },
      ],
    },
    {
      label: "Condition",
      key: "condition",
      defaultValue: "",
      value: "",
      options: [
        { value: "", label: "Show all" },
        { value: "New", label: "New" },
        { value: "Used (like new)", label: "Used (like new)" },
        { value: "Used (normal wear)", label: "Used (normal wear)" },
        {
          value: "Used (functional but missing part)",
          label: "Used (functional but missing part)",
        },
        { value: "Other (see description)", label: "Other (see description)" },
      ],
    },
    {
      label: "Age",
      key: "age",
      defaultValue: "",
      value: "",
      options: [
        { value: "", label: "Show all" },
        { value: "0-6m", label: "0-6m" },
        { value: "6-12m", label: "6-12m" },
        { value: "12-18m", label: "12-18m" },
        { value: "18-24m", label: "18-24m" },
        { value: "2-3 years", label: "2-3 years" },
        { value: "3-4 years", label: "3-4 years" },
        { value: "4 years and up", label: "4 years and up" },
      ],
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
    changeQueryHandler(key,value)
  };

  const renderQueriers = () => {
    return queriersConfigs.map((querierConfig) => {
      return (
        <div className={styles.queryKey} key={querierConfig.key}>
          <Button onClick={GetDistance}type="button">Click me for distance</Button>
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
