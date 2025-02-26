"use client"; // Ensures this component runs on the client side

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import bg_icon_1 from  "@/assets/img/home5/Update/update1.jpg";
import bg_icon_2 from  "@/assets/img/home5/Update/update2.jpg";
import bg_icon_3 from  "@/assets/img/home5/Update/update3.jpg";

// import icon_1 from  "@/assets/img/section/section-back-icon.png";
// import icon_2 from  "@/assets/img/section/section-back-icon.png";
// import icon_3 from  "@/assets/img/section/section-back-icon.png";

interface DataType {
  sub_title: string;
  title: string;
  about_data: {
    id: number;
    bg_img: StaticImageData;
    // img: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}

const about_content: DataType = {
  sub_title: "Heal your Soul",
  title: "Upcoming Facilities",
  about_data: [
    {
      id: 1,
      bg_img: bg_icon_1,
    //   img: icon_1,
      title: "Ayurvedic Medicine & Herbal Pharmacy",
      sm_des:
        "Our Ayurvedic medicine center provides authentic, natural, and personalized herbal remedies to heal and restore health. With centuries-old wisdom, we offer customized treatments for chronic conditions, lifestyle disorders, and preventive care.",
    },
    {
      id: 2,
      bg_img: bg_icon_2,
    //   img: icon_2,
      title: "Yoga and Meditation",
      sm_des:
        "Experience the profound benefits of ancient yoga and meditation practices designed to restore harmony and enhance overall well-being. Our expert yoga instructors guide you through personalized sessions based on your body type (Dosha) and health needs.",
    },
    {
      id: 3,
      bg_img: bg_icon_3,
    //   img: icon_3,
      title: "Ayurvedic Diet & Nutrition Center",
      sm_des:
        "In Ayurveda, food is medicine. Our Ayurvedic Diet & Nutrition Center helps you eat according to your body type (Vata, Pitta, Kapha) to restore balance, boost immunity, and enhance vitality.",
    },
  ],
};

const UpdateFive = () => {
  return (
    <>
      <section className="about-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="about-title text-center mb-60">
                <h5 className="pink-color" >{about_content.sub_title}</h5>
                <h1 >{about_content.title}</h1>
              </div>
            </div>
          </div>
          <div className="row g-0">
            {about_content.about_data.map((item, index) => (
              <div key={index} className="col-lg-4 mb-30">
                <div className="image-container">
                  {/* Background Image */}
                  <Image
                    src={item.bg_img}
                    alt={item.title}
                    width={450}
                    height={500}
                    className="service-image"
                  />
                  {/* Overlay Content */}
                  <div className="overlay">
                    {/* <Image src={item.img} alt={item.title} width={50} height={50} /> */}
                    <h3 className="overlay-title">{item.title}</h3>
                    <p style={{fontWeight:"bold" , fontSize: '15px'}}>{item.sm_des}</p>
                    <Link href="#" className="overlay-link">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CSS Styles */}
     <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-image {
          width: 100%;
          height: auto;
          transition: opacity 0.5s ease-in-out;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          padding: 20px;
          text-align: center;
        }

        .overlay-title {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .overlay-link {
          color: #ffcc00;
          font-weight: bold;
          margin-top: 10px;
        }

        .image-container:hover .overlay {
          opacity: 1;
        }

        .image-container:hover .service-image {
          opacity: 0.5;
        }
          /* Hover Effect - Make text bold and white */
        .image-container:hover .overlay-title,
        .image-container:hover .overlay-text {
          font-weight: bold;
          color: white;
        }
          
      `}</style>
    </>
  );
};

export default UpdateFive;