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
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const publicKey = 'public_t+4VajkBmNbytb2Sa80EQD4geXo=';
const urlEndpoint = 'https://ik.imagekit.io/beebyapp';
const authenticationEndpoint = 'http://localhost:3001/auth'; //TODO: change when deployed

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
      <DialogTitle id="alert-dialog-title">New Item</DialogTitle>
      <DialogContent className={styles.forms}>
        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Title</FormLabel>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            size="small"
          />
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Description</FormLabel>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            size="small"
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
            <MenuItem value={`Baby food`}>Baby food</MenuItem>
            <MenuItem value={`Baby toys`}>Baby toys</MenuItem>
            <MenuItem value={`Books`}>Books</MenuItem>
            <MenuItem value={`Bathing & Skincare`}>Bathing & Skincare</MenuItem>
            <MenuItem value={`Clothing, Shoes & Accessories`}>Clothing, Shoes & Accessories</MenuItem>
            <MenuItem value={`Car seats & Accessories`}>Car seats & Accessories</MenuItem>
            <MenuItem value={`Diapering`}>Diapering</MenuItem>
            <MenuItem value={`Feeding`}>Feeding</MenuItem>
            <MenuItem value={`Nursery furniture & Decor`}>Nursery furniture & Decor</MenuItem>
            <MenuItem value={`Pregnancy & Maternity`}>Pregnancy & Maternity</MenuItem>
            <MenuItem value={`Strollers`}>Strollers</MenuItem>
            <MenuItem value={`Safety Equipment`}>Safety Equipment</MenuItem>
            <MenuItem value={`Others`}>Others</MenuItem>
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
            <MenuItem value={`New`}>New</MenuItem>
            <MenuItem value={`Used (like new)`}>Used (like new)</MenuItem>
            <MenuItem value={`Used (normal wear)`}>Used (normal wear)</MenuItem>
            <MenuItem value={`Used (functional but missing part)`}>Used (functional but missing part)</MenuItem>
            <MenuItem value={`Other (see description)`}>Other (see description)</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Brand</FormLabel>
          <TextField
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            variant="outlined"
            size="small"
          />
        </FormControl>

        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Model</FormLabel>
          <TextField
            value={model}
            onChange={(e) => setModel(e.target.value)}
            variant="outlined"
            size="small"
          />
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
            <MenuItem value={`6-12m`}>6-12m</MenuItem>
            <MenuItem value={`12-18m`}>12-18m</MenuItem>
            <MenuItem value={`18-24m`}>18-24m</MenuItem>
            <MenuItem value={`2-3 years`}>2-3 years</MenuItem>
            <MenuItem value={`3-4 years`}>3-4 years</MenuItem>
            <MenuItem value={`4 years and up`}>4 years and up</MenuItem>
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
            </FormLabel>
            <FileUploader onFilesChange={handleFilesChange} multiple={false} />
            <IKContext 
              publicKey={publicKey} 
              urlEndpoint={urlEndpoint} 
              authenticationEndpoint={authenticationEndpoint} >
              <IKUpload
                fileName="test-upload.png"
                onError={onError}
                onSuccess={onSuccess}
              />
            </IKContext>
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
