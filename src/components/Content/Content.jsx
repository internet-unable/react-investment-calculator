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
            <div id="user-input">
                <ul className="input-group">
                    <li>
                        <Input
                            id={objOfId.initialInvestment}
                            label="Initial investment"
                            type="number"
                            initValue={params.initialInvestment}
                            onValueChange={handleValueChange}
                        />
                    </li>
                    
                    <li>
                        <Input
                            id={objOfId.annualInvestment}
                            label="Annual investment"
                            type="number"
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
                            type="number"
                            initValue={params.expectedReturn}
                            onValueChange={handleValueChange}
                        />
                    </li>

                    <li>
                        <Input
                            id={objOfId.duration}
                            label="Duration"
                            type="number"
                            initValue={params.duration}
                            onValueChange={handleValueChange}
                        />
                    </li>
                </ul>
            </div>

            <Table data={params} />
        </>
    );
}