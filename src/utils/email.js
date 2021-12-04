import API from '../utils/API';
// import { Mailer } from 'nodemailer-react'
import useState from "react";


const SendEmail = () => {
    // const [email, setEmail] = useState("");
  console.log('clicked')
    API.sendEmailBack().then(res => {
        console.log(res)
        // setEmail(res.data.email)
        // email.setItem("email", res.data.email)
        if (!res) {
            alert("something went wrong")
            console.log(res)
        }

        alert("your email was sent!");
        console.log(res)

    }
    ) 
 
};

export default SendEmail;