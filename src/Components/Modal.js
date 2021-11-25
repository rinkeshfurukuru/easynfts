import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              NFT Fractionalized
            </Typography>
            
            
            <div className="status-wrapper" >
                <div style={{flex:1}}>
                    <div>Status</div>
                    <div>{props.status}</div>
                </div>
                <div style={{flex:1}} >
                    <div>
                        Transaction Hash
                    </div>
                    <div>
                        <a 
                        style={{textDecoration:'underline'}}
                        onClick={()=>{
                          let url = "https://rinkeby.etherscan.io/tx/"+props.trxHash;
                          window.open(url, '_blank').focus();
                            
                        }}>{props.trxHash.toString().substr(0,10)}</a>
                    </div>
                </div>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Your NFT has been Fractionalized,Please view your contract details <span><a style={{textDecoration:'underline'}} href={"https://rinkeby.etherscan.io/address/"+props.listingAddress} >here</a></span>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
