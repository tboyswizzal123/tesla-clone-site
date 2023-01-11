import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgi={props.img}>
        <Fade left>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                {props.left}
            </LeftButton>
            {props.right && 
                <RightButton>
                    {props.right}
                </RightButton>
}
        </ButtonGroup>
        <DownArrow src='images/down-arrow.svg' />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap =styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgi}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items:center; //horizontal
`

const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup =styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    Background-color: white;
    color:black;
    opacity:.9;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``