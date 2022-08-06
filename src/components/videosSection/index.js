import React from "react";
import Button from "../common/Button";
import "./videos.css";

function VSection() {
  return (
    <div className="wrapper">
      <Cards
        image="https://i.ytimg.com/an_webp/MbWFkusXmTA/mqdefault_6s.webp?du=3000&sqp=CKDLupcG&rs=AOn4CLDMdWSgPSLXRH3LMBu65C_Akw4hQA"
        title="Its Between You"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
      />
      <Cards
        image="https://i.ytimg.com/an_webp/0XwvQjYl_3U/mqdefault_6s.webp?du=3000&sqp=CLjjupcG&rs=AOn4CLANRNPfBSxvO-RQECZeXeP2jiZICA"
        title="Message Privately"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
      />
      <Cards
        image="https://i.ytimg.com/an_webp/Hw35Z-SzA7o/mqdefault_6s.webp?du=3000&sqp=CO7XupcG&rs=AOn4CLAfo9qIzGlKA7NltH1YHVzcLm6q7A"
        title="Introducing View Once"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
      />
    </div>
  );
}
function Cards(props) {
  return (
    <div className="cards flex">
      <div className="card_body">
        <img src={props.image} className="card_img" alt="Ads" />
        <h2 className="card_head">{props.title}</h2>
        <p className="card_desc">{props.desc}</p>
      </div>
      <Button buttonText={"Watch"} />
    </div>
  );
}
export default VSection;
