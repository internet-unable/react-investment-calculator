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
    const [ userInput, setUserInput ] = useState({
        [objOfId.initialInvestment]: 10000,
        [objOfId.annualInvestment]: 1200,
        [objOfId.expectedReturn]: 6,
        [objOfId.duration]: 10
    });
    const isDurationEnough = userInput.duration >= 1;

    function handleUserInputChange(id, value) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [id]: +value // transform value into number
            }
        });
    }

    return (
        <>
            <section id="user-input">
                <ul className="input-group">
                    <li>
                        <Input
                            id={objOfId.initialInvestment}
                            label="Initial investment"
                            initValue={userInput.initialInvestment}
                            onUserInputChange={handleUserInputChange}
                        />
                    </li>
                    
                    <li>
                        <Input
                            id={objOfId.annualInvestment}
                            label="Annual investment"
                            initValue={userInput.annualInvestment}
                            onUserInputChange={handleUserInputChange}
                        />
                    </li>
                </ul>

                <ul className="input-group">
                    <li>
                        <Input
                            id={objOfId.expectedReturn}
                            label="Expected return"
                            initValue={userInput.expectedReturn}
                            onUserInputChange={handleUserInputChange}
                        />
                    </li>

                    <li>
                        <Input
                            id={objOfId.duration}
                            label="Duration"
                            initValue={userInput.duration}
                            onUserInputChange={handleUserInputChange}
                        />
                    </li>
                </ul>
            </section>

            {!isDurationEnough && <p className="center">Please, enter a duration greater then zero.</p>}
            {isDurationEnough && <Table data={userInput} />}
        </>
    );
}