import './addattach.css';
import LocalFile from './Localfile';
import { useState } from 'react';
import GoogleDrive from './GoogleDrive';
import { Button } from '@mui/material';
import { Computer, InsertDriveFile }  from '@mui/icons-material'
import { uploadFile } from '../api';


function AddAttachement() {

  const [files, setFiles] = useState([{
   
  }]);

  const [Account, setAccount] = useState(null);


  const removeFile = () => {
    setFiles([])
  }

  const signOut =() => {
      setAccount()
  };


  // console.log(files)

  const upload =async () => {
           await uploadFile(files);
  }

  return (
   <div className="app">
    <h1 style={{color:"#2874f0", fontFamily:"cursive"}}>FilePicker</h1>
      <div className="btn">
        {
          Account? <Button onClick={signOut}>SignOut</Button> :
          <Button>Google Drive </Button>
        }
        <ul className='menu'>
            <li>
                <Button >Add Attachement</Button>
                <ul className='submenu'>
                    <li style={{display: "flex", flexDirection: "row"}}><Computer /><LocalFile files={files} setFiles={setFiles} /></li>
                    <li style={{display: "flex", flexDirection: "row"}} ><InsertDriveFile /><GoogleDrive files={files} setFiles={setFiles} Account={Account} setAccount={setAccount}/></li>
                </ul>
            </li>
        </ul>
        
      </div>
      <div className='show_file'>
           {
            files.map((data, ind) => {
               return <p key={ind}>{data.name}</p>
            })
           }
      </div>
       <div className='activity_btn'>
       <Button onClick={removeFile} variant="contained">Remove Selected File</Button>
       <Button variant="contained" onClick={upload}>Upload Files</Button>
       </div>
   </div>
  );
}

export default AddAttachement;
