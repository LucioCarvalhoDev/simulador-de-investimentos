import styled from "styled-components";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory";

export default function BarsChart(props) {

    const render = props.data != undefined;

    let valoresComAporte = [];
    let valoresSemAporte = [];
    if (render) {
        valoresComAporte = Object
            .values(props.data?.graficoValores.comAporte)
            .map((val, idx) => ({ month: idx, value: val }));

    }


    console.log(props.data);


    return (
        <>
            <Container>
                {render &&
                    <VictoryChart
                        domainPadding={-20}
                    >
                        <VictoryAxis
                            tickValues={valoresComAporte.map(step => step.month)}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickFormat={x => x}
                        />
                        <VictoryBar
                            data={valoresComAporte}
                            x="month"
                            y="value" />

                    </VictoryChart>
                }

            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;