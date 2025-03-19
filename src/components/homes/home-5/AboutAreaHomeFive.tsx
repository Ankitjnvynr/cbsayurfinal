
// import React from 'react';
// import Link from 'next/link';
// import Image, { StaticImageData } from 'next/image';

// import bg_icon_1 from "@/assets/img/icon/img9.jpg";
// import bg_icon_2 from "@/assets/img/icon/img5.jpg";
// import bg_icon_3 from "@/assets/img/icon/img6.jpg";

// import icon_1 from "@/assets/img/icon/img9.jpg";
// import icon_2 from "@/assets/img/icon/img5.jpg";
// import icon_3 from "@/assets/img/icon/img6.jpg";


// interface DataType {
//   sub_title: string;
//   title: string;
//   about_data: ({
//     id: number;
//     color_bg: string;
//     bg_img: StaticImageData;
//     img: StaticImageDadta;
//     title: string;
//     sm_des?: string;
//     btn_text?: string;
//     day_1?: string;
//     day_2?: string;
//     time_1?: string;
//     time_2?: string;
//     day_3?: string;
//     closed?: string;
//   })[];
// }


// const about_content: DataType = {
//   sub_title: "Why Choose Us?",
//   title: "We Heal the Root, Not Just the Symptoms",
//   about_data: [
//     {
//       id: 1,
//       color_bg: "theme-bg2",
//       bg_img: bg_icon_1,
//       img: icon_1,
//       title: "Holistic Heal ing",
//       sm_des: "We focus on restoring balance by treating the root cause of imbalances rather than merely alleviating symptoms.By assessing your unique body constitution and health history, we craft personalized treatment plans that include detoxification, rejuvenation therapies, and nutritional guidance.",
      
//     },
//     {
//       id: 1,
//       color_bg: "theme-bg2",
//       bg_img: bg_icon_2,
//       img: icon_2,
//       title: "Expert Care",
//       sm_des: "Our team of certified Ayurvedic practitioners brings decades of experience, ensuring personalized and effective treatments.With a compassionate and holistic approach, our experts not only focus on immediate relief but also on long-term health, guiding you towards sustainable healing and renewed vitality.",
      
//     },
//     {
//       id: 1,
//       color_bg: "theme-bg2",
//       bg_img: bg_icon_3,
//       img: icon_3,
//       title: "Personalized Therapies",
//       sm_des:
//         "Each Panchakarma session is customized to your unique health needs, combining traditional wisdom with modern wellness practices. Our approach starts with a comprehensive assessment of your body constitution, and health challenges, allowing us to design a treatment plan that addresses your concerns.",
//       // day_1: "bfhfh",
//       // day_2: "Mon - Friday",
//       // time_1: "08:00 am - 09:00 pm",
//       // time_2: "05:00 pm - 08:00 pm",
//       // day_3: "Sunday",
//       // closed: "Closed",

//     },
//   ]

// }
// const { sub_title, title, about_data } = about_content

// const AboutAreaHomeFive = () => {
//   return (
//     <>
//       <section className="about-area pt-130 pb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="about-title text-center mb-60">
//                 <h5 className="pink-color">{sub_title}</h5>
//                 <h1>{title}</h1>
//               </div>
//             </div>
//           </div>
//           <div className="row g-0">
//             {about_data.map((item, i) =>
//               <div key={i} className="col-lg-4 mb-30">
//                 <div className={`h5services-wrapper ${item.color_bg}`}>
//                   <i className="h5sicon-bg" ><Image src={item.bg_img} alt="icon" width={450} height={500} style={{ opacity: 0.3 }}/></i>
//                   <div className="h5services-content">
//                     <i className="h5services-icon" ><Image src={item.img} alt="theme-pure" width={50} height={50}/></i>
//                     <h3 className="white-color h5services-title">{item.title}</h3>
//                     {i === 3 ?
//                       <>
//                         <ul className="h5services-events">
//                           <li className="white-color f-500"> {item.day_1} <span>{item.time_1}</span></li>
//                           <li className="white-color f-500"> {item.day_2} <span>{item.time_2}</span></li>
//                         </ul>
//                         <ul className="h5services-events h5sclose-days">
//                           <li className="white-color f-500"> {item.day_3} <span>{item.closed}</span></li>
//                         </ul>
//                       </>
//                       :
//                       <>
//                         <p style={{ fontWeight: 'bold', fontSize: '15px'}}>{item.sm_des}</p>
//                         <Link href="#" className="green-color text-uppercase f-500"><span className="plus">
//                           </span><span className="link">{item.btn_text}</span>
//                         </Link>
//                       </>
//                     }
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutAreaHomeFive;
"use client"; // Ensures this component runs on the client side

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import bg_icon_1 from "@/assets/img/icon/img9.jpg";
import bg_icon_2 from "@/assets/img/icon/img5.jpg";
import bg_icon_3 from "@/assets/img/icon/img6.jpg";

import icon_1 from "@/assets/img/icon/img9.jpg";
import icon_2 from "@/assets/img/icon/img5.jpg";
import icon_3 from "@/assets/img/icon/img6.jpg";

interface DataType {
  sub_title: string;
  title: string;
  about_data: {
    id: number;
    bg_img: StaticImageData;
    img: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}

const about_content: DataType = {
  sub_title: "Why Choose Us?",
  title: "We Heal the Root, Not Just the Symptoms",
  about_data: [
    {
      id: 1,
      bg_img: bg_icon_1,
      img: icon_1,
      title: "Holistic Healing",
      sm_des:
        "We focus on restoring balance by treating the root cause of imbalances rather than merely alleviating symptoms. By assessing your unique body constitution and health history, we craft personalized treatment plans that include detoxification, rejuvenation therapies, and nutritional guidance.",
    },
    {
      id: 2,
      bg_img: bg_icon_2,
      img: icon_2,
      title: "Expert Care",
      sm_des:
        "Our team of certified Ayurvedic practitioners brings decades of experience, ensuring personalized and effective treatments.With a compassionate and holistic approach, our experts not only focus on immediate relief but also on long-term health, guiding you towards sustainable healing and renewed vitality.",
    },
    {
      id: 3,
      bg_img: bg_icon_3,
      img: icon_3,
      title: "Personalized Therapies",
      sm_des:
        "Each Panchakarma session is customized to your unique health needs, combining traditional wisdom with modern wellness practices. Our approach starts with a comprehensive assessment of your body constitution, and health challenges, allowing us to design a treatment plan that addresses your concerns.",
    },
  ],
};

const AboutAreaHomeFive = () => {
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
                    <Image src={item.img} alt={item.title} width={50} height={50} />
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

export default AboutAreaHomeFive;
