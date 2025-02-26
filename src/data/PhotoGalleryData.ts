

import gallery_thumb_1 from "@/assets/img/home5/gallery/gallery__thumb11.jpg";
import gallery_thumb_2 from "@/assets/img/home5/gallery/gallery__thumb22.jpg";
import gallery_thumb_3 from "@/assets/img/home5/gallery/gallery__thumb33.jpg";
import gallery_thumb_4 from "@/assets/img/home5/gallery/gallery__thumb44.jpg";
import gallery_thumb_5 from "@/assets/img/home5/gallery/gallery__thumb55.webp";
import gallery_thumb_6 from "@/assets/img/home5/gallery/gallery__thumb6.jpg"; 
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  category?: string;
  title: string;
  tag_1: string;
  // tag_2: string;
}


const photo_gallery_data: DataType[] = [
  {
    id: 1, 
    img: gallery_thumb_1,
    category: "Abhyanga",
    title: "Ayurvedic Services",
    tag_1: "Abhyanga"
  },
  {
    id: 2, 
    img: gallery_thumb_2,
    category: "Shirodhara",
    title: "Ayurvedic Services",
    tag_1: "Shirodhara",
    // tag_2: "Dental",
  },
  {
    id: 3, 
    img: gallery_thumb_3,
    category: "Swedana",
    title: "Ayurvedic Services",
    tag_1: "Swedana",
    // tag_2: "Dental",
  },
  {
    id: 4, 
    img: gallery_thumb_4,
    category: "Basti",
    title: "Ayurvedic Services",
    tag_1: "Basti",
    // tag_2: "Dental",
  },
  {
    id: 5, 
    img: gallery_thumb_5,
    category: "Nasya",
    title: "Ayurvedic Services",
    tag_1: "Nasya",
    // tag_2: "Medicin",
  },
  // {
  //   id: 6, 
  //   img: gallery_thumb_6,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // // update
  // {
  //   id: 1, 
  //   img: gallery_thumb_1,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 2, 
  //   img: gallery_thumb_2,
  //   category: "Surgery",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 3, 
  //   img: gallery_thumb_3,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 4, 
  //   img: gallery_thumb_4,
  //   category: "Dental",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 5, 
  //   img: gallery_thumb_5,
  //   category: "Surgery",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Medicin",
  // },
  // {
  //   id: 6, 
  //   img: gallery_thumb_6,
  //   category: "Neurology",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
]
export default photo_gallery_data