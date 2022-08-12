import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./Uploader.css";
import defaultImage from "./defaultThumbnail.png";
import { ResetTvOutlined, UploadFileOutlined } from "@mui/icons-material";

function Uploader() {

  const dImg = `${defaultImage}`
  const [img, setImg] = React.useState({});
  const [apercu, setApercu] = React.useState(dImg)
  const [uploading, setUploading] = React.useState(false)
  const [imgSelected, setImgSelected] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(0)
  const selectImage = React.useRef<HTMLInputElement>(null);
  const [imgName, setImgName] = React.useState("")
  const [imgSize, setImgSize] = React.useState(0)
  const [size, setSize] = React.useState(`${imgSize}`)

  const handleSelectImg = ()=> {
    selectImage?.current?.click()
  }

  const handleFile = async(event:any) => {
    if (event.currentTarget.files[0]){
        const convertionNumber = 1000;
        const acceptType = [
          "image/png",
          "image/jpg",
          "image/jpeg",
          "image/svg+xml",
          "image/webp",
        ];

        if (acceptType.includes(event.currentTarget.files[0].type)){
            const urlImg = URL.createObjectURL(event.currentTarget.files[0]);
            setImg(event?.currentTarget?.files[0]);
            setImgName(event?.currentTarget?.files[0]?.name);
            setImgSize(event?.currentTarget?.files[0]?.size);
            setApercu(urlImg);
            setImgSelected(true);
        }

        const sizeKo = Math.floor(
          event?.currentTarget?.files[0]?.size / convertionNumber
        );
        const sizeMo = Math.floor(sizeKo / convertionNumber)

        if (sizeMo < 1) {
          setSize(sizeKo + " KO");
        } else {
          setSize(sizeMo + " MO");
        }
        
    }
  }

  const handleReset = (event:any) => {
    setImg({})
    setApercu(dImg)
    setImgSelected(false)
    setImgName("")
    setImgSize(0)
  }



  return (
    <div className="Upload-image">
      <input
        id="image"
        type="file"
        style={{ display: "none" }}
        ref={selectImage}
        onChange={handleFile}
      />
      <label htmlFor="image">
        <Card variant="outlined" className="Uploader">
          <CardMedia
            component="img"
            height="440"
            image={apercu}
            alt="image uploader"
          />
          {imgSelected ? (
            <CardContent>
              <List>
                <ListItem button>
                  <ListItemText className="imgTitle" primary={`${imgName}`} />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText className="imgSize" primary={`${size}`} />
                </ListItem>
              </List>
            </CardContent>
          ) : null}
          <CardActions>
            {imgSelected ? (
              <div>
                <Button
                  color="error"
                  disableElevation
                  startIcon={<ResetTvOutlined />}
                  onClick={handleReset}
                >
                  Annuler
                </Button>
                <LoadingButton
                  loading={uploading}
                  variant="contained"
                  loadingPosition="start"
                  startIcon={<UploadFileOutlined />}
                  disableElevation
                >
                  Televerser
                </LoadingButton>
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleSelectImg}
                >
                  Selectionner l'image a televerser
                </Button>
              </div>
            )}
          </CardActions>
        </Card>
      </label>
    </div>
  );
}

export default Uploader;
