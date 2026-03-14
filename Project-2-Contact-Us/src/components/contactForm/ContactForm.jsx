import React from "react";
import style from "./ContactForm.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import form_Img from "../../assets/Service 24_7-pana 1.svg";

const ContactForm = () => {
  const handleButton = () => {
    console.log("Hello");
  };
  return (
    <div className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_button}>
          <Button
            text="VIA CHAT SUPPORT"
            onClick={handleButton}
            icon={<MdMessage fontSize={24} />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize={24} />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          isOutline={true}
          icon={<MdMessage fontSize={24} />}
        />

        <form>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows={8} />
          </div>

          <div className={style.submit_btn}>
            {" "}
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={style.contact_Image}>
        <img src={form_Img} alt="form_Img" />
      </div>
    </div>
  );
};

export default ContactForm;
