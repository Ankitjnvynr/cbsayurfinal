import { StaticImageData } from "next/image";
import avatar_img_1 from "@/assets/img/icon/tesit-author-icon-1.png";
import avatar_img_2 from "@/assets/img/icon/tesit-author-icon-2.png";

import avatar_img_4_1 from "@/assets/img/home4/testimonials/author-icon1.png";
import avatar_img_4_2 from "@/assets/img/home4/testimonials/author-icon2.png";
import avatar_img_4_3 from "@/assets/img/home4/testimonials/author-icon3.png";

interface DataType {
  id: number;
  home?: number;
  title?: string;
  description: string;
  img: StaticImageData;
  name: string;
  job_title: string;
}
[];

const testimonials_data: DataType[] = [
  {
    id: 1,
    title:
      "CBS College of Ayurvedic provided me with exceptional education and practical training.",
    description:
      "The faculty at CBS College of Ayurvedic are highly knowledgeable and supportive. The hands-on Panchakarma training and in-depth understanding of Ayurveda have helped me establish a successful career in holistic healing.",
    img: avatar_img_1,
    name: "Dr. Anjali Sharma",
    job_title: "BAMS Graduate",
  },
  {
    id: 2,
    title: "A life-changing experience at CBS College of Ayurvedic!",
    description:
      "Studying at CBS College of Ayurvedic has been transformative. The exposure to traditional therapies and modern applications of Ayurveda has given me the confidence to pursue my practice in natural healing and wellness.",
    img: avatar_img_2,
    name: "Rohan Mehta",
    job_title: "Ayurvedic Nutritionist",
  },
  {
    id: 3,
    title: "A perfect blend of theory and practical knowledge in Ayurveda.",
    description:
      "CBS College of Ayurvedic offers a well-structured curriculum with a balance of theory and practical exposure. The Panchakarma training, herbal formulations, and clinical practice have been immensely beneficial in my professional journey.",
    img: avatar_img_1,
    name: "Dr. Pooja Verma",
    job_title: "Ayurvedic Practitioner",
  },
  // Additional Testimonials
  {
    id: 4,
    title: "CBS College of Ayurvedic is the best place to study Ayurveda.",
    description:
      "I am grateful for the opportunity to study at CBS College of Ayurvedic. The college provides excellent facilities, research opportunities, and experienced faculty that make learning Ayurveda an enriching experience.",
    img: avatar_img_1,
    name: "Karan Patel",
    job_title: "Herbal Medicine Specialist",
  },
  {
    id: 5,
    title: "The Ayurvedic courses at CBS College exceeded my expectations!",
    description:
      "From learning ancient Ayurvedic texts to practicing holistic treatments, CBS College of Ayurvedic has given me the best foundation to grow as a practitioner.",
    img: avatar_img_2,
    name: "Neha Agarwal",
    job_title: "Panchakarma Therapist",
  },
  {
    id: 6,
    title: "CBS College of Ayurvedic is a pioneer in Ayurveda education.",
    description:
      "The rigorous training in herbal medicine, dietetics, and Panchakarma therapies has prepared me well for my career in Ayurveda. I highly recommend CBS College for anyone passionate about holistic healing.",
    img: avatar_img_1,
    name: "Dr. Suresh Yadav",
    job_title: "Ayurvedic Consultant",
  },
  // Home 04 Testimonials
  {
    id: 1,
    home: 4,
    description:
      "CBS College of Ayurvedic has given me the skills and knowledge to excel in my Ayurvedic practice. The faculty and hands-on training are outstanding!",
    img: avatar_img_4_1,
    name: "Dr. Meenal Joshi",
    job_title: "Ayurveda & Yoga Specialist",
  },
  {
    id: 2,
    home: 4,
    description:
      "Studying at CBS College of Ayurvedic has been a rewarding journey. The exposure to herbal medicine and holistic healing has been invaluable.",
    img: avatar_img_4_2,
    name: "Dr. Amit Trivedi",
    job_title: "Ayurvedic Physician",
  },
  {
    id: 3,
    home: 4,
    description:
      "The best decision I made was enrolling at CBS College of Ayurvedic. The practical experience and traditional knowledge gained here are unparalleled.",
    img: avatar_img_4_3,
    name: "Dr. Priyanka Rao",
    job_title: "BAMS Graduate",
  },
  {
    id: 4,
    home: 4,
    description:
      "CBS College of Ayurvedic has shaped my career in Ayurveda. The faculty, infrastructure, and clinical exposure make it the best Ayurveda college.",
    img: avatar_img_4_1,
    name: "Dr. Arvind Singh",
    job_title: "Ayurvedic Researcher",
  },
];

export default testimonials_data;
