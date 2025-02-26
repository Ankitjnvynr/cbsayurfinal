// import React from 'react';

// interface Datatype {
//   table_head: string[];
//   table_body: {
//       id: number;
//       title: string;
//       body_data: {
//           name: string;
//           time: string;
//       }[];
//   }[];
  
// }

// const routine_content: Datatype = {
//   table_head: [
//     "Time Table",
//     "08 : 00 am",
//     "08 : 00 am",
//     "08 : 00 am",
//     "08 : 00 am",
//     "08 : 00 am",
//     "08 : 00 am",
//   ],
//   table_body: [
//     {
//       id: 1,
//       title: "Monday",
//       body_data: [
//         { name: "Dr. Williuma", time: "08 am - 02 pm" },
//         { name: "Dr. Dillon", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Tuesday",
//       body_data: [
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Wednesday",
//       body_data: [
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//       ],
//     },
//     {
//       id: 4,
//       title: "Thursday",
//       body_data: [
//         { name: "Dr. Asraf", time: "08 am - 02 pm" }, 
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "Dr. Salman", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//       ],
//     },
//     {
//       id: 5,
//       title: "Friday",
//       body_data: [
//         { name: "", time: "" },
//         { name: "Dr. Jamil", time: "08 am - 02 pm" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "", time: "" },
//         { name: "Dr. Jamil", time: "08 am - 02 pm" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Saturday",
//       body_data: [
//         { name: "Dr. Abir Sabil", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "Dr. Mamun", time: "08 am - 02 pm" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Sunday",
//       body_data: [
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//         { name: "Dr. Schroeder", time: "08 am - 02 pm" },
//         { name: "", time: "" },
//       ],
//     },
   
//   ]
// }
// const { table_head, table_body } = routine_content


// const RoutineAreaHomeFive = () => {
//   return (
//     <>
//       <div className="routine routine__bg pos-rel  pt-130 pb-115 fix" style={{ backgroundImage: `url(/assets/img/bg/new.jpg)`,height:"1200px"}}>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="routine__table">
//                 <table className="table position-relative">
//                   <thead>
//                     <tr>
//                       {table_head.map((head_item, head_i) =>
//                         <th key={head_i} scope="col">
//                           <span className="routine--time__heading">{head_item}</span>
//                         </th>
//                       )}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {table_body.map((item, i) =>
//                       <tr key={i}>
//                         <th scope="row">{item.title}</th>
//                         {item.body_data?.map((item, index) => 
//                           <td key={index} className={`${item.name ? "active-doctor" : ""}`}>
//                             <div className={`${item.name ? "doctor--routine__wrapper" : ""}`}>
//                               <h2>{item.name}</h2>
//                               <span>{item.time}</span>
//                             </div>
//                           </td>
//                         )}
//                       </tr>
//                     )} 
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RoutineAreaHomeFive;
"use client"; // Ensures client-side rendering

import React from "react";
import Image from "next/image";
import { GiStomach } from "react-icons/gi";
import { GiHairStrands } from "react-icons/gi";
import { GiJoint } from "react-icons/gi";
import { FaBrain } from "react-icons/fa6";
import { GiLungs } from "react-icons/gi";
import { GiLiver } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { GiBowels } from "react-icons/gi";
import { GiHeartBeats } from "react-icons/gi";

const diseaseData = [
  { id: 1, icon: <GiStomach />, title: "Digestive Disorders" },
  { id: 2, icon: <GiHairStrands />, title: "Skin & Hair Problems" },
  { id: 3, icon: <GiJoint />, title: "Joint Disorders" },
  { id: 4, icon: <FaBrain />, title: "Neurological Issues" },
  { id: 5, icon: <GiLungs />, title: "Respiratory Diseases" },
  { id: 6, icon: <GiLiver />, title: "Liver Problems" },
  { id: 7, icon: <MdBloodtype />, title: "Blood Impurities" },
  { id: 8, icon: <GiBowels />, title: "Anorectal Problems" },
  { id: 9, icon: <GiHeartBeats />, title: "Metabolic Disorders" },
];
const RoutineAreaHomeFive = () => {
  return (
    <section className="disease-section">
      <div className="container">
        {/* Left Side (Text) */}
        <div className="text-area">
          <h2>Health Conditions Benefiting from Panchakarma</h2>
          <p>Panchakarma therapy offers profound healing benefits, effectively addressing a wide range of health concerns.</p>
        </div>

        {/* Right Side (Grid) */}
        <div className="grid">
          {diseaseData.map((item) => (
            <div key={item.id} className="grid-item">
              <div className="icon">{item.icon}</div>
              <p className="title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .disease-section {
          padding: 60px 20px;
          background: #f9f5f0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LEFT SIDE TEXT (Closer to Left) */
        .text-area {
          flex: 1;
          max-width: 40%;
          margin-left: -60px; /* Reduced left margin */
        }

        .text-area h2 {
          font-size: 32px;
          color: black;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .text-area p {
          font-size: 18px;
          color: black;
        }

        /* RIGHT SIDE GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 20px;
          width: 60%;
        }

        .grid-item {
          background: #8FB569;
          padding: 50px 20px; /* Increased height */
          border-radius: 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s, background 0.3s;
          height: 180px;
        }

        .grid-item:hover {
          transform: scale(1.05);
          background: #8FB569;
        }

        .icon {
          font-size: 55px;
          margin-bottom: 10px;
          color:rgb(253, 252, 247);
        }

        .title {
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          color: white;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .text-area {
            max-width: 100%;
            text-align: center;
            margin-bottom: 30px;
          }

          .grid {
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default RoutineAreaHomeFive;