import React, { useState } from "react";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import styled from "styled-components";
import { useContext } from "react";
import { theme } from "../context/themeContext";
import { motion } from "framer-motion";
import { Mobile } from "../responsive";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
   @media only screen and (max-width:830px) {
    overflow-y: ${({ menu }) => (menu ? "hidden" : "visible")};
    
  }
}
`;

const Container = styled.div`
  position: fixed;
  z-index: 9;
  height: 9vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  box-shadow: 0px 1px 5px 0px black;
  transition: 0.5s all ease-in-out;
  background-color: ${({ themevalue }) => (themevalue ? "#1692c4" : "#04111d")};
  color: #e5e8eb;
  ${Mobile({ padding: 0 })}
`;

const Left = styled.div`
  cursor: pointer;
  transition: 0.5s color ease-in-out;
  color: ${({ themevalue }) => (themevalue ? "white" : "#0fa3d1")};
  ${Mobile({ paddingLeft: "15px" })}
`;

const Center = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  ${Mobile({
    position: "absolute",
    top: "9vh",
    flexDirection: "column",
    height: "92vh",
    width: "100%",
    justifyContent: "space-around",
  })}
  @media only screen and (max-width: 830px) {
    transition: 0.8s all ease-in-out;
    background-color: ${({ themevalue }) =>
      themevalue ? "#1692c4" : "#04111d"};
    transform: ${({ menu }) => (menu ? "translateX(0)" : "translateX(100%)")};
  }

  & li {
    cursor: pointer;
    transition: 0.3s color ease-in-out;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Right = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ paddingRight: "15px", width: "120px" })}
`;

const Burger = styled.div`
  display: none;
  & svg {
    vertical-align: middle;
  }
  ${Mobile({ display: "unset" })}
`;

const ToogleContainer = styled(motion.div)`
  cursor: pointer;
  box-shadow: 1px 1px 5px 0px black;
  height: 32px;
  width: 55px;
  border-radius: 10px;
  background-color: #0fa3d1;
  display: flex;
  align-items: center;
`;

const ToggleSwitch = styled.div`
  padding: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  transition: 0.5s all ease-in-out;
  transform: ${({ themevalue }) =>
    themevalue === true ? "translateX(0px)" : "translateX(22px)"};
`;

const Navbar = () => {
  const { themevalue, click } = useContext(theme);
  const [menu, setMenu] = useState(false);

  const burgerHandler = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <GlobalStyle menu={menu} />
      <Container themevalue={themevalue}>
        <Left themevalue={themevalue}>
          <motion.h2
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            Joshi.
          </motion.h2>
        </Left>
        <Center themevalue={themevalue} menu={menu}>
          <motion.li
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="#1">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="#2">About</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="#3">Project</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="#4">Contact</a>
          </motion.li>
        </Center>
        <Right>
          <ToogleContainer
            onClick={click}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <ToggleSwitch themevalue={themevalue}>
              {themevalue && <LightMode style={{ color: "yellow" }} />}
              {!themevalue && <DarkMode style={{ color: "white" }} />}
            </ToggleSwitch>
          </ToogleContainer>
          <Burger onClick={burgerHandler}>
            <MenuOutlined style={{ fontSize: "35px" }} />
          </Burger>
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
