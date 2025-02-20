import { StaticImageData } from "next/image";

import service_img_1 from "@/assets/img/services/service-icon-1.png";
import service_img_2 from "@/assets/img/services/service-icon-2.png";
import service_img_3 from "@/assets/img/services/service-icon-3.png";
import service_img_4 from "@/assets/img/services/service-icon-4.png"; 

import service_img_4_1 from "@/assets/img/home4/services/h4__services__thumb1.png"; 
import service_img_4_2 from "@/assets/img/home4/services/h4__services__thumb2.png"; 
import service_img_4_3 from "@/assets/img/home4/services/h4__services__thumb3.png"; 

import service_img_5_1 from "@/assets/img/services/service1.png";
import service_img_5_2 from "@/assets/img/services/service2.png";
import service_img_5_3 from "@/assets/img/services/service3.png";
import service_img_5_4 from "@/assets/img/services/service4.png";
import service_img_5_5 from "@/assets/img/services/service5.png";
import service_img_5_6 from "@/assets/img/services/service6.png";

interface ServciesDataType {
  id: number;
  img: StaticImageData;
  sub_title?: string;
  title: string;
  sm_des: string;
  // pagse 
  service?: boolean;
}[]

const servcies_data: ServciesDataType[] = [
  {
    id: 1,
    img: service_img_1,
    sub_title: "Holistic Healing",
    title: "Ayurvedic Consultation",
    sm_des: "Get personalized health consultations based on Ayurveda principles, including Dosha analysis, herbal remedies, and lifestyle guidance.",
  },
  {
    id: 2,
    img: service_img_2,
    sub_title: "Therapeutic Detox",
    title: "Panchakarma Therapy",
    sm_des: "Experience the five-fold Ayurvedic detoxification process that purifies the body and restores balance through herbal treatments and oil therapies.",
  },
  {
    id: 3,
    img: service_img_3,
    sub_title: "Herbal Remedies",
    title: "Ayurvedic Pharmacy",
    sm_des: "Access natural and effective herbal medicines formulated based on traditional Ayurvedic knowledge for various health concerns.",
  },
  {
    id: 4,
    img: service_img_4,
    sub_title: "Rejuvenation & Wellness",
    title: "Abhyanga (Ayurvedic Massage)",
    sm_des: "A therapeutic full-body oil massage designed to nourish the skin, improve circulation, and promote deep relaxation.",
  },
  // Additional Ayurveda Services
  {
    id: 1,
    img: service_img_4_1,
    sub_title: "Pain Management",
    title: "Kati Basti (Lower Back Therapy)",
    sm_des: "A specialized treatment using warm medicated oils retained on the lower back to relieve chronic pain and stiffness.",
  },
  {
    id: 2,
    img: service_img_4_2,
    sub_title: "Respiratory Health",
    title: "Nasya (Nasal Therapy)",
    sm_des: "A nasal detox therapy using herbal oils to cleanse the sinuses, improve breathing, and enhance mental clarity.",
  },
  {
    id: 3,
    img: service_img_4_3,
    sub_title: "Mind & Body Balance",
    title: "Shirodhara (Oil Therapy)",
    sm_des: "A soothing therapy where warm herbal oil is poured over the forehead to reduce stress, anxiety, and sleep disorders.",
  },
  {
    id: 4,
    img: service_img_4_3,
    sub_title: "Joint & Bone Care",
    title: "Sandhi Chikitsa (Joint Therapy)",
    sm_des: "A natural Ayurvedic approach to managing arthritis, joint pain, and mobility issues with herbal medicines and massages.",
  },
  // Ayurveda Educational Services
  {
    id: 1,
    img: service_img_5_1,
    service: true,
    title: "BAMS (Bachelor of Ayurvedic Medicine)",
    sm_des: "A professional Ayurvedic degree covering classical texts, herbal medicine, and practical training in traditional treatments.",
  },
  {
    id: 2,
    img: service_img_5_2,
    service: true,
    title: "Diploma in Panchakarma Therapy",
    sm_des: "An in-depth program focusing on detoxification therapies, Ayurvedic massage, and holistic healing techniques.",
  },
  {
    id: 3,
    img: service_img_5_3,
    service: true,
    title: "Ayurvedic Nutrition & Dietetics",
    sm_des: "A specialized course teaching the principles of Ayurvedic nutrition, food therapy, and dietary plans for well-being.",
  },
  {
    id: 4,
    img: service_img_5_4,
    service: true,
    title: "Certificate in Ayurvedic Pharmacy",
    sm_des: "Learn to prepare and dispense Ayurvedic medicines, herbal formulations, and natural supplements.",
  },
  {
    id: 5,
    img: service_img_5_5,
    service: true,
    title: "Yoga & Ayurveda Therapy",
    sm_des: "A holistic program integrating Yoga and Ayurveda to enhance physical, mental, and spiritual well-being.",
  },
  {
    id: 6,
    img: service_img_5_6,
    service: true,
    title: "Advanced Ayurvedic Research",
    sm_des: "Explore advanced studies in Ayurvedic treatments, herbal drug research, and evidence-based natural healing practices.",
  },
];

export default servcies_data