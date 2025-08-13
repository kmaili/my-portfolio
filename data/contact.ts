import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "kmailiaymen10@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+216 20741124",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+216 20741124",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/kmaili",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aymen-kmaili-75851a1bb/",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "facebook.com/aymen.kmaili.1",
  }
];
