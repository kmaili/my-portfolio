import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "../assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "kmailiaymen10@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Médenine, Tunisia",
      Link: "#", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+216 20741124",
      Link: "tel:+21620741124",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Faculty of Sciences of Sfax",
      Link: "https://fss.rnu.tn/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Computer Engineering Degree",
      Link: "#",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/kmaili",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "linkedin.com/in/aymen-kmaili-75851a1bb/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "facebook.com/aymen.kmaili.1",
    },
  ],
};
