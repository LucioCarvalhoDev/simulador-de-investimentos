import { useState } from "react";
import styled from "styled-components";

export default function ButtonRatio(props) {

    const [activeRatio, setActiveRatio] = useState(0);

    return (
        <Container>
            {props.options.map((option, key) => {
                const iptId = 'ipt-ratio-' + props.name + option;
                const isActive = key === activeRatio;
                return (
                    <Option key={key} isActive={isActive} idx={key}>
                        <Input
                            type="radio"
                            id={iptId}
                            name={props.name}
                            onChange={(e) => { setActiveRatio(key); }}
                        />
                        <StyledLabel htmlFor={iptId}>
                            <Icon isActive={isActive} />
                            <span>{option}</span>
                        </StyledLabel>
                    </Option>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
border: 1px solid black;
border-radius: 10px;
display: flex;
justify-content: space-around;
overflow: hidden;
`;

const Option = styled.div`
color: ${props => props.isActive ? 'white' : 'black'};
background-color: ${props => props.isActive ? "#ed8e53" : "#ffffff"};
border-left: ${props => props.idx !== 0 ? '1px solid black' : 'none'};
text-align: center;
width: 100%;
transition: background-color 500ms;
display: flex;
`;

const Input = styled.input`
display: none;
`;

const StyledLabel = styled.label`
display: flex;
justify-content: center;
text-transform: capitalize;
padding: 1rem;
width: 100%;
height: 100%;
cursor: pointer;
`;

const Icon = styled.label`
display: block;
color: white;
height: 8px;
width: 16px;
margin-right: 5px;
border: solid;
border-width: 0 0 4px 4px;
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
transform: rotate(-45deg);
`;