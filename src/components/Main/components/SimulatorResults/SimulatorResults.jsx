import styled from "styled-components";
import Cards from "./Cards.jsx";
import BarsChart from "./BarsChart.jsx";

export default function SimuladorResults(props) {

    return (
        <Container>
            <StyledTitle>Resultado da Simulação</StyledTitle>
            <Grid>
                <Cards data={props.investmentData[0]} />
                <BarsChart data={props.investmentData[0]} />
            </Grid>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-areas: "title" "content";
    grid-template-rows: 2rem 1fr;

    @media(max-width: 300px) {
        grid-template-rows: 3.5rem 1fr;
    }
`;

const Grid = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
        "cards"
        "bars";
    row-gap: 5px;
    
    // @media(max-width: 943px) {
    //     row-gap: 1rem;
    // }
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;
