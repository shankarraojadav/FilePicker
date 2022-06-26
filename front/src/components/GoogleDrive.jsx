import { Button } from "@mui/material";
import  { useEffect, useState} from 'react';
import { uploadFile } from "../api";
import LocalFile from "./Localfile";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './addattach.css';

const GoogleDrive = () => {

  const [accessToken, setAccessToken] = useState(null);
  // add_attachement

  const [files, setFiles] = useState([{
   
  }]);


  const removeFile = () => {
    setFiles([])
  }

 
  // console.log(files)

  const upload =async () => {
          
          const response = await uploadFile(files);
          console.log(response)
  }

  const handleSignOut = () => {
    setAccessToken('')
  }


 // add_attachement

const clientId = "318539407218-faddhpr1j2ivonusogns739kni6b3oc0.apps.googleusercontent.com";
const apikey = "AIzaSyBUOXEHQvY1E09cgPuMe8XpKoD8jueM2J8";

const scopes = 'https://www.googleapis.com/auth/drive.metadata.readonly';
let tokenClient;


	let pickerInited = false;
	let gisInited = false;
	// const [docs, setDocs] = useState([]);

	useEffect(() => {
		const script = document.createElement('script');
		const script2 = document.createElement('script');

		script.src = 'https://apis.google.com/js/api.js';
		script2.src = 'https://accounts.google.com/gsi/client';
		script.onload = () => {
			gapiLoaded();
		};
		script2.onload = () => {
			gisLoaded();
		};
		script.async = true;
		script2.async = true;

		document.body.appendChild(script);
		document.body.appendChild(script2);
		return () => {
			document.body.removeChild(script);
			document.body.removeChild(script2);
		};
	}, []);

	const gapiLoaded = () => {
		//@ts-ignore
		window.gapi.load('picker', initializePicker);
	};
	function initializePicker() {
		pickerInited = true;
	}

	function gisLoaded() {
		//@ts-ignore
		tokenClient = window.google.accounts.oauth2.initTokenClient({
			client_id: clientId,
			scope: scopes,
			callback: '' // defined later
		});
		gisInited = true;
	}

	function handleAuthClick() {
		tokenClient.callback = async (response) => {
			if (response.error !== undefined) {
				throw response;
			}
			setAccessToken(response.access_token);

			// await createPicker();
		};

		if (accessToken === null) {
			// Prompt the user to select a Google Account and ask for consent to share their data
			// when establishing a new session.
			tokenClient.requestAccessToken({ prompt: 'consent' });
		} else {
			// Skip display of account chooser and consent dialog for an existing session.
			tokenClient.requestAccessToken({ prompt: '' });
		}
	}

	function createPicker() {
		const view = new window.google.picker.View(
			window.google.picker.ViewId.DOCS
		);

		const picker = new window.google.picker.PickerBuilder()
			.enableFeature(window.google.picker.Feature.NAV_HIDDEN)
			.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
			.setDeveloperKey(apikey)
			// .setAppId(secret.projectNumber)
			.setOAuthToken(accessToken)
			.addView(view)
			.addView(new window.google.picker.DocsUploadView())
			.setCallback(pickerCallback)
			.build();
		picker.setVisible(true);
	}

	function pickerCallback(data) {
	// eslint-disable-next-line no-undef
	if (data.action === google.picker.Action.PICKED) {
		console.log(data.docs);

		setFiles(data.docs);
	 }
	}
   
 
    return (
        <div>
          
       
       {/* add_attachement */}

       <div className="app">
    <h1 style={{color:"#2874f0", fontFamily:"cursive"}}>FilePicker</h1>
      <div className="btn">

      
       <div className='connect_drive'>
       {accessToken ? <Button onClick={handleSignOut} variant="contained">SignOut</Button> : 
       
       <Button variant="contained" onClick={handleAuthClick}>
				Connect to Google Drive
			</Button>
       } 
       </div>
       <div className='popup'>
       <Popup trigger={<Button variant='contained' disabled={accessToken === null}> Click to open popup </Button>} 
        position="top">
      <LocalFile files={files} setFiles={setFiles}/>
      <Button  onClick={createPicker} className='drive'>Gogle Drive</Button>
    </Popup>
       </div>
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
        </div>
    )
}

export default GoogleDrive;
