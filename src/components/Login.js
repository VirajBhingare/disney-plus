import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET THE DISNEY BUNDLE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            placeat? Dolore debitis corporis ea fuga, beatae iure dolor fugit
            similique blanditiis! Ut architecto enim consequatur.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          <BgImage />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  display: flex;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  padding: 16.5px 0;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
