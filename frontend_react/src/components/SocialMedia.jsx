import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF,FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
      <a href="https://wa.me/+231886429319"> <FaWhatsapp /></a>
       
      </div>
      <div>
      <a href="https://m.me/AlvinAlvin"> <FaFacebookF /></a>
       
      </div>
      <div>
      <a href="https://www.instagram.com/alvingali"> <BsInstagram /></a>
      
      </div>
    </div>
  );
};

export default SocialMedia;
