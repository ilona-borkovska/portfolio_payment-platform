import { NextPage } from "next";
import s from "./HomePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home:NextPage = () => {
  return (
    <div className={s.home}>
      <div className={s.top}>
        <div className={s.header}>
          <div className="main-container">
            <h1 className={s.title}>Sell online easier with</h1>

            <div className={s.transparentTexts}>
              <p className={s.transparentText}>SLT APP</p>
              <p className={s.transparentText}>SLT APP</p>
            </div>
          </div>
        </div>

        <div className="main-container">
          <p className={s.description}>
            Set up your online store on Instagram, WhatsApp and<br/>
            more. Share links and collect payments with SLT App
          </p>
        </div>
      </div>

      <div className="main-container">
        <div className={s.benefits}>
          <div className={s.benefit}>
            <p className={s.number}>01</p>

            <div className={s.info}>
              <h2 className={s.label}>
                Start selling online,<br/> even without a website
              </h2>

              <p className={s.text}>
                Don&apos;t have a website? No worries.Create payment links with a few taps and share them via WhatsApp or Instagram, all on mobile
              </p>
            </div>
          </div>

          <div className={s.benefit}>
            <p className={s.number}>02</p>

            <div className={s.info}>
              <h2 className={s.label}>
                Accept Payments from<br/> 20+ channels
              </h2>

              <p className={s.text}>
                Don&apos;t have a website? No worries.Create payment links with a few taps and share them via WhatsApp or Instagram, all on mobile
              </p>
            </div>
          </div>

          <div className={s.benefit}>
            <p className={s.number}>03</p>

            <div className={s.info}>
              <h2 className={s.label}>
                Get notified in real-<br/>time as your get paid
              </h2>

              <p className={s.text}>
                Don&apos;t have a website? No worries.Create payment links with a few taps and share them via WhatsApp or Instagram, all on mobile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
