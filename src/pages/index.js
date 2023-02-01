import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/partials/Navbar";
import Header from "@/components/Header/Header";
import {
  ContactCard,
  ContactForm,
  Input,
  MainContent,
  Section1,
  Section2,
  Section3,
} from "@/components/style/Main.style";
import Footer from "@/components/partials/Footer";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>nmail</title>
        <meta name="description" content="nmail website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <main>
        <Header />
        <MainContent>
          <Section1>
            <i className="fa-solid fa-info-circle"></i>
            <h3 className="f-size-xlrg center-align">
              NMAIL only provides support for transactional mails and direct
              chats. Promotional and advertising mail are not allowed and will
              be flagged and your account suspended
            </h3>
          </Section1>
          <Section2>
            <p className="f-size-lrg center-align light-txt">
              NMAIL is a fast and simple to use mailing system. NMAIL doesnot
              use the conventional SMTP to transfer mail but runs on TCP giving
              you the same experience but more reliable and versatille. But
              because of that mail from NMAIL cannot be sent to other mail
              servers running on SMTP at the moment. We provide the features and
              functionality of typical mail servers that you are used to with
              added features that are custom to your needs.
            </p>
          </Section2>
          <Section3 className="grd grd-cl-2">
            <ContactCard>
              <h3 className="f-size-xlrg">Get in touch</h3>
              <ul>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <p className="f-size-reg">256 7762 62517</p>
                  <p className="f-size-reg">256 7267 82773</p>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <p className="f-size-reg">contact@nmail.com</p>
                </li>
              </ul>
            </ContactCard>
            <ContactForm>
              <Input>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="example@email.com" />
              </Input>
              <Input>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="" />
              </Input>
              <Input>
                <label htmlFor="message">Message</label>
                <textarea id="messgae" cols="30" rows="4" />
              </Input>
            </ContactForm>
          </Section3>
        </MainContent>
      </main>
      <Footer />
    </>
  );
}
