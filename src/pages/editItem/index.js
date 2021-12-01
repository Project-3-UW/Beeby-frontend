import { Box, Button, Checkbox } from "@material-ui/core";
import styles from "./styles.module.css";
import ItemCard from "../../components/itemCard";
import EditItem from "../../components/itemDialog";
import { useState } from "react";
import FileUploader from "../../components/fileUploader";
const ItemDetail = () => {
  const item = {
    title: "new born baby clothing",
    category: "Clothing, Shoes & Accessories",
    condition: "Used (like new)",
    brand: "Gap",
    model: "Blossom",
    ageRange: "0-6m",
    description: "10 cute baby girl one-piece",
    UserId: 3,
    status: "available",
  };
  const [openEdit, setOpenEdit] = useState(false);
  const handleClickUpdate = () => {
    setOpenEdit(true);
  };
  const handleSubmit = (updatedItem) => {
    console.log(updatedItem);
  };
  const handleCancel = () => {
    setOpenEdit(false);
  };
  const handleFilesChange = (files) => {
    console.log(files);
  };
  return (
    <div className={styles.wrapper}>
      <EditItem
        item={item}
        open={openEdit}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
      <Box>
        <ItemCard
          cardActionComponents={
            <Button variant="contained" onClick={handleClickUpdate}>
              Update
            </Button>
          }
        />
      </Box>
      <Box flexGrow="1">
        <Box display="flex" gap="20px">
          <Box>
            <FileUploader
              multiple={true}
              showImages={false}
              onFilesChange={handleFilesChange}
            />
          </Box>
          <Button variant="outlined" color="error">
            Delete
          </Button>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <div className={styles.itemImageBox}>
            <Checkbox className={styles.itemImageCheckbox} />
            <img
              className={styles.itemImage}
              src="https://www.vodafone.com.au/images/devices/apple/iphone-13-mini/iphone-13-mini-pink-feature1-m.jpg"
              alt=""
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
