'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Abhyanga [Oil Massage]',
    course: '',
    text: 'Nourishes skin, improves circulation, and relaxes muscles. A full-body therapeutic oil massage using warm herbal oils, tailored to an individual’s dosha (body type).',
  },
  {
    name: 'Shirodhara',
    course: '',
    text: 'A stream of warm oil on the forehead to calm the mind. A gentle, continuous stream of warm herbal oil poured on the forehead (third eye region) to calm the nervous system and promote mental clarity.',
  },
  {
    name: 'Swedana [Herbal Therapy]',
    course: '',
    text: 'Opens pores, detoxifies, and relaxes the body. A steam therapy using medicinal herbs to induce sweating, promoting detoxification and muscle relaxation.',
  },
  {
    name: 'Basti [Medicated Enema]',
    course: '',
    text: 'Cleanses the colon and balances Vata dosha. A medicated enema treatment that cleanses the colon and removes toxins, particularly balancing Vata dosha.',
  },
  {
    name: 'Nasya [Nasal Therapy]',
    course: '',
    text: 'CClears sinuses, improves breathing, and sharpens the mind. A therapeutic nasal cleansing treatment that uses herbal oils or powders to remove toxins from the sinuses, head, and brain.',
  },
];

const PanchakarmalinkTwo = () => {
  return (
    <div style={{ background: '#062a1a', padding: '50px 0' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '30px'
      }}>
        Panchakarma 
      </h2>
      <h3 style={{
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '25px'
      }}>
        Cleanse. Heal. Rejuvenate.
        </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ padding: '0 30px' }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '10px',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center',
              height: '100%'
            }}>
              <div>
                <h3 style={{ marginBottom: '5px', fontSize: '20px', fontWeight: '600' }}>{t.name}</h3>
                <p style={{ marginBottom: '15px', color: '#6c757d' }}>{t.course}</p>
                <p style={{ color: '#0c2d57', fontWeight: 500 }}>{`"${t.text}"`}</p>
              </div>
              {/* <div style={{ marginTop: '20px', fontSize: '30px', color: '#b60000' }}>
                <FaQuoteRight />
              </div> */}
                <div className="button-area">
                  <a data-animation="fadeInLeft" data-delay=".6s" href="/panchakarma" className="btn btn-icon ml-0"><span>+</span>learn more</a>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PanchakarmalinkTwo;
