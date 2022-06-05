import React from "react";
import Feature1 from "./feature1";
import Feature3 from "./feature3";
import "./features2.css";
import image1 from "../images/feature1.png";
import image2 from "../images/feature2.png";
import image3 from "../images/feature3.png";
import image4 from "../images/feature4.png";
import image5 from "../images/feature5.png";
import image6 from "../images/feature6.png";

function Feature2() {
  return (
    <>
      <section className="feature" id="features">
        <div className="main__feature">
          <Feature1
            title="TEXTS"
            heading="Simple, Reliable Messaging"
            body="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees."
            image={image1}
          />
          <Feature3
            title="GROUP CHAT"
            heading="Groups to keep in touch"
            body="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more."
            image={image2}
          />
          <Feature1
            title="WHATSAPP ON WEB AND DESKTOP"
            heading="Keep the Conversation Going"
            body="With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. Download the desktop app or visit web.whatsapp.com to get started."
            image={image3}
          />
          <Feature3
            title="WHATSAPP VOICE AND VIDEO CALLS"
            heading="Speak Freely"
            body="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges."
            image={image4}
          />
          <Feature1
            title="END-TO-END ENCRYPTION"
            heading="Security by Default"
            body="Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp."
            image={image5}
          />
          <Feature3
            title="PHOTOS AND VIDEOS"
            heading="Share Moments that Matter"
            body="Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection."
            image={image6}
          />
          <Feature1
            title="VOICE MESSAGES"
            heading="Say What's On Your Mind"
            body="Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story."
            image={image4}
          />
          <Feature3
            title="DOCUMENTS"
            heading="Document Sharing Made Easy"
            body="Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want."
            image={image3}
          />
        </div>
      </section>
    </>
  );
}

export default Feature2;
