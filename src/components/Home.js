import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
        title='Model 3'
        des='Order Online for Touchless Delivery'
        left="Custom Order"
        right="Existing Inventory"
        img="model-3.jpg"
        />
        <Section 
        title='Model Y'
        des='Order Online for Touchless Delivery'
        left="Custom Order"
        right="Existing Inventory"
        img="model-y.jpg"
        />
        <Section 
        title='Model S'
        des='Order Online for Touchless Delivery'
        left="Custom Order"
        right="Existing Inventory"
        img="model-s.jpg"
        />
        <Section 
        title='Model X'
        des='Order Online for Touchless Delivery'
        left="Custom Order"
        right="Existing Inventory"
        img="model-x.jpg"
        />
       <Section 
        title='Solar Panels'
        des='Lowest Cost Solar Panels in America'
        left="Order now"
        right="Learn More"
        img="solar-panel.jpg"
        />
        <Section 
        title='Solar Panels'
        des='Produce Clean Energy From Your Roof'
        left="Order now"
        right="Learn More"
        img="solar-roof.jpg"
        />
       <Section 
        title='Accessories'
        des=''
        left="SHOP NOW"
        img="accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container= styled.div`
        height:100vh;

    `