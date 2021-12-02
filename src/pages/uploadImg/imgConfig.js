
import React from 'react';
import './App.css';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const publicKey = 'public_t+4VajkBmNbytb2Sa80EQD4geXo=';
const urlEndpoint = 'https://ik.imagekit.io/beebyapp';
//change to server with new auth route
const authenticationEndpoint = 'http://localhost:3001/auth'||'https://beeby-backend.herokuapp.com';

const onError = err => {
  console.log("Error", err);
};

const onSuccess = res => {
  console.log("Success", res);
};

function ImgUpload() {
  return (
    <div className="App">
      <h1>ImageKit React quick start</h1>
      <IKContext 
        publicKey={publicKey} 
        urlEndpoint={urlEndpoint} 
        authenticationEndpoint={authenticationEndpoint} 
      >
        <p>Upload an image</p>
        <IKUpload
          fileName={props}
          isPrivateFile={false}
          useUniqueFileName={true}
          responseFields={[""]}
          folder={"/userImg"}
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      {/* ...other SDK components added previously */}
    </div>
  );
}

export default ImgUpload;