import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Select,
  MenuItem,
  DialogActions,
  Button,
  Box,
} from "@material-ui/core";
import { useState } from "react";
import FileUploader from "../fileUploader";
import styles from "./styles.module.css";
const ItemDialog = ({ open = false, onSubmit, onCancel, item = {} }) => {
  const [title, setTitle] = useState(item.title || "");
  const [description, setDescription] = useState(item.description || "");
  const [category, setCategory] = useState(item.category || "");
  const [condition, setCondition] = useState(item.condition || "");
  const [brand, setBrand] = useState(item.brand || "");
  const [model, setModel] = useState(item.model || "");
  const [ageRange, setAgeRange] = useState(item.ageRange || "");
  const [status, setStatus] = useState(item.status || "");

  const handleFilesChange = (files) => {
    console.log(files);
  };

  const handleConfirm = () => {
    onSubmit({
      title,
      description,
      category,
      condition,
      brand,
      model,
      ageRange,
      status,
    });
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Item</DialogTitle>
      <DialogContent className={styles.forms}>
        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Title</FormLabel>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
          />
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Description</FormLabel>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
          />
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Category
          </FormLabel>
          <Select
            size="small"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={`Clothing, Shoes & Accessories`}>
              Clothing, Shoes & Accessories
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Condition
          </FormLabel>
          <Select
            size="small"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <MenuItem value={`Used (like new)`}>Used (like new)</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Brand
          </FormLabel>
          <Select
            size="small"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <MenuItem value={`Gap`}>Gap</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Model
          </FormLabel>
          <Select
            size="small"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <MenuItem value={`Blossom`}>Blossom</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Age Range
          </FormLabel>
          <Select
            size="small"
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <MenuItem value={`0-6m`}>0-6m</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend" className={styles.formItem}>
            Status
          </FormLabel>
          <RadioGroup
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            row
            aria-label="gender"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="available"
              control={<Radio />}
              label="Available"
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="Pending"
            />
            <FormControlLabel
              value="gifted"
              control={<Radio />}
              label="Gifted"
            />
          </RadioGroup>
        </FormControl>

        <Box width="600px">
          <FormControl component="fieldset" className={styles.formControl}>
            <FormLabel component="legend" className={styles.formItem}>
              Main Photo
            </FormLabel>
            <FileUploader onFilesChange={handleFilesChange} multiple={false} />
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="inherit" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDialog;
