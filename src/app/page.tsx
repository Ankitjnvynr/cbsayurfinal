// import HomeOne from '@/components/homes/home';
import HomeTwo from '@/components/homes/home-2';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Main Home MediDove React Next js Tempalte",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default HomeMain;