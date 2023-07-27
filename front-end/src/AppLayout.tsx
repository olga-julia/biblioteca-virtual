import { Paper } from "@mui/material"
import styled from "styled-components"
import BookInput from "./components/BookInput"
import { BookTable } from "./components/BookTable"
import img from './assets/logo.png'

const Header = styled.header`
    display: flex;
    width: auto;    
    justify-content: center;
    background-color: var(--bg-hd-color);
    padding-top: 10px;
    padding-bottom: 10px;
`

const HeaderImg = styled.img.attrs(( { src }) => ({
    src: src,
    alt: 'Minhas Leituras',
}))``

const Body = styled.div`
    color: var(--font-black);
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-hd-color);
    color: var(--font-white);
`

const WrapperFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AppLayout = () => {
    return (
        <>
            <Header>
                <HeaderImg src={img} /> 
            </Header>
            <Body>
                <Wrapper>      
                    <Paper elevation={3} sx={{ marginTop: 3, marginInline: 22 }}>
                        <BookInput />
                    </Paper>
                    <Paper elevation={3} sx={{ marginTop: 2, marginInline: 22 }}>
                        <BookTable />
                    </Paper>
                </Wrapper>  
            </Body>
            <Footer>
                <WrapperFooter>
                    <p>Desenvolvido por:</p>
                    <p>&copy;Olga Júlia Govoni Quito</p>
                    <p>2023</p>
                </WrapperFooter>
            </Footer>          
      </>
    )
}