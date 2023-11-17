import React from "react";
import { Container, Header, LogImg,Title, MenuContainer,MenuItemLink} from "./style";
import {MdDashboard, MdArrowDownward, MdArrowUpward,MdExitToApp} from 'react-icons/md';

import logImg from '../../assets/logo.svg'
const Aside: React.FC = () => {
    return (
        <>
            <Container>
                <Header>
                <LogImg src={logImg} alt="logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
                </Header>
                
                <MenuContainer>
                    <MenuItemLink href='/Dashboard'>
                        <MdDashboard/>
                        Dashboard
                    </MenuItemLink>
                    <MenuItemLink href='/list/entry-balance'>
                        <MdArrowUpward/>
                        Entradas
                    </MenuItemLink>
                    <MenuItemLink href='/list/exit-balance'>
                        <MdArrowDownward/>
                        Saídas
                    </MenuItemLink>
                    <MenuItemLink href='#'>
                        <MdExitToApp/>
                        Sair
                    </MenuItemLink>
                </MenuContainer>

            </Container>
        </>
    )
};
export default Aside;