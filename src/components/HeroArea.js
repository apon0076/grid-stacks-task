import React from 'react';
import HeroImg from './../asset/images/heroImage.png';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ProfilePicture from './../asset/images/563ee58f5111cec7bacc28693e4bee77'

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
                <img className="profilePicture__image" src={ProfilePicture} alt="profile-picture"/>
                <div className="edit__iconSection edit__iconSection--profilePicture">
                    <ModeEditOutlinedIcon className="edit__iconSection--icon"/>
                </div>
            </div>
        </div>
    )
}
