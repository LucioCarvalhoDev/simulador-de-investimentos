import { useState } from "react";
import styled from "styled-components";

/**
 * Input radio flexivel e animado
 * @component
 * @example
 * <ButtonRadio 
 *      name="Cor favorita"
 *      options={['vermelho', 'violeta', 'dourado']}
 *      info="Qual a melhor cor" />
 */
function ButtonRadio(props) {

    const [activeRatio, setActiveRatio] = useState(0);

    const options = props.options.map((option, key) => {
        const iptId = 'ipt-ratio-' + props.name + option;
        const isActive = key === activeRatio;
        return (
            <Option key={key} isActive={isActive} idx={key}>
                <Input
                    type="radio"
                    id={iptId}
                    name={props.name}
                    onChange={() => setActiveRatio(key)}
                />
                <StyledLabel htmlFor={iptId}>
                    <Icon isActive={isActive}></Icon>
                    <span>{option}</span>
                </StyledLabel>
            </Option>
        );
    });


    return (
        <Container>
            <TitleArea>
                <Title>{props.name.replaceAll('-', ' ')}</Title>
                <InfoBox><span>i</span><Info>{props.info}</Info></InfoBox>
            </TitleArea>
            <OptionsArea>
                {options}
            </OptionsArea>
        </Container>
    );
}

export default ButtonRadio;

const Container = styled.div`
`;

const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

const Title = styled.h6`
    color: #000000aa;
    
    &:first-letter {
        text-transform: capitalize;
    }   
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
`;

const Info = styled.div`
    background: #fdfdfd;
    border-radius: 1rem;
    display: none;
    box-shadow: 
        1px 1px 1px #00000050,
        2px 2px 2px #00000050,
        4px 4px 4px #00000050;
    padding: 1rem;
    position: absolute;
    transform: translateX(-85%);
    width: 10rem;
    z-index: 2;
    text-align: left;

    ${InfoBox}:hover & {
        display: block;
    }
`;

const OptionsArea = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
`;

const Option = styled.div`
    display: flex;
    background-color: ${props => props.isActive ? "#ed8e53" : "transparent"};
    color: ${props => props.isActive ? 'white' : 'black'};
    border-left: ${props => props.idx !== 0 ? '1px solid black' : 'none'};
    text-align: center;
    width: 100%;
    transition: background-color 500ms;
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
    width: 100%;
    height: 100%;
    padding: 1rem .1rem;
    
    &:hover {
        cursor: pointer;
    }
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