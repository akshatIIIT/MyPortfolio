// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "AKSHAT RAJ",
//           from_email: form.email,
//           to_email: "bailyroad1349@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");



// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { EarthCanvas } from "./canvas"; // Ensure this exists
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   return (
//     <div className="xl:mt-12 w-full flex flex-col items-center">
//       {/* Title Section (Same as Projects) */}
//       <div className="w-full max-w-6xl text-center">
//         <p className="text-secondary uppercase tracking-wider text-lg">
//           Get In Touch
//         </p>
//         <h2 className="text-white font-bold text-5xl sm:text-6xl mt-2">
//           Contact.
//         </h2>
//         <p className="text-secondary mt-4 text-lg max-w-3xl mx-auto">
//           Feel free to reach out via email, phone, or social media. I am always open to 
//           discussing new projects, collaborations, or just having a tech chat.
//         </p>
//       </div>

//       {/* Contact Section Box */}
//       <motion.div
//         variants={slideIn("up", "tween", 0.2, 1)}
//         className="w-full max-w-6xl bg-black-100 p-10 rounded-2xl flex flex-col xl:flex-row items-center xl:items-stretch mt-10"
//       >
//         {/* Left Half - Contact Info */}
//         <div className="flex-1 flex flex-col space-y-6">
//           {/* Location */}
//           <div className="flex items-center bg-gray-900 p-4 rounded-lg">
//             <FaMapMarkerAlt className="text-cyan-400 text-2xl mr-4" />
//             <p className="text-white text-lg">Savar, Dhaka, Bangladesh</p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center bg-gray-900 p-4 rounded-lg">
//             <FaPhone className="text-cyan-400 text-2xl mr-4" />
//             <p className="text-white text-lg">+880-1316-864-315</p>
//           </div>

//           {/* Email */}
//           <div className="flex items-center bg-gray-900 p-4 rounded-lg">
//             <FaEnvelope className="text-cyan-400 text-2xl mr-4" />
//             <div>
//               <p className="text-white text-lg">emon15-3141@diu.edu.bd</p>
//               <p className="text-white text-lg">sharkarlimon@gmail.com</p>
//             </div>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex items-center bg-gray-900 p-4 rounded-lg">
//             <FaLinkedin className="text-cyan-400 text-2xl mr-4" />
//             <a
//               href="https://www.linkedin.com/in/your-profile"
//               className="text-white text-lg hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               linkedin.com/in/your-profile
//             </a>
//           </div>

//           {/* GitHub */}
//           <div className="flex items-center bg-gray-900 p-4 rounded-lg">
//             <FaGithub className="text-cyan-400 text-2xl mr-4" />
//             <a
//               href="https://github.com/your-profile"
//               className="text-white text-lg hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               github.com/your-profile
//             </a>
//           </div>
//         </div>

//         {/* Right Half - Earth Canvas */}
//         <div className="flex-1 flex justify-center items-center xl:h-[500px] md:h-[450px] h-[400px]">
//           <EarthCanvas />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-6">
          {/* Location Section */}
          <div className="bg-tertiary p-6 rounded-lg flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <p className="text-white font-medium">IIIT-DELHI, New Delhi, India</p>
          </div>

          {/* Phone Section */}
          <div className="bg-tertiary p-6 rounded-lg flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-2xl" />
            <p className="text-white font-medium">+91-7282877461, +91-9142553095</p>
          </div>

          {/* Email Section */}
          <div className="bg-tertiary p-6 rounded-lg flex items-start gap-4">
            <FaEnvelope className="text-primary text-2xl mt-1" />
            <div>
              <p className="text-white font-medium">vasubokaro1349@gmail.com,</p>
              <p className="text-white font-medium">akshat23063@iiitd.ac.in</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
