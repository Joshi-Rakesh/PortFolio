import WhatsApp from "@mui/icons-material/WhatsApp";
import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../context/themeContext";
import mee from "../Image/mee.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Mobile } from "../responsive";

const SectionA = styled.div`
  display: flex;
  max-width: 100%;
  padding: 0px 67px 0px 50px;
  height: 100vh;
  ${Mobile({
    padding: "0px",
    height: "75vh",
    alignItems: "flex-end",
  })}/* border: 2px solid red; */
`;

const SectionALeft = styled(motion.div)`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${Mobile({ alignItems: "flex-end" })}
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 62px;
  border-radius: 15% 81% 15% 81% / 100% 0% 100% 0%;
  background-color: #4fce5d;
  color: white;
  border: none;
  transition: 0.4s all ease-in-out;
  box-shadow: 1px 1px 5px 0px black;

  &:hover {
    border-radius: 10px;
  }

  & svg {
    font-size: 40px;
  }
`;

const LeftWrapper = styled.div`
  padding: 50px 70px 0px 50px;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid red; */

  ${Mobile({
    height: "80%",
    padding: "0px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "7%",
  })}

  & h2 {
    font-size: 30px;
    font-weight: 300;
    ${Mobile({ fontSize: "25px" })}
  }

  & h1 {
    font-size: 60px;
    ${Mobile({ fontSize: "40px" })}
  }
`;

const Title = styled.div`
  width: 72%;
  display: flex;
  font-size: 1.8rem;
  font-weight: bolder;
  border-bottom: 5px solid #1692c4;
  color: #1692c4;
  /* background-color: red; */
  ${Mobile({ fontSize: "25px", width: "100%", justifyContent: "center" })}
`;

const Description = styled.p`
  /* background: red; */
  width: 75%;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center", fontSize: "18px", padding: "0px 15px" })}
`;

const SectionARight = styled(motion.div)`
  flex: 1;
  padding-top: 100px;
  /* background-color: blue; */
  overflow: hidden;
  ${Mobile({ display: "none" })}

  & img {
    transform: scale(1.2);
    width: 100%;
  }
`;

const Header = () => {
  const { themevalue } = useContext(theme);

  const svgHandler = () => {
    console.log("clicked");
  };

  return (
    <SectionA id="1">
      <SectionALeft
        initial={{ opacity: 0, translateX: -500 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <LeftWrapper>
          <h2>Hello, My name is</h2>
          <h1>Rakesh Joshi</h1>
          <Title>
            <span>Front-End developer&nbsp; &nbsp; </span>
            <span>
              <Typewriter
                options={{
                  strings: [">>>"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </Title>
          <Description>
            I am a front-end website developer and I have a love of Web
            Development and IT in general that I bring to all my work.
          </Description>
          <a href="https://wa.me/919599121687" target="_blank" rel="noreferrer">
            <Button>
              <WhatsApp />
            </Button>
          </a>
        </LeftWrapper>
      </SectionALeft>
      <SectionARight
        initial={{ opacity: 0, translateX: 500 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={mee} alt="PNG" />
      </SectionARight>
    </SectionA>
  );
};

export default Header;
