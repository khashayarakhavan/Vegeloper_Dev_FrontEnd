//Basics
import React, { useState } from "react";
// import LazyLoad from 'react-lazy-load';
// import reduxSaga from "redux-saga";
// import json from './lazyCard.data.json';
import { Row, Underline, Button, Content, Card, Tab } from "./tabbedCard.styles";
//Styles
// import {Row, Avatar, Name, Card, List} from './tabbedCard.styles';


export const tabs = ["Vibrant", "Pretty", "Awesome"];

//Code
export const Tabs = ({active, setActive}) => (
  <Row>
    <Underline active={active} />
    {tabs.map((tab, index) => (
      <Button active={active === index} onClick={() => setActive(index)}>
        {tab}
      </Button>
    ))}
  </Row>
);


export const TabbedCard = () => {
  const [active, setActive] = useState(0);

  return (
    <Card>
      <Tabs active={active} setActive={setActive}/>
      <Content active={active}>
        {tabs.map((tab) => (
          <Tab>{tab}</Tab>
        ))}
      </Content>
    </Card>
  );
};

export default TabbedCard;
// //Code
// const LazyLoadRow = ({ name, likes, background }) => (
//   <>
//     <Row isLoading>
//       <Avatar />
//       <Name />
//     </Row>
//     <LazyLoad height={56}>
//       <Row>
//         <Avatar style={{ background }}>
//           {name.split(" ", 2)[0].substring(0, 1)}
//           {name.split(" ", 2)[1].substring(0, 1)}
//         </Avatar>
//         <Name>{name}</Name>
//       </Row>
//     </LazyLoad>
//   </>
// );

// const LazyLoadCard = () => (
//   <Card>
//     <List>
//       <Row>
//         <Avatar style={{ background: "lightyellow", color: "black" }}>
//           AK
//           {/* {name} */}
//         </Avatar>
//         <Name>Aftofl Big5</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "pink", color: "black" }}>
//           JAMA
//           {/* {name} */}
//         </Avatar>
//         <Name>DR JAMA FelFel</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "lightblue", color: "black" }}>
//           PLPO
//           {/* {name} */}
//         </Avatar>
//         <Name>POLPO Nanaj</Name>
//       </Row>
//       {json.map((obj) => (
//         <LazyLoadRow key={obj.id} name={obj.name} background={obj.background} />
//       ))}
//     </List>
//   </Card>
// );



//Export
// export default LazyLoadCard;
