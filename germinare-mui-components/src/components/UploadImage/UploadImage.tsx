import React from 'react'
import { Image, NoImage, UploadImageStyle } from "./UploadImage.style"
import { Box } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
export default function UploadImage(){
    const [Url, setUrl] = useState('')
    return(
        <UploadImageStyle>
            <input type="file" accept="image/*" onChange={(event:any)=>{
                    setUrl(URL.createObjectURL(event.target.files[0]))
                }} />
            {Url.length > 0 ? <Image>
                <Box>
                    <EditIcon/>
                </Box>
                <img src={Url} alt=""/>
            </Image> : <NoImage> 
                <AddPhotoAlternateIcon/>
            </NoImage> }
        </UploadImageStyle>
    )
}