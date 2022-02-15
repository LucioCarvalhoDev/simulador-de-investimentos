import { useState } from "react";
import styled from "styled-components";
import SimulatorForm from "./components/SimulatorForm/SimulatorForm.jsx";
import SimuladorResults from "./components/SimulatorResults/SimulatorResults.jsx";


export default function Main(props) {

    const [investmentData, setInvestmentData] = useState([]);

    return (
        <StyledMain className="m">
            <SimulatorForm setInvestmentData={setInvestmentData}></SimulatorForm>
            <SimuladorResults investimentData={investmentData}></SimuladorResults>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 45% 55%;
    grid-gap: 1rem;
    background: #efefef;
    padding: 1rem;

    @media(max-width: 943px) {
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr;
    }
`;