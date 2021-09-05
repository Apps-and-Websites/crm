import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Icon, InlineIcon } from "@iconify/react";
import githubBox from "@iconify/icons-mdi/github-box";
import linkedinIcon from "@iconify/icons-mdi/linkedin";

function Footer(props, { id }) {
  const path = props.location.pathname;
  return (
    <>
      {path.startsWith("/admin") ? null : (
        <footer id={id} className="footer">
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/mohd-raza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={linkedinIcon} className="footer__social-icon" />
            </a>

            <a
              href="https://github.com/mohdraz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={githubBox} className="footer__social-icon" />
            </a>
          </div>

          <div className="footer__copyright">
            <div className="footer__copyright-contact">
              <p>682-256-6547</p>
              <p>
                <a href="mailto:raza@noorinfotech.com">raza@noorinfotech.com</a>
              </p>
            </div>
            <p>Mohammad Raza &#169; 2020 </p>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
