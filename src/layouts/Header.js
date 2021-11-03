import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
    return (
            <div className="header__area">
                <Box
                sx={{
                boxShadow: 1,
                bgcolor: 'background.paper',
                p: 1,
                height: '8vh',
                }}
            >
                <Container fixed>
                    <ul className="header__section" >
                        <li>Company</li>
                        <li>Find Candidate</li>
                        <li>Guide</li>
                        <li className="user__loginName">
                            <PersonIcon className="user__loginName--icon"/>
                            Hi,Elise!
                        </li>
                    </ul>
                </Container>
            </Box>
            </div>
    )
}
