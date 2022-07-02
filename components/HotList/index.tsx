import styled from "styled-components";
import Card from "../Card";

const testData: any[] = [
  {
    id: 1,
    type: "24h",
    blockchain: "etherium",
    bidAmount: 10,
    priority: "high",
  },
  {
    id: 2,
    type: "24h",
    blockchain: "etherium",
    bidAmount: 10,
    priority: "low",
  },
  {
    id: 3,
    type: "7h",
    blockchain: "etherium",
    bidAmount: 10,
    priority: "low",
  },
  {
    id: 4,
    type: "24h",
    blockchain: "etherium",
    bidAmount: 10,
    priority: "medium",
  },
];

const cardTypeResolver = (priority: string) => {
  switch (priority) {
    case "high":
      return "big";
    case "medium":
      return "long";
    default:
      return "small";
  }
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 80px);
  grid-template-rows: repeat(6, 80px);
  grid-gap: 20px;
`;

const HotList = () => {
  return (
    <Wrapper>
      {testData.map((item) => {
        return (
          <Card
            key={item.id}
            data={item}
            type={cardTypeResolver(item.priority)}
          />
        );
      })}
    </Wrapper>
  );
};

export default HotList;
