import React from "react";
import Button from "../common/Button";
import "./videos.css";

function VSection() {
  return (
    <div className="wrapper">
      <Cards
        image="https://i.ytimg.com/vi/MbWFkusXmTA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBkxsXGMvabdcji_NBoYfQ9yDY1fQ"
        title="Its Between You"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
        link="https://www.youtube.com/watch?v=MbWFkusXmTA"
      />
      <Cards
        image="https://i.ytimg.com/vi/0XwvQjYl_3U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCswgC-biFCZfwp6dSVQPXun6e_Qw"
        title="Message Privately"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
        link="https://www.youtube.com/watch?v=0XwvQjYl_3U"
      />
      <Cards
        image="https://i.ytimg.com/vi/Hw35Z-SzA7o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA_yNTVMOrBXPwbTFSNj3U89tg-WA"
        title="Introducing View Once"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
        link="https://www.youtube.com/watch?v=Hw35Z-SzA7o"
      />
      <Cards
        image="https://i.ytimg.com/vi/75C3yYDbyBE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBei6nL6U4yTTCAjKNTkYuYXrP5yA"
        title="Its Between You"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
        link="https://www.youtube.com/watch?v=75C3yYDbyBE"
      />
      <Cards
        image="https://i.ytimg.com/vi/wZ4pIXajdW8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAGS_evh11n7dewOoG5La0oSTIKbw"
        title="Message Privately"
        desc="WhatsApp #ItsBetweenYou Cut It Out (30 Sec, English Phonetics) Aasaan sa lagta hai apno ke beech"
        link="https://www.youtube.com/watch?v=wZ4pIXajdW8"
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
      <Button buttonText={"Watch"} link={props.link} />
    </div>
  );
}
export default VSection;
