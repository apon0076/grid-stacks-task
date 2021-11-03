import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';import { border } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function FormSection() {
    return (
        <div className="formSection">
            <form>
                <label className="formField__label">About Company <span>*</span></label>
                <br/>
                <br/>
                <TextareaAutosize
                    className="textArea"
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Type in your summary"
                    style={{ width: '96% ', padding:'15px', color:'#666666',fontFamily:'Open Sans', border:'1px solid #dddddd', borderRadius:'3px', outline:'none'}}
                />
                <br/>
                <br/>
                <br/>


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                        <label className="formField__label">Website</label>
                        <br/>
                        <br/>
                        <TextField
                            label="Website (url)"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        />
                        </Grid>
                        <br/>
                        <br/>
                        <br/>


                        <Grid item xs={6}>
                        <label className="formField__label">Industry <span>*</span></label>
                        <br/>
                        <br/>
                        <TextField
                            label="Select industry"
                            select
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none'}}

                        >
                            <MenuItem>
                                Option One
                            </MenuItem>
                            <MenuItem>
                                Option Two
                            </MenuItem>
                        </TextField>
                        </Grid>
                        <br/>
                        <br/>
                        <br/>
                       
                </Grid>
            </form>
        </div>
    )
}
