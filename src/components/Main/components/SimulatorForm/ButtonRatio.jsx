import { useState } from "react";
import styled from "styled-components";

export default function ButtonRatio(props) {

    const [activeRatio, setActiveRatio] = useState(0);

    return (
        <Container>
            <TitleArea>
                <Title>{props.name.replaceAll('-', ' ')}</Title>
                <InfoBox><span>i</span><Info>{props.info}</Info></InfoBox>
            </TitleArea>
            <OptionsArea>
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
                                <Icon isActive={isActive}></Icon>
                                <span>{option}</span>
                            </StyledLabel>
                        </Option>
                    );
                })}
            </OptionsArea>
        </Container>
    );
}

const Container = styled.div`
    
`;

const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

const Title = styled.h6`
    &:first-letter {
        text-transform: capitalize;
    }
    color: #000000aa;
`;

const InfoBox = styled.div`
    color: #00000088;
    position: relative;
    text-align: center;
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    border: 2px solid #00000088;
    border-radius: 100%;

    &:hover {
        cursor: pointer;
    }

    &:hover > div {
        display: block;

    }
`;

const Info = styled.div`
    background: #fdfdfd;
    padding: 1rem;
    border-radius: 1rem;
    display: none;
    position: absolute;
    left: 1.5rem;
    width: 10rem;
    background: $fdfdfd;
    z-index: 2;
    white-space: pre-line;
    text-align: left;
`;

const OptionsArea = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`;

const Option = styled.div`
    color: ${props => props.isActive ? 'white' : 'black'};
    background-color: ${props => props.isActive ? "#ed8e53" : "transparent"};
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
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
    padding: 1rem .1rem;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Icon = styled.span`
    display: ${props => props.isActive ? 'block' : 'none'};
    color: white;
    height: .5rem;
    width: .9rem;
    border: solid;
    border-width: 0 0 4px 4px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg) scaleX(0.5) scaleY(0.5);
`;