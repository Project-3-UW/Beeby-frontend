// import { IKImage, IKContext, IKUpload } from 'imagekitio-react'


// <IKContext publicKey="public_t+4VajkBmNbytb2Sa80EQD4geXo=" authenticationEndpoint="http://localhost:3001/auth">
//   // Simple file upload and response handling
//   <IKUpload
//     onError={onError}
//     onSuccess={onSuccess}
//   />

//   // Passing different upload API options
//   <IKUpload
//     fileName=".jpg"
//     tags={[]}
//     customCoordinates={""}
//     isPrivateFile={false}
//     useUniqueFileName={true}
//     responseFields={[""]}
//     folder={"/userImg"}
//     onError={onError}
//     onSuccess={onSuccess}
//   />
// </IKContext>


import React from 'react';
import './App.css';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const publicKey = 'public_t+4VajkBmNbytb2Sa80EQD4geXo=';
const urlEndpoint = 'https://ik.imagekit.io/beebyapp';
const authenticationEndpoint = 'http://localhost:3001/auth';

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
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      {/* ...other SDK components added previously */}
    </div>
  );
}

export default ImgUpload;