import styled from "styled-components";
import SimulatorForm from "./components/SimulatorForm/SimulatorForm.jsx";
import SimuladorResults from "./components/SimulatorResults/SimulatorResults.jsx";


export default function Main(props) {

    return (
        <StyledMain className="m">
            <SimulatorForm></SimulatorForm>
            <SimuladorResults></SimuladorResults>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 45% 55%;
    grid-gap: 1rem;
    background: #efefef;
    padding: 1rem;
`;