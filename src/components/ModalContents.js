import React from 'react'
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ModalContents() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    return (
        <div className="modal__contents">
            <p className="modal__title">Add Benefits</p>

            <div className="add__benefits">
                <p className="add__benefitsSection--title">Choose benefit to add</p>
                <div className="add__benefits--section">
                                        
                    <Chip
                        className="add__benefits--items"
                        label="Excellent Health Care"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Excellent Health Care"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Daily Snacks"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Group Activites"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Volunteer Opportunities"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Stock Options"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Wellness Programs"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Paid Time Off"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Life Insurance"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Unlimited PTO"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Tuition Reimbursement"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Family and Medical Leave (FMLA)"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Disability Insurance"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Commuter Benefits"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Remote Working"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Telecommuting"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Work from Home"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                    <Chip
                        className="add__benefits--items"
                        label="Other"
                        onClick={handleClick}
                        onDelete={handleDelete}
                        deleteIcon={<AddIcon />}
                    />
                </div>
            </div>
                <div className="benifitListSection">
                    <p className="benefitList__section--title">Benefits</p>

                    <div className="benifitList__area">
                        <ul>
                            <li>
                                <div className="titleAnd__icon">
                                    <BlurCircularOutlinedIcon className="benifit__icons"/>
                                    <div className="titleSection">
                                        <p className="benefit__title">Excellent Health Care</p>
                                        <p className="benefit__subTitle">We offer a comprehensive Benefits Package that includes Medical, dental, and vision coverage</p>
                                    </div>
                                </div>
                                <ul className="action__btns">
                                    <li><CreateIcon/></li>
                                    <li><DeleteIcon/></li>
                                    <li><DragIndicatorIcon/></li>
                                </ul>
                            </li>

                            <li>
                                <div className="titleAnd__icon">
                                    <HomeIcon className="benifit__icons"/>
                                    <div className="titleSection">
                                        <p className="benefit__title">Daily Snacks</p>
                                        <p className="benefit__subTitle">Enjoy various services and snacks in break room.</p>
                                    </div>
                                </div>
                                <ul className="action__btns">
                                    <li><CreateIcon/></li>
                                    <li><DeleteIcon/></li>
                                    <li><DragIndicatorIcon/></li>
                                </ul>
                            </li>
                        </ul>
                    <div className="benifitList__area befitList__addForm--section">
                        <label className="formField__label">Title*</label>
                        <br/>
                        <TextField className="formInput__field" id="standard-basic" label="Group Activites" variant="standard" />
                        <br/>
                        <br/>
                        <label className="formField__label">Description*</label>
                        <br/><br/>
                        <TextField
                        className="formInput__field"
                            label="Enter text"
                            type="text"
                            style={{ width: '100% ', color:'#666666',fontFamily:'Open Sans', borderRadius:'3px', outline:'none', backgroundColor:'#ffffff', boxShadow:'0 0 10px #c7c7c7'}}

                        />
                        <div className="note__section">
                            <div>
                            <note>150 Characters</note>
                            <Button className="gray__outline--btn" variant="outlined">Save</Button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="note__section">
                    <div className="modal__btnSection modal__btn--padding">
                    <Button className="back__btn" variant="outlined">Back</Button>
                    <Button className="save__btn" variant="contained">Save</Button>
                    </div>
                </div>
        </div>
    )
}
