import React, { useState } from "react";
import ContactHeader from "../ContactHeader/ContactHeader";
import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <div className={style.form_main}>
      <ContactHeader />
      <div className={style.form_container}>
        <div className={style.form_content}>
          <div className={style.black_btns}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdOutlineMessage fontSize={"24px"} />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"} />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdOutlineMessage fontSize={"24px"} />}
          />
          <form onSubmit={onSubmitHandler}>
            <div className={style.form_input}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={style.form_input}>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={style.form_input}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button text="SUBMIT" />
          </form>
        </div>
        <div className={style.form_img}>
          <img src="/images/main_image.svg" alt="main_image" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
