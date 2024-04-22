import { useState } from "react";
import Input from "./../Input/Input.jsx";
import Table from "./../Table/Table.jsx";

const objOfId = {
    initialInvestment: 'initialInvestment',
    annualInvestment: 'annualInvestment',
    expectedReturn: 'expectedReturn',
    duration: 'duration'
}

export default function Content() {
    const [ params, setParams ] = useState({
        [objOfId.initialInvestment]: 10000,
        [objOfId.annualInvestment]: 1200,
        [objOfId.expectedReturn]: 6,
        [objOfId.duration]: 10
    });

    function handleValueChange(id, value) {
        setParams(params => ({
            ...params,
            [id]: +value
        }));
    }

    return (
        <>
            <section id="user-input">
                <ul className="input-group">
                    <li>
                        <Input
                            id={objOfId.initialInvestment}
                            label="Initial investment"
                            initValue={params.initialInvestment}
                            onValueChange={handleValueChange}
                        />
                    </li>
                    
                    <li>
                        <Input
                            id={objOfId.annualInvestment}
                            label="Annual investment"
                            initValue={params.annualInvestment}
                            onValueChange={handleValueChange}
                        />
                    </li>
                </ul>

                <ul className="input-group">
                    <li>
                        <Input
                            id={objOfId.expectedReturn}
                            label="Expected return"
                            initValue={params.expectedReturn}
                            onValueChange={handleValueChange}
                        />
                    </li>

                    <li>
                        <Input
                            id={objOfId.duration}
                            label="Duration"
                            initValue={params.duration}
                            onValueChange={handleValueChange}
                        />
                    </li>
                </ul>
            </section>

            <Table data={params} />
        </>
    );
}