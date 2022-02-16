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
                <Card title="Valor Final Líquido" prefix="R$" value={props.data?.valorFinalLiquido} />
                <Card title="Valor Total Investido" prefix="R$" value={props.data?.valorTotalInvestido} />
                <Card title="Ganho Líquido" prefix="R$" value={props.data?.ganhoLiquido} />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;
`;

