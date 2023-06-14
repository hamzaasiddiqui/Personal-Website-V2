import React from "react";
import "./style.css";
import {
  FaEnvelopeOpenText,
  FaArrowUp,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
          <li>
            <a href={socialprofils.resume}>
              <FaEnvelopeOpenText />
            </a>
          </li>
        <li>
          <FaArrowUp />
        </li>
      </ul>
      <p className="mt-5">Check Out my Resume</p>
    </div>
  );
};
