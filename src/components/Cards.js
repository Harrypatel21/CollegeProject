import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Roadmaps to Acquire  New Skills</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              
              src= "/images/img-10.jpg"
              text='Frontend is face of any website or application. The roadmap will take you from understanding the basics to building simple frontend and then shifting towards different frameworks in the industry.'
              label='FRONT-END'
              path="https://github.com/commclassroom/roadmaps/tree/main/Frontend-Development"
            />
            <CardItem
              src='images/img-12.jpg'
              text='Want to learn what happens at the backstage of any applications? This roadmap will take you from understanding the logic behind backend to build your own APIs, deployments with best practices.'
              label='BACK-END'
              path="https://github.com/commclassroom/roadmaps/tree/main/Backend-Development"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.jpg'
              text='Android development is evolving and products are improving. Want to get started? This roadmap will get you started with absolute basics to advanced concepts like layout & UIs, event based programming, networking & APIs etc.'
              label='Android Development'
              path="https://github.com/commclassroom/roadmaps/tree/main/Android-Development"
            />
            <CardItem
              src='images/img-13.jpg'
              text='BlockChain is an emerging field, want to get started? This roadmap will get you started with absolute basics to advanced concepts like ethereum concepts, how to connect frontend with dapp, SDKs etc.'
              label='BlockChain'
              path="https://github.com/commclassroom/roadmaps/tree/main/Blockchain"
            />
            <CardItem
              src='images/img-15.jpg'
              text='DevOps is an emerging field, want to get started? This roadmap will get you started with absoulte basics to advanced concepts like service mesh, containerization, orchastration etc.'
              label='DevOps'
              path="https://github.com/commclassroom/roadmaps/tree/main/DevOps"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
