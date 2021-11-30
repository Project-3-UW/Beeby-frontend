import API from '../utils/API';
import ItemCard from "../components/ItemsCards/itemCard";
import React, { useState, useEffect } from 'react'
import styles from '../components/ItemsCards/styles.module.css'



const SendEmail = (props) => {
    API.sendEmailBack().then(res => {
        if(!res){
            alert("something went wrong")
        }
        
        alert("your email was sent!");
        
    }
    )};

export default SendEmail;