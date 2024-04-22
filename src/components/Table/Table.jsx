import { calculateInvestmentResults, formatter } from "../../util/investment.js"

export default function Table({ data }) {
    const calcData = calculateInvestmentResults(data);
    const firstYear = calcData[0];
    const initialInvestment = firstYear.valueEndOfYear - firstYear.interest - firstYear.annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {calcData.map(item => {
                    const totalInterest = item.valueEndOfYear - (item.annualInvestment * item.year) - initialInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}