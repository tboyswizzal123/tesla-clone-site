import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'


function Header() {
    const [bState, setB] = useState(false);
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt="" />   
        </a>
        <Menu>
        <a href="#"> Model S</a>
        <a href="#"> Model 3</a>
        <a href="#"> Model X</a>
        <a href="#"> Model Y</a>
        <a href="#"> Solar Roof</a>
        <a href="#"> Solar panels</a>
        </Menu>
        <Rmenu>
        <a href="#"> Shop</a>
        <a href="#"> Tesla Account</a>
        <Cmenu onClick={()=>setB(true)}/>
        </Rmenu>
        <Bnav show={bState}>
            <Cwrap>
                <Cclose onClick={()=>setB(false)}/>
            </Cwrap>
            <li><a href="#"> Existing Inventory</a></li>
            <li><a href="#"> Used Inventory</a></li>
            <li><a href="#"> Trade-in </a></li>
            <li><a href="#"> Cybertruck</a></li>
            <li><a href="#"> Roadaster</a></li>
        </Bnav>

    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const Menu = styled.div`
    margin-left:140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    @media(max-width: 768px) {
        display:none;
    }
`

const Rmenu = styled.div`
    display:flex;
    align-items:center;
    a{
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
    }
`

const Cmenu = styled(MenuIcon)`
    cursor:pointer;
`
const Bnav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color:white;
    width: 300px;
    z-index:10;
    list-style:none;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align: start;
    transition:transform 0.2s ease-in;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    li {
        padding: 15px 0;
        border-bottom:1px solid rgba(0,0,0,2);
        a {
            font-weight: 600;
        }
    }
`

const Cclose=styled(CloseIcon)`
    cursor: pointer;
`

const Cwrap= styled.div`
    display: flex;
    justify-content: flex-end;
`