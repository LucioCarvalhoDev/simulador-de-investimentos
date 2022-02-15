import styled from "styled-components";
import SimulatorForm from "./components/SimulatorForm/SimulatorForm.jsx";

const StyledMain = styled.main`
    background: #efefef;
    padding: 1rem;
`;


export default function Main(props) {

    return (
        <StyledMain className="m">
            <SimulatorForm></SimulatorForm>
            {/* <SimulatorResults></SimulatorResults> */}
        </StyledMain>
    );
}