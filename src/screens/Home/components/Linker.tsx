import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles";
import {IconButton} from "@mui/material"
import { CopyAllTwoTone, CopyAllOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

export default function Linker({ opened, link, setOpened }: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(()=>{
    setOpen(opened)
  }, [opened])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = () =>
    toast.success(
      "Lien copier dans votre presse papier",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  const handleClose = () => {
    setOpen(false);
    setOpened(false)
  };

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(link)
    notify()
  }

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="copier les liens des images"
        onClick={handleClickOpen}
      >
        <CopyAllOutlined />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Lien optimiser de votre image vers les serveurs guihon"}
        </DialogTitle>
        <DialogContent>
          <br />
          <Stack direction="row" spacing={0}>
            <TextField
              id="outlined-basic"
              label="Fichier normal au format (.webp)"
              variant="outlined"
              fullWidth
              value={link}
            />
            <Button
              variant="contained"
              endIcon={<CopyAllTwoTone />}
              onClick={copyToClipboard}
            >
              copier
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
