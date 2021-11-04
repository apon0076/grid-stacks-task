import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import HomeIcon from '@mui/icons-material/Home';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { styled} from '@mui/system';
import ModalContents from './ModalContents'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = {
    width: '50%',
    bgcolor: 'background.paper',
    p: 2,
    px: 4,
    pb: 3,
  };

export default function FormSection() {
    const [benifits, setBenifits] = React.useState(() => ['Health']);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
    const handleDevices = (event, newBenifits) => {
      if (newBenifits.length) {
        setBenifits(newBenifits);
      }
    };
  
  
    return (
        <div className="formSection">
            <form>
                <label className="formField__label">About Company <span>*</span></label>
                <br/>
                <br/>
                <TextareaAutosize
                    className="textArea formInput__field"
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Type in your summary"
                    style={{ width: '96% ', padding:'15px', color:'#666666',fontFamily:'Open Sans', border:'1px solid #dddddd', borderRadius:'3px', outline:'none'}}
                />



                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                        <label className="formField__label">Website</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Website (url)"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>

                        <Grid item xs={6}>
                        <label className="formField__label">Industry <span>*</span></label>
                        <br/>
                        <br/>
                        
                        <FormControl sx={{ minWidth: '100%' }}>
                        <InputLabel>Select industry</InputLabel>
                        <Select
                                label="Select industry"
                                >
                                <MenuItem value={1}>Option One</MenuItem>
                                <MenuItem value={2}>Option Two</MenuItem>
                                <MenuItem value={3}>Option Three</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                        <label className="formField__label">Company Size*</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Employees"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>
                        <Grid item xs={6}>
                        <label className="formField__label">Headquarters</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Enter text"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>   

                        <Grid item xs={6}>
                        <label className="formField__label">Type</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Enter text"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>
                        <Grid item xs={6}>
                        <label className="formField__label">Founded</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Enter text"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>                         
                </Grid>
                <label className="formField__label">Specialties</label>
                        <br/>
                        <br/>
                        <TextField
                        className="formInput__field"
                            label="Enter text"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />


                <Box sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                    <p className="benefit__section--title">Benefits</p>
                    <Button variant="outlined" size="large" className="add__benifit--btn"
                        onClick={handleOpen}
                    >Add Benefits</Button>
                </Box>


                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box sx={style}>
                    <ModalContents/>
                    </Box>
                </StyledModal>


                <ToggleButtonGroup
                    value={benifits}
                    onChange={handleDevices}
                    aria-label="device"
                    className="multiple__selection--section"
                >
                    <ToggleButton className="multipleSelection__items" value="laptop" aria-label="Health">
                    <div className="multipleSelection__name">
                    <BlurCircularOutlinedIcon/>
                    Excellent Health Care
                    </div>
                    <div className="check__icon">
                        <CheckOutlinedIcon className="check__icon--white"/>
                    </div>
                    </ToggleButton>
                    <ToggleButton className="multipleSelection__items" value="Snacks" aria-label="tv">
                    <div className="multipleSelection__name">
                    <HomeIcon/>
                    Daily Snacks
                    </div>
                    <div className="check__icon">
                        <CheckOutlinedIcon className="check__icon--white"/>
                    </div>
                    </ToggleButton>
                    <ToggleButton className="multipleSelection__items" value="Group" aria-label="phone">
                    <div className="multipleSelection__name">
                    <BarChartSharpIcon/>
                    Group Activities
                    </div>
                    <div className="check__icon">
                    <CheckOutlinedIcon className="check__icon--white"/>
                    </div>
                    </ToggleButton>
                    <ToggleButton className="multipleSelection__items" value="Volunteer" aria-label="laptop">
                    <div className="multipleSelection__name">
                    <SettingsIcon/>
                    Volunteer Opportunities
                    </div>
                    <div className="check__icon">
                    <CheckOutlinedIcon className="check__icon--white"/>
                    </div>
                    </ToggleButton>
                    <ToggleButton className="multipleSelection__items" value="Wellness" aria-label="tv">
                    <div className="multipleSelection__name">
                        <LightbulbOutlinedIcon/>
                        Wellness Programs
                    </div>
                    <div className="check__icon">
                    <CheckOutlinedIcon className="check__icon--white"/>
                    </div>
                    </ToggleButton>


                    <ToggleButton className="multipleSelection__items" value="Paid" aria-label="phone">
                        <div className="multipleSelection__name">
                            <CleanHandsOutlinedIcon className="multiple__selection--icons"/>
                            Paid time off
                        </div>
                        <div className="check__icon">
                        <CheckOutlinedIcon className="check__icon--white"/>
                        </div>
                    </ToggleButton>
                </ToggleButtonGroup>

                <div className="note__section">
                    <div className="modal__btnSection">
                    <Button className="back__btn" variant="outlined">Skip</Button>
                    <Button className="save__btn save__btn--arrow" variant="contained">
                        Save
                        <ArrowForwardIosOutlinedIcon className="btn--arrow"/>
                    </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
