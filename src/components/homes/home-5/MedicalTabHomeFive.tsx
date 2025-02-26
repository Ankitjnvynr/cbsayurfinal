import React from 'react';
import Image, { StaticImageData } from 'next/image';

import tab_img_2 from "@/assets/img/home5/tab/tab1.jpg";
import tab_img_1 from "@/assets/img/home5/tab/tab.jpg";
import tab_img_3 from "@/assets/img/home5/tab/VATA.jpg";
import tab_img_4 from "@/assets/img/home5/tab/PITTA.jpg";
import tab_img_5 from "@/assets/img/home5/tab/kapha.jpg";
// import tab_menu_icon_1 from "@/assets/img/home5/tab/tab__menu__icon1.png";
// import tab_menu_icon_2 from "@/assets/img/home5/tab/tab__menu__icon2.png";
// import tab_menu_icon_3 from "@/assets/img/home5/tab/tab__menu__icon3.png";


interface DataType {
  tab_id: string;
  img: StaticImageData;
  title: string;
  sm_des: string;
  features: string[];
}[]

const medical_tab_data: DataType[] = [
  {
    tab_id: "home",
    img: tab_img_3,
    title: "01. Vata (Air + Ether)",
    sm_des: "Vata is associated with the elements of air and ether, governing all movement in the body. It is light, dry, cold, and irregular, and its functions include controlling breathing, nerve impulses, and circulation. When balanced, Vata brings creativity, energy, and flexibility, but when out of balance, it can cause anxiety, insomnia, and digestive issues.",
    features: [
      "Qualities: Dry, light, cold, irregular, mobile, subtle.",
      "Functions: Vata governs all movement in the body—breathing, nerve impulses, blood flow, and the elimination process. It also governs creativity and communication.",
      "Imbalance: When out of balance, Vata can cause anxiety, dryness, constipation, insomnia, and joint pain. People with a dominant Vata dosha are often creative, energetic, and quick-thinking, but can also become easily overwhelmed or restless.",
    ]
  },
  {
    tab_id: "profile",
    img: tab_img_4,
    title: "02. Pitta (Fire + Water)",
    sm_des: "Pitta is the dosha of fire and water, and it governs digestion, metabolism, and energy production in the body. It is hot, sharp, and intense, playing a key role in processing food and regulating body temperature. A balanced Pitta results in confidence and clarity, but when aggravated, it can lead to irritability, inflammation, and digestive problems like acid reflux.",
    features: [
      "Qualities: Hot, sharp, oily, intense, light, acidic.",
      "Functions: Pitta controls digestion, metabolism, and energy production. It is responsible for breaking down food, processing nutrients, and regulating body temperature.",
      "Imbalance: When out of balance, Pitta can lead to anger, irritability, inflammation, digestive issues (like acid reflux), and skin rashes. People with a dominant Pitta dosha are often confident, determined, and intelligent but may become hot-headed or overly competitive when out of balance.",
    ]
  },
  {
    tab_id: "contact",
    img: tab_img_5,
    title: "03. Kapha (Earth + Water)",
    sm_des: "Kapha is made of earth and water elements, and it provides structure, stability, and nourishment to the body. It is heavy, slow, and smooth, responsible for strength, immunity, and lubrication of the joints. While a balanced Kapha is calm, grounded, and nurturing, an imbalanced Kapha can lead to weight gain, lethargy, and emotional attachment.",
    features: [
      "Qualities: Heavy, slow, stable, cold, moist, smooth.",
      "Functions: Kapha provides structure and stability to the body, controls growth, strength, and immunity, and lubricates the joints and organs. It also governs the body’s fluid balance.",
      "Imbalance: When out of balance, Kapha can cause weight gain, lethargy, depression, sinus congestion, or excessive mucus. People with a dominant Kapha dosha tend to be calm, patient, and nurturing but can become sluggish, possessive, or prone to attachment when out of balance.",
    ]
  },
]
const MedicalTabHomeFive = () => {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45vh'}}>
       <Image src={tab_img_2} alt="" style={{padding:"10px"}} />
    </div>
      <div className="medical-tab medical-tab-border">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="h5medical-tab-menu">
                <nav>
                  <div className="nav nav-tabs position-relative" id="nav-tab" role="tablist">

                    <button className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                      <i>
                      {/* <Image src={tab_menu_icon_1} alt="theme-pure" /> */}
                      </i> VATTA </button>
                    <button className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                      <i>
                      {/* <Image src={tab_menu_icon_2} alt="theme-pure" /> */}
                      </i> PITTA </button>
                    <button className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                      <i>
                      {/* <Image src={tab_menu_icon_3} alt="theme-pure" /> */}
                      </i> KAPHA </button>

                  </div>
                </nav>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="h5medical-tab-body">
                <div className="tab-content" id="nav-tabContent">
                  {medical_tab_data.map((item, i) =>
                    <div key={i}
                      className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                      id={`nav-${item.tab_id}`}
                      role="tabpanel"
                      aria-labelledby={`nav-${item.tab_id}-tab`}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="h5medical__thumb mb-30" >
                            <Image src={item.img} alt="theme-pure" style={{
                              width: "200%",  // Adjust the width
                              maxWidth: "500px", // Max width for large images
                              height: "auto",  // Ensure the aspect ratio is maintained
                              objectFit: "cover",  // Crop image if necessary
                            }} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="h5medical-content mb-30">
                            <h4 className="f-600 theme-color">{item.title}</h4>
                            <p>{item.sm_des}</p>
                            <ul>
                              {item.features?.map((feature, index) =>
                                <li key={index}><i className="far fa-arrow-alt-circle-right"></i>{feature}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalTabHomeFive;