import React, { useContext } from "react";
import styled from "styled-components";
import shop from "../Image/ShopoHolic.png";
import net from "../Image/NetOne.png";
import meal from "../Image/Mealicious.png";
import GitHub from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { theme } from "../context/themeContext";
import { Mobile } from "../responsive";

const Title = styled.h1`
  text-decoration: underline;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  /* background: yellow; */
`;

const Container = styled.div`
  min-height: 180vh;
  padding: 0px 100px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${Mobile({ padding: "0px", minHeight: "210vh", alignItems: "center" })}

  @media only screen and (max-width: 400px) {
    min-height: 270vh;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 55vh;
  box-shadow: 1px 1px 5px 0px black;
  border-radius: 15px;
  overflow: hidden;
  ${Mobile({ flexDirection: "column", height: "65vh", width: "90%" })}
  @media only screen and (max-width: 400px) {
    height: 85vh;
  }
`;

const Website = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  ${Mobile({ height: "50%" })}
`;

const Browser = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
  padding: 0px 15px;
  width: 100%;
  height: 5vh;
  position: sticky;
  z-index: 2;
  transition: 0.5s all ease-in-out;
  background-color: ${({ themevalue }) => (themevalue ? "#f3fbfe" : "#22272C")};
  border-bottom: 1px solid gray;
  ${Mobile({ height: "10%" })}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid lightgray;

  /* borderBottom: "2px solid lightgray", */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #0fa3d1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0% 0%;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translateY(-1%);
  }
`;

const Details = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-radius: 0px 15px 15px 0px;
  transition: 0.5s all ease-in-out;
  background-color: ${({ themevalue }) => (themevalue ? "#f3fbfe" : "#22272C")};
  width: 100%;
  height: 100%;
  color: ${({ themevalue }) => (themevalue ? "#202225" : "whitesmoke")};
  ${Mobile({
    height: "50%",
    padding: "15px",
    borderRadius: "0px 0px 15px 15px",
    borderTop: "2px solid lightgray",
  })}

  & p {
    font-size: 17px;
    font-weight: 500;
  }
`;

const Techstack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0px 5px;
  /* background-color: green; */
  ${Mobile({ padding: "0px", flexWrap: "wrap" })}
  & button {
    transition: 0.5s all ease-in-out;
    background-color: white;
    border: 1px solid
      ${({ themevalue }) => (themevalue ? "lightgray" : "#373737")};
    padding: 10px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    ${Mobile({ padding: "8px 5px", borderRadius: "5px" })}
    @media only screen and (max-width: 400px) {
      padding: 8px 3px;
      width: auto;
      /* background-color: red; */
    }
  }
`;

const ViewButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  transition: 0.3s all ease-in-out;
  box-shadow: 1px 1px 5px 0px black;
  background-color: white;
  color: black;
  &:hover {
    background-color: #1692c4;
    color: white;
  }
`;

const Project = () => {
  const { themevalue } = useContext(theme);
  return (
    <>
      <Title id="3">PROJECTS</Title>
      <Container>
        <Card>
          <Website>
            <Browser themevalue={themevalue}>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
            </Browser>
            <ImageContainer>
              <Image src={shop} alt="ShopoHolic" />
            </ImageContainer>
          </Website>
          <Details themevalue={themevalue}>
            <h2>Shopoholic</h2>
            <p>
              E-commerce website where users can add products to the cart and
              sign up/sign in using their credentials.
            </p>
            <Techstack themevalue={themevalue}>
              <button>React</button>
              <button>Context-api</button>
              <button>local storage</button>
            </Techstack>
            <ViewButtons>
              <a
                href="https://joshi-rakesh.github.io/Shopoholic/#/Home"
                target="_blank"
              >
                <Button>
                  <OpenInNew />
                </Button>
              </a>
              <a
                href="https://github.com/Joshi-Rakesh/Shopoholic"
                target="_blank"
              >
                <Button>
                  <GitHub />
                </Button>
              </a>
            </ViewButtons>
          </Details>
        </Card>

        <Card>
          <Website>
            <Browser themevalue={themevalue}>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
            </Browser>
            <ImageContainer>
              <Image src={net} alt="NetOne" />
            </ImageContainer>
          </Website>
          <Details themevalue={themevalue}>
            <h2>Netone</h2>
            <p>
              A movie tracking app where users can add movies to watch later
              section and used local storage to persist the data.
            </p>
            <Techstack themevalue={themevalue}>
              <button>React</button>
              <button>Context-api</button>
              <button>local storage</button>
            </Techstack>
            <ViewButtons>
              <a
                href="https://joshi-rakesh.github.io/Netone/#/"
                target="_blank"
              >
                <Button>
                  <OpenInNew />
                </Button>
              </a>
              <a href="https://github.com/Joshi-Rakesh/Netone" target="_blank">
                <Button>
                  <GitHub />
                </Button>
              </a>
            </ViewButtons>
          </Details>
        </Card>

        <Card>
          <Website>
            <Browser themevalue={themevalue}>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
            </Browser>
            <ImageContainer>
              <Image src={meal} alt="Mealicious" />
            </ImageContainer>
          </Website>
          <Details themevalue={themevalue}>
            <h2>Mealicious</h2>
            <p>
              This is a meal app created using 2 API's and redux toolkit where
              users can add their food to cart and place an order.
            </p>
            <Techstack themevalue={themevalue}>
              <button>React</button>
              <button>Redux</button>
              <button>Styled-components</button>
            </Techstack>
            <ViewButtons>
              <a href="https://joshi-rakesh.github.io/Meal/#/" target="_blank">
                <Button>
                  <OpenInNew />
                </Button>
              </a>
              <a href="https://github.com/Joshi-Rakesh/Meal" target="_blank">
                <Button>
                  <GitHub />
                </Button>
              </a>
            </ViewButtons>
          </Details>
        </Card>
      </Container>
    </>
  );
};

export default Project;
