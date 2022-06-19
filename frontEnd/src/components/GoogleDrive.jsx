import { Button } from "@mui/material";
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker';

const GoogleDrive = ({files, setFiles, Account, setAccount}) => {

  


    const [openPicker, data, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
    
      clientId: "318539407218-faddhpr1j2ivonusogns739kni6b3oc0.apps.googleusercontent.com",
      developerKey: "AIzaSyBUOXEHQvY1E09cgPuMe8XpKoD8jueM2J8",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        console.log()
        if(data.action === 'picked') {
          setAccount(true);
            data.docs.map((i) => {
              const gfile = i
              setFiles([...files, i]);
              console.log(data.action)
            })
        }
    }   


    });
  }

 
    return (
        <div>
           <Button  onClick={() => handleOpenPicker()}>Browse Google Drive</Button>
        </div>
    )
}

export default GoogleDrive;