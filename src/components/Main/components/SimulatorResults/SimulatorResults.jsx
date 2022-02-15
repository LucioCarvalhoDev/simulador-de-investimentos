import styled from "styled-components";

export default function SimuladorResults(props) {

    return (
        <>
            <Grid>
                <StyledTitle>Resultado da Simulação</StyledTitle>
            </Grid>
        </>
    );
}

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        "title"
        "cards"
        "chart";
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    grid-area: title;
    margin-bottom: 1rem;
`;

const CardsContainer = styled.div`
    
`;