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
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
        "title"
        "cards"
        "bars";
    grid-template-rows: 2rem 2fr 3fr;
    row-gap: 5px;
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    grid-area: title;
    margin-bottom: 1rem;
`;
