import { calculateInvestmentResults, formatter } from "../../util/investment.js"

export default function Table({ data }) {
    const calcData = calculateInvestmentResults(data);

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
                {calcData.map(item => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}