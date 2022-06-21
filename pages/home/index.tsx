import type { NextPage } from "next";
import { HomeBanner } from "../../components/HomeBanner";
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
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
          <div className="gridItem" />
        </div>
      </div>
      <div className="secondaryContainer">World</div>
    </Wrapper>
  );
};

export default Home;
