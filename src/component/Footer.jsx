import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
// import {HiMenu} from "react-icons/Hi"
export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <p className="designed">Designed by Sostene 2023</p>
      </div>

      <div className="right-footer">
        <i>
          <BsFacebook className="icons-footer" />
          <BiLogoInstagramAlt className="icons-footer" />
          <BsYoutube className="icons-footer" />
        </i>
      </div>
    </div>
  );
};
