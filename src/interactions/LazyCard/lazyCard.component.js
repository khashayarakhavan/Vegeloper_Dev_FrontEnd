//Basics
import React, { useState } from "react";
import LazyLoad from 'react-lazy-load';
import json from './lazyCard.data.json';
//Styles
import {Row, Avatar, Name, Card, List} from './lazyCard.styles';


//Code
const LazyLoadRow = ({ name, likes, background }) => (
  <>
    <Row isLoading>
      <Avatar />
      <Name />
    </Row>
    <LazyLoad height={70}>
      <Row >
        <Avatar style={{background}}>
          {name.substring(0, 2)}
          {/* {name} */}
        </Avatar>
        <Name>{name}</Name>
      </Row>
    </LazyLoad>
  </>
);

const LazyLoadCard = () => (
  <Card>
    <List>
      {json.map((obj) => (
        <LazyLoadRow key={obj.id} name={obj.name} background={obj.background} />
      ))}
    </List>
  </Card>
);



//Export
export default LazyLoadCard;
