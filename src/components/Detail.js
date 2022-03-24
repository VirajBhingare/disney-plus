import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    getDoc(doc(db, "movies", id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDetailData(snapshot.data());
        } else {
          console.log("No such Document found!");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  opacity: 0.8;
  position: fixed;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  height: 56px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 1.8px;
  border: none;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  background-color: rgb(249, 249, 249);

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
