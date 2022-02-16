import styled from "styled-components";
import Card from "./Card.jsx";

export default function (props) {
    // console.log(props.investmentData);
    return (
        <>
            <Container>
                <Card title="Valor final Bruto" prefix="R$" value={props.data?.valorFinalBruto} />
                <Card title="Aliquota do IR" value={props.data?.aliquotaIR} />
                <Card title="Valor Pago em IR" prefix="R$" value={props.data?.valorPagoIR} />
                <Card
                    title="Valor Final Líquido"
                    prefix="R$"
                    color="green"
                    value={props.data?.valorFinalLiquido} />
                <Card title="Valor Total Investido" prefix="R$" value={props.data?.valorTotalInvestido} />
                <Card title="Ganho Líquido" prefix="R$" color="green" value={props.data?.ganhoLiquido} />
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;

    @media screen and (max-width: 374px) {
        background: red;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(1, 1fr);
        column-gap: 1rem;
        row-gap: 0rem;
    }
`;

