import type { NextPage } from "next";
import { HomeBanner } from "../../components/HomeBanner";
import { Title } from "../../components/Typography";
import { Wrapper } from "../../styles/Home.module";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <div className="primaryContainer">
        <div className="banner">
          <HomeBanner />
        </div>
        <div className="hotList">
          <div className="gridItem gridBigItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem wideGridItem" />
        </div>
      </div>
      <div className="secondaryContainer">
        <div className="winnersTab">
          <Title type="H3">Winners</Title>
          <div className="winnersList">
            <div className="winnerItem" />
            <div className="winnerItem" />
            <div className="winnerItem" />
            <div className="winnerItem" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
