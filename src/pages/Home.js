import React from 'react';
import Layout from '../layouts/Layout';
import HeroArea from './../components/HeroArea';
import FormSection from './../components/FormSection';
import Container from '@mui/material/Container';


export default function Home() {
    return (
        <Layout>
            <div className="page__bg">
                <Container maxWidth="md">
                    <div className="body__section">
                        <HeroArea/>
                        <FormSection/>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}
