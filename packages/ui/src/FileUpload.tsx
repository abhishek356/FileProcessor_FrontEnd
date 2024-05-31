'use client'

import React, { ChangeEvent, MutableRefObject } from "react";
import {Card,Box,CardContent,Button,styled} from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from "react";


let VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

let FileUpload = (props:{
    onClick:(file)=>void
})=>{

let imageFile = useRef();
    let handleUpload = (e)=>{
        imageFile.current = e.target.files[0];

        console.log(`handleUpload function called with file value`,e.target.files[0])
        if(imageFile!= null && imageFile!=undefined)
            {
          console.log(`This is the file received from the system`,imageFile);
                return props.onClick(imageFile.current)
            }
            else{
                console.log(`The image data present in file is null`,imageFile)
            }
             
        
    }

    let handleSubmit = async (e)=>{

        console.log(`the form got submitted`)
        e.preventDefault();

        if(imageFile!)
            {
                console.log(`please select a file`);
                return
            }
    }

    return  (<>
    
            <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
              
                <Card sx={{
                    width:'20%',
                    height:'60%',
                    position:'absolute',
                    top:'50%',
                    left:'50%',
                    transform: 'translate(-50%,-50%)'
                    
                }}>
                    <CardContent >
                        <Box sx={{
                            margin:'0',
                            position :'relative',
                            display:'flex',
                            justifyContent:'center',
                            
                        }}>
                            <Box sx={{
                                    position:'absolute',
                                    marginTop:'30px',
                                    top:'100%'
                            }}>
                            <img src = 'https://cdn3.iconfinder.com/data/icons/photo-tools/65/upload-1024.png' width='150px'  height='150px' alt =  "Description"/>
                            </Box>
                        </Box>
                        
                        <Button 
                        component = 'label'
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                        sx = {{
                            position :'absolute',
                            top:'80%',
                            left:'50%',
                            transform : 'translate(-50%,-50%)'
                        }}
                        > 
                        Upload file
                            <VisuallyHiddenInput type = "file" onChange = {(e)=>{
                                handleUpload(e);
                                console.log(`the  update button was clicked`)
                            }}/>
                        </Button>
                        
                     
                            

                    </CardContent>

                </Card>
                </form>
         
        
                
                
            </div>
    </>)
}

export default FileUpload;