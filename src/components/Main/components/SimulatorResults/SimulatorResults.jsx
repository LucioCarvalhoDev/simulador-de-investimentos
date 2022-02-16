import styled from "styled-components";
import Cards from "./Cards.jsx";
import BarsChart from "./BarsChart.jsx";

export default function SimuladorResults(props) {

    return (
        <>
            <Grid>
                <StyledTitle>Resultado da Simulação</StyledTitle>
                <Cards data={props.investmentData[0]} />
                <BarsChart data={props.investmentData[0]} />
            </Grid>
        </>
    );
}

const Grid = styled.div`
    max-width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
        "title"
        "cards"
        "bars";
    grid-template-rows: 2rem 165px 1fr;
    row-gap: 5px;
    
    @media(max-width: 943px) {
        grid-template-rows: 2rem 1fr 1fr;
        row-gap: 1rem;
    }
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    grid-area: title;
    margin-bottom: 1rem;
`;
