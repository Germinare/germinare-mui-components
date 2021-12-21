import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
export const UploadImageStyle = styled(Box)(()=>({
    minWidth: "257px",
    maxWidth: "300px",
    minHeight: "238px",
    cursor: "pointer",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    position: "relative",
    '& > input':{
        position: "absolute",
        opacity: "0",
        zIndex: "999",
        height: "100%", 
        width: "100%",
        cursor: "pointer"
    },
    "&:hover > div > div":{
        opacity: "1"
    },
    '& > div':{

       
        '& svg':{
            fontSize: "80px",
            color: "white"
        }
    }
}))
export const NoImage = styled(Box)(()=>({
    transition: ".3s ease-in-out",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#D8DDE6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))
export const Image = styled(Box)(()=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    '&> div':{
        transition: ".3s ease-in-out",
        borderRadius: "5px",
        background: "#0000009e",
        opacity: "0",
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "0",
        right: "0",
        display: "flex",
    alignItems: "center",
    justifyContent: "center",   
        margin: "0 auto"
    },
    '& > img':{
       maxWidth: "100%",
       maxHeight: "100%"
    }
}))