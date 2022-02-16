import { Component } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
Chart.register(BarController, CategoryScale, LinearScale, BarElement);


export default function BarsChart(props) {



    const state = {
        labels: [],
        datasets: [
            {
                label: 'Retorno',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    };

    if (props.data != undefined) {
        const valuesWithContribution = Object
            .values(props.data?.graficoValores.comAporte)
            .map((val, idx) => ({ month: idx, value: val }));

        const valuesWithoutContribution = Object
            .values(props.data?.graficoValores.semAporte)
            .map((val, idx) => ({ month: idx, value: val }));

        state.labels = valuesWithContribution.map(step => '' + step.month);

        state.datasets = [];
        state.datasets.push({
            label: 'Sem Aporte',
            data: valuesWithoutContribution.map(step => step.value),
            backgroundColor: 'black',
        });
        state.datasets.push({
            label: 'Com Aporte',
            data: valuesWithContribution.map(step => step.value),
            backgroundColor: 'tomato',
        });
    }


    return (
        <>
            <Container>
                <Bar
                    width={100}
                    height={50}
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Rendimento',
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                            position: 'bottom'
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                stacked: true,
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                                display: false,
                            }
                        }

                    }}
                />
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