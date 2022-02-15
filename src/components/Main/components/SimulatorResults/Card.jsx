import styled from "styled-components";

export default function Card(props) {
    return (
        <Container>
            <Title>{props.title || ''}</Title>
            <StyledSpan>{props.value}</StyledSpan>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    border: 3px solid #e6e6e6;
`;

const Title = styled.h5`
    text-align: center;
`;

const StyledSpan = styled.span`
    color: ${props => props.color || "black"};
    text-align: center;
    font-size: .9rem;
`;