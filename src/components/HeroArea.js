import React from 'react';
import Container from '@mui/material/Container';
import HeroImg from './../asset/images/heroImage.png';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export default function HeroArea() {
    return (
        <div>
            <div className="heroArea__bannerSection">
                <img className="heroArea__bannerSection--img" src={HeroImg} alt="hero-image"/>
                <div className="heroArea__overlay"></div>
                <div className="edit__iconSection edit__iconSection--banner">
                    <ModeEditOutlinedIcon className="edit__iconSection--icon"/>
                </div>
            </div>
            <div className="profile__pictureSection">
                <div className="edit__iconSection edit__iconSection--profilePicture">
                    <ModeEditOutlinedIcon className="edit__iconSection--icon"/>
                </div>
            </div>
        </div>
    )
}
