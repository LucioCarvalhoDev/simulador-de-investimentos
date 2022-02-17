import styled from "styled-components";

function Card(props) {
    return (
        <Container>
            <Title>{props.title || ''}</Title>
            <StyledSpan color={props.color}>{props.prefix || ''} {props.value}</StyledSpan>
        </Container>
    );
}

export default Card;

const Container = styled.section`
    box-sizing: border-box;
    padding: 1rem 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    border: 3px solid #e6e6e6;
`;

const Title = styled.h5`
    text-align: center;
`;

const StyledSpan = styled.span`
    color: ${props => props.color || 'black'};
    text-align: center;
    font-size: .9rem;
`;