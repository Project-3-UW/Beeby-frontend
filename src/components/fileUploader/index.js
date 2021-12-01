import { Button, Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const FileUploader = ({
  onFilesChange,
  multiple = false,
  showImages = true,
}) => {
  const [files, setFiles] = useState([]);
  const [filesSrc, setFilesSrc] = useState([]);
  const fileInputId = "fileinput" + Math.ceil(Math.random() * 10000);

  const handleSelectFile = (e) => {
    const newFiles = [...e.target.files].map((file) => {
      const fileID = Math.ceil(Date.now() + Math.random() * 10000);
      return {
        id: fileID,
        file,
      };
    });
    const filesData = multiple ? [...files, ...newFiles] : [...newFiles];
    setFiles(filesData);
  };

  const handleClickDelete = (fileID) => {
    setFiles(
      files.filter((file) => {
        return file.id !== fileID;
      })
    );
  };

  const renderImages = () => {
    return filesSrc.map((image) => {
      return (
        <div className={styles.imageBox} key={image.id}>
          <img alt="" src={image.src} />
          <div
            className={styles.deleteIcon}
            onClick={() => handleClickDelete(image.id)}
          >
            <DeleteIcon />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    if (onFilesChange instanceof Function) {
      onFilesChange(files);
    }
    let images = [];
    if (files.length === 0) {
      setFilesSrc(images);
    }
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        images.push({
          id: file.id,
          src: e.target.result,
        });
        if (images.length === files.length) {
          setFilesSrc(images);
        }
      };
      reader.readAsDataURL(file.file);
    });
  }, [files]);

  return (
    <div className={styles.wrapper}>
      <label htmlFor={fileInputId}>
        <input
          onChange={handleSelectFile}
          multiple={multiple}
          accept="image/*"
          className={styles.fileInput}
          id={fileInputId}
          type="file"
        />

        <Button variant="outlined" component="span">
          Upload
        </Button>
      </label>
      {showImages && (
        <Box width="100%" display="flex" flexWrap="wrap">
          {renderImages()}
        </Box>
      )}
    </div>
  );
};

export default FileUploader;
