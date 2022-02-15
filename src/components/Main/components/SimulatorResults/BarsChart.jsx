import styled from "styled-components";
import { Chart } from 'chart.js';

export default function BarsChart(props) {
    console.log(props.data);

    const data1 = props.data?.graficoValores?.comAporte;
    const data2 = props.data?.graficoValores?.semAporte;

    // if (props.data != undefined) {
    //     const ctx = document.getElementById('myChart')?.getContext('2d');
    //     const q = new Chart(ctx, {
    //         type: 'bar',
    //         data: {
    //             datasets: [{
    //                 data: data1
    //             }]
    //         }
    //     });
    // }

    return (
        <>
            <Container>
                <StyledCanvas id="myChart"></StyledCanvas>
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