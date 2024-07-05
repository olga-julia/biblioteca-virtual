import { Paper } from "@mui/material"
import styled from "styled-components"
import Menu from "./components/Menu"
import { BookTable } from "./components/BookTable"
import './AppLayout.css';
import img from './assets/small-logo.png'


const LogoImg = styled.img `
    padding: 1px;
`

const Header = styled.div`
    display: flex;   
    justify-content: center;
    padding-top: 20px;
`

const Body = styled.div`
    color: var(--font-black);
`

const Footer = styled.div` 
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 230px;    
`

const WrapperFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 0;
        color:#595959
    }
`

const Wrapper = styled.div`
    display: flex;   
    justify-content: center;
`

export const AppLayout = () => {
    return (
        <div className='container'>
            <Header>
                <Paper elevation={3} sx={{display: "flex", backgroundColor:'#e9e6e0', justifyContent:'space-between', width: '50%', borderRadius: '4px' }}>
                    <LogoImg src={img}  alt='Logo'/>
                    <Menu />
                </Paper>
            </Header>
            <Body>
                <Wrapper>       
                    <Paper elevation={3} sx={{ marginTop: 2, marginInline: 22 }}>
                        <BookTable />
                    </Paper>
                </Wrapper>  
            </Body>
            <Footer>
                <WrapperFooter>                    
                    <p>&copy;Olga Júlia Govoni Quito</p>
                    <p>2023</p>
                </WrapperFooter>
            </Footer>          
      </div>
    )
}