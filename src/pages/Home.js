import React from 'react';
import '../App.css';
import HeroSection from '../components/Hero/Hero';
import SectionOne from '../components/Sections/SectionOne';
import SectionThree from '../components/Sections/SectionThree';
import SectionTwo from '../components/Sections/SectionTwo';


export default function Home() {
    return (
        <>
            <HeroSection />
            <div className="overflow-hidden">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>
        </>
    )
}
