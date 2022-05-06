import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import React, { useContext } from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../context/themeContext";
import { Mobile } from "../responsive";

const Title = styled.h1`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  text-decoration: underline;
  ${Mobile({ marginTop: "12%" })}
`;

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 100px;
  /* border: 2px solid red; */
  ${Mobile({
    padding: "0px",
    height: "100vh",
    justifyContent: "center",
    margin: "15px 0px 50px 0px",
  })}
  @media only screen and (max-width: 400px) {
    height: 150vh;
  }
`;

const ShadowContainer = styled.div`
  /* border: 5px solid green; */
  width: 100%;
  display: flex;
  transition: 0.5s box-shadow ease-in-out;
  box-shadow: ${({ themevalue }) =>
    themevalue ? "1px 1px 5px 0px black" : "1px 1px 25px 1px black"};
  border-radius: 15px;
  overflow: hidden;
  ${Mobile({ flexDirection: "column", width: "90%", height: "100%" })}
`;

const Left = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid lightgray;
  flex: 1;
  ${Mobile({
    padding: "5px",
    flex: "2",
    border: "none",
  })}
`;

const FirstLeft = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15%;
  align-items: center;
  text-align: center;
  height: 22%;
  border-bottom: 1px solid lightgray;
  ${Mobile({ padding: "5px" })}
  @media only screen and (max-width: 400px) {
    height: 30%;
  }
`;

const LeftTitle = styled.h3`
  text-decoration: underline;
`;

const LeftDesc = styled.p``;

const Form = styled.form`
  padding: 50px 10px 0px 10px;
  height: 78%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10%;
  align-items: center;
  @media only screen and (max-width: 400px) {
    height: 70%;
  }
`;

const Name = styled.input`
  outline: none;
  width: 55%;
  padding: 8px 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
`;

const Email = styled.input`
  outline: none;
  width: 55%;
  padding: 8px 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
`;

const Message = styled.textarea`
  resize: none;
  outline: none;
  width: 55%;
  /* height: 10vh; */
  padding: 8px 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
`;

const Submit = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  border-radius: 15% 81% 15% 81% / 100% 0% 100% 0%;
  background-color: #1692c4;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  border: none;
  box-shadow: 1px 1px 5px 0px black;
  transition: 0.4s all ease-in-out;
  &:hover {
    border-radius: 10px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Map = styled.div`
  height: 65%;
  overflow: hidden;
  width: 100%;
  ${Mobile({ height: "50%" })}
`;

const FinalLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12%;
  height: 35%;
  ${Mobile({ height: "50%", gap: "10%", padding: "10px 0px" })}
`;

const Phone = styled.div`
  padding: 0px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
`;
const Mail = styled.div`
  padding: 0px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
`;
const Address = styled.div`
  padding: 0px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
`;

const Contact = () => {
  const { themevalue } = useContext(theme);

  const formRef = useRef();

  const FormHandler = (e) => {
    e.preventDefault();
    console.log("hello");
    toast.success("Message sent");

    emailjs
      .sendForm(
        "service_oycmgaa",
        "template_06txhdt",
        formRef.current,
        "HDkacG0ymoMmESPTa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Title id="4">GET IN TOUCH</Title>
      <Container>
        <ShadowContainer themevalue={themevalue}>
          <Left>
            <FirstLeft>
              <LeftTitle>React Out to me</LeftTitle>
              <LeftDesc>
                Got a question? Have some suggestions or just want to say hi?
                Fill this form and I will reach out to you as soon as possible.
              </LeftDesc>
            </FirstLeft>
            <Form ref={formRef} onSubmit={FormHandler}>
              <Name placeholder="Name" type="text" name="name" required />
              <Email placeholder="Email" name="email" required />
              <Message placeholder="Message" name="message" rows="5" required />
              <Submit>Submit</Submit>
            </Form>
          </Left>
          <Right>
            <Map>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30603.105235091778!2d77.02283843247494!3d28.452536925468603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb7324a39179ef7f!2zMjjCsDI2JzQ2LjYiTiA3N8KwMDAnMzYuMiJF!5e0!3m2!1sen!2sin!4v1651659195551!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Map>
            <FinalLeft>
              <Phone>
                <PhoneOutlined color="success" />
                <p>+91-9599121687</p>
              </Phone>
              <Mail>
                <EmailOutlined sx={{ color: "#1692C4" }} />
                <p>Joshi201195@gmail.com</p>
              </Mail>
              <Address>
                <LocationOnOutlined sx={{ color: "#E61A23" }} />
                <p>Sector-10A Gurugram (Haryana), India</p>
              </Address>
            </FinalLeft>
          </Right>
        </ShadowContainer>
      </Container>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact;
