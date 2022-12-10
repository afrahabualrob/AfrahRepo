import React from "react";
import styles from "./style.module.css";
import FooterTitle from "../Footer/FooterTitle";
import FooterContent from "../Footer/FooterContent";
import FooterForm from "../Footer/FooterForm";
import ContactIcon from "../Footer/ContactIcon";

const Footer = () => {
  const footer_content = [
    {
      id: 1,
      title: "Categories",
      content: [
        { id: 10, text: "About us", link: "#" },
        { id: 11, text: "Testimonials", link: "#" },
        { id: 12, text: "Contact", link: "#" },
        { id: 13, text: "Journal", link: "#" },
        { id: 14, text: "Privacy Policy", link: "#" },
      ],
    },

    {
      id: 2,
      title: "Partners",
      content: [
        { id: 20, text: "Support", link: "#" },
        { id: 21, text: "Shipping &,Returns", link: "#" },
        { id: 22, text: "Size Guide ", link: "#" },
        { id: 23, text: "Product Care", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Contact us",
      content: [
        { id: 30, text: "26A Pagoda StTANGS Singapore, 058187", link: "" },
        { id: 31, text: " + 65 6221 5462", link: "" },
      ],
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeftSide}>
            {[] &&
              footer_content.map((item) => {
                const { id, title, content } = item;
                return (
                  <div key={id} className={styles.footerLinks}>
                    <FooterTitle title={title} />
                    <FooterContent content={content} />
                  </div>
                );
              })}
          </div>

          <div className={styles.footerRightSide}>
            <FooterTitle title="Subscribe to newsletter" />
            <FooterForm />
            <div className={styles.footerIcons}>
              <ContactIcon
                iconPath="./assets/icons/Facebook Icon.svg"
                desc="Facebook Icon"
                iconLink="#"
              />
              <ContactIcon
                iconPath="./assets/icons/Twitter Icon.svg"
                desc="Twitter Icon"
                iconLink="#"
              />
            </div>
          </div>
        </div>
        <span className={styles.copyrightText}>
          © Copyright Matter PTE LTD 2017
        </span>
      </div>
    </div>
  );
};

export default Footer;
