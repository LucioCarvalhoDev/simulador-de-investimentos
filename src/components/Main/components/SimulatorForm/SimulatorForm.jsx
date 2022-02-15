import styled from "styled-components";
import ButtonRatio from "./ButtonRatio.jsx";

export default function SimulatorForm(props) {


    return (
        <StyledForm>
            <StyledTitle>Simulador</StyledTitle>
            <ButtonRatio options={['bruto', 'líquido']} name="rendimento"></ButtonRatio>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    display: grid;
    grid-template-areas: 
        "title title"
        "left right"
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    grid-area: title;
`;