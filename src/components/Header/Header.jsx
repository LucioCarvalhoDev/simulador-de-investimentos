// import './style.css';

import styled from "styled-components";


export default function Header(props) {


    return (
        <StyledHeader className="header">
            <Title className="header_title">Simulador de Investimentos</Title>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
background: #efefef;
`;

const Title = styled.h1`
font-size: 1.5rem;
text-align: center;
padding: 1rem;
`;