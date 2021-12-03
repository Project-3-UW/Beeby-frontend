import API from '../utils/API';


const SendEmail = () => {
  
    API.sendEmailBack().then(res => {

        if (!res) {
            alert("something went wrong")
        }

        alert("your email was sent!");

    }
    )
};

export default SendEmail;