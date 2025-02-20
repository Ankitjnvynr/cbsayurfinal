
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import mission_icon_1 from "@/assets/img/icon/mv-icon-1.png";
import mission_icon_2 from "@/assets/img/icon/mv-icon-2.png";
import avatar_img from "@/assets/img/about/6.jpeg";
import avatar_icon from "@/assets/img/about/about-icon-white.png";


interface MissionContentDataType {
  sub_title: string;
  title: string;
  sm_des: string;
  mission_data: {
      id: number;
      img: StaticImageData;
      sm_info: string;
  }[];
}

const mission_content: MissionContentDataType = {
  sub_title: "Our Mission & Vision",
  title: "Empowering Ayurveda for a Healthier Tomorrow",
  sm_des: "Our mission is to preserve and promote the ancient wisdom of Ayurveda through quality education, research, and practice. We aim to develop skilled Ayurvedic professionals who can integrate holistic healing into modern healthcare systems, fostering a balanced and natural approach to wellness.",
  mission_data: [
    {
      id: 1,
      img: mission_icon_1,
      sm_info: "Providing in-depth education on Ayurvedic principles, therapies, and holistic healing.",
    },
    {
      id: 2,
      img: mission_icon_2,
      sm_info: "Promoting natural and sustainable wellness through research and traditional practices.",
    },
  ]
};

const { sub_title, title, sm_des, mission_data } = mission_content

const MissionVisionAreaHomeTwo = () => {
  return (
    <>
      <section className="about-area gray-bg pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-10 col-md-12">
              <div className="about-title mb-20">
                <h5 className="pink-color">{sub_title}</h5>
                <h1>{title}</h1>
              </div>
              <div className="about-text mission-about-text">
                <p>{sm_des}</p>
              </div>
              <div className="mission-vision-list pr-90">
                {mission_data.map((item, i) =>
                  <div key={i} className={`mv-single-list d-flex ${i === 1 ? "border-0" : ""}`}>
                    <div className="mv-icon">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="mv-text">
                      <p>{item.sm_info}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-lg-none d-xl-block">
              <div className="mv-right-img pos-rel mb-30">
                <Image src={avatar_img} alt="theme-pure" />
              </div>
              <div className="testi-quato-icon about-icon-white d-none d-xl-block">
                <Image src={avatar_icon} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionAreaHomeTwo;