import { Button } from "@mui/material";




const LocalFile = ({files, setFiles}) => {

    const handleUploader =(e) => {
        const file = e.target.files[0];
          setFiles([...files, file ])

    }

    const handleInput = () => {
         document.getElementById("myInput").click()
    }
    
    console.log(files)

    
    return (
        <div>
            <input id="myInput" type="file" onChange={handleUploader} style={{display: "none"}}/>
            <input  type="button" onClick={handleInput} value="Browse This Computer"/>
        </div>
    )
}


export default LocalFile;