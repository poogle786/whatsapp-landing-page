import React from "react";
import { useState } from "react";
import ScreenText from "./ScreenText";
import "./security.css";
const data = [
  {
    heading: "Speak openly",
    description:
      "WhatsApp calling allows you to talk privately with your friends and family, even if they live in another country.",
    image:
      "https://scontent.whatsapp.net/v/t39.8562-34/119141981_623525391555797_1794440525883523099_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=TiiO7Sz3XzMAX-4Tvhz&_nc_ht=scontent.whatsapp.net&oh=01_AVwWOK2KYO2jbV66Da7y-5HiJSzn4w52t2mo07oHM0yevw&oe=62F35CD1",
  },
  {
    heading: "Messages you can leave to yourself",
    description:
      "End-to-end encrypted messages are stored on your device after delivery, not on WhatsApp's servers.",
    image:
      "https://scontent.whatsapp.net/v/t39.8562-34/119175269_605795306752654_5222122291012336209_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=vmM3WwGXXrkAX-s-DtI&_nc_ht=scontent.whatsapp.net&oh=01_AVzewGPvUr354-NczfsGI7GrMX_4Ipwl_EBV6iUyKDW51g&oe=62F2A007",
  },
  {
    heading: "See for yourself",
    description:
      "WhatsApp lets you verify that the calls you make and messages you send are end-to-end encrypted. Check the indicator in live chat, contact information or business information.",
    image:
      "https://scontent.whatsapp.net/v/t39.8562-34/119152811_244768850138794_2178623806716702580_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=KmKMjyVejewAX-mT7Za&_nc_ht=scontent.whatsapp.net&oh=01_AVxod9oaaVSIGSeDgZTDQ-RXYFVytSDDHgr3c4ors9eZTg&oe=62F271AE",
  },
  {
    heading: "Learn more about security",
    description:
      "Read the detailed technical statement about WhatsApp's end-to-end encryption developed in collaboration with Open Whisper Systems.",
    image:
      "https://scontent.whatsapp.net/v/t39.8562-34/119062191_402348224116796_1368987788189622554_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=QNFo1rZmQMcAX9-7aJX&_nc_ht=scontent.whatsapp.net&oh=01_AVx2_FZOB7bWmH-zAqnPDl-ocjwus0G5GqrSkYhUUaaHoA&oe=62F286FB",
  },
];
const Security = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="max-width flex mobile-scroll " id="security">
      <div className="scroll-full-screen-wrapper">
        {data.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={data[currentImg].image}
              className="mobile-screen-img slide-in-right"
              alt="security-images"
              key={data[currentImg].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
