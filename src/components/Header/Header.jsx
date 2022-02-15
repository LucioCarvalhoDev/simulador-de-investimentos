// import './style.css';

import styled from "styled-components";

const StyledHeader = styled.header`
background: #efefef;
`;
const StyledTitle = styled.h2`
font-size: 1.5rem;
text-align: center;
padding: 1rem;
`;

export default function Header(props) {


    return (
        <StyledHeader className="header">
            <StyledTitle className="header_title">Simulador de Investimentos</StyledTitle>
        </StyledHeader>
    );
}