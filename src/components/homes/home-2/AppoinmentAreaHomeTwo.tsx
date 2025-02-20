'use client'
import React from 'react';
import Image from 'next/image'; 
import NiceSelect from '@/ui/NiceSelect';
import appoinment_img from "@/assets/img/appoinment/77.png";
import appoint_ment_icon_1 from "@/assets/img/icon/caregive-option-icon-3.png";
import appoint_ment_icon_2 from "@/assets/img/icon/caregive-option-icon-4.png";
import appoint_ment_icon_3 from "@/assets/img/icon/caregive-option-icon-2.png";
import appoint_ment_icon_4 from "@/assets/img/icon/caregive-option-icon-5.png";

const AppoinmentAreaHomeTwo = () => {
  const selectHandler = (e: any) => {  };
  return (
    <>
      <section className="appoinment-area gray-bg pb-15">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="appoinment-box-2">
                <div className="row no-gutters">
                  <div className="col-xl-8 col-lg-12">
                    <div className="appoinment-box-content">
                      <div className="about-title mb-40">
                        <h5 className="pink-color">Admission Inquiry</h5>
                        <h1>Apply Now for Ayurveda Courses & Treatments</h1>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appoinment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <Image src={appoint_ment_icon_1} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">Full Name</label>
                              <input type="text" placeholder="Enter Your Full Name" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appoinment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <Image src={appoint_ment_icon_2} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">Email Address</label>
                              <input type="text" placeholder="Enter Your Email" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <Image src={appoint_ment_icon_3} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" onSubmit={e => e.preventDefault()}>
                              <label htmlFor="input">Select Course or Treatment</label>
                              <NiceSelect 
                                className="postform" 
                                  options={[
                                    { value: "Select an Option", text: "Select an Option" },
                                    { value: "BAMS - Bachelor of Ayurveda", text: "BAMS - Bachelor of Ayurveda" },
                                    { value: "Diploma in Panchakarma", text: "Diploma in Panchakarma" },
                                    { value: "Ayurvedic Nutrition Course", text: "Ayurvedic Nutrition Course" },
                                    { value: "Consultation & Treatment", text: "Consultation & Treatment" },
                                  ]}
                                  defaultCurrent={0}
                                  onChange={selectHandler}
                                  name=''
                                  placeholder=''
                                /> 
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appoinment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <Image src={appoint_ment_icon_4} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">Phone Number</label>
                              <input type="text" placeholder="Enter Your Phone Number" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="appoint-button">
                            <button className="btn green-bg-btn">Submit Application</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="appoinment-right f-right">
                      <Image src={appoinment_img} alt="theme-pure" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default AppoinmentAreaHomeTwo;