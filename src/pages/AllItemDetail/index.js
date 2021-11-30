import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Checkbox,
} from "@material-ui/core";
import API from '../../utils/API';
import ItemCard from "../../components/ItemsCards/itemCard";
import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css";


const AllItemDetail = (props) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    // loadItems()
    // console.log(items)
  API.getItemById().then(res => {
      if(res.data){
        // const itemInfo = res.data
      console.log(res.data);
      setItems([...items,res.data]);
      // items.push(res.data)

    }})}, [])
  const loadItems = () => {
    if (items){
      return items.map((item) =>( <ItemCard 
      key={item.id} id={item.id} token={props.token} title={item.title} description={item.description} ageRange={item.ageRange} brand={item.brand} model={item.model} condition={item.condition} category={item.category} status={item.status}  />))
    }
  }
  return (
    <div className={styles.wrapper}>
     
            <div>{loadItems()}</div>
            
       
      </div>
    );
  };


export default AllItemDetail;
