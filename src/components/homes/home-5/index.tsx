
import HeaderFour from '@/layout/headers/HeaderFour';
import React from 'react';
import HeroAreaHomeFour from '../home-4/HeroAreaHomeFour';
import AboutAreaHomeFive from './AboutAreaHomeFive';
import ServicesAreaHomeFour from '../home-4/ServicesAreaHomeFour';
import TeamAreaHomeFour from '../home-4/TeamAreaHomeFour';
import RoutineAreaHomeFive from './RoutineAreaHomeFive';
import PhotoGalleryHomeFive from './PhotoGalleryHomeFive';
import AppoinmentAreaHomeFour from '../home-4/AppoinmentAreaHomeFour';
import FactAreaHomeFour from '../home-4/FactAreaHomeFour';
import MedicalTabHomeFive from './MedicalTabHomeFive';
import HowItWorksHomeFour from '../home-4/HowItWorksHomeFour';
import TestimonialsHomeFour from '../home-4/TestimonialsHomeFour';
// import CounterHomeFive from './CounterHomeFive';
import UpdateFive from './UpdateFive';
// import LatestNewsAreaHomeFour from '../home-4/LatestNewsAreaHomeFour';
// import BrandAreaHomeFour from '../home-4/BrandAreaHomeFour';
import FooterFour from '@/layout/footers/FooterFour';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import FooteTwo from '@/layout/footers/FooteTwo';

const HomeFive = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroAreaHomeFour style={true} />
        <AboutAreaHomeFive />
        <ServicesAreaHomeFour style={true} />
        <TeamAreaHomeFour />
        <RoutineAreaHomeFive />
        <PhotoGalleryHomeFive />
        <AppoinmentAreaHomeFour />
        <FactAreaHomeFour />
        <MedicalTabHomeFive />
        <HowItWorksHomeFour />
        <TestimonialsHomeFour />
        <UpdateFive/>
        {/* <CounterHomeFive /> */}
        {/* <LatestNewsAreaHomeFour />
        <BrandAreaHomeFour /> */}
      </main>
      <FooteTwo />
    </>
  );
};

export default HomeFive;