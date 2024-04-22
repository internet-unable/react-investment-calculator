import Input from "./../Input/Input.jsx";

export default function Content({ children }) {
    return (
        <>
            <div id="user-input">
                <ul className="input-group">
                    <li>
                        <Input
                            label="Initial investment"
                            type="number"
                            initValue="10000"
                        />
                    </li>
                    
                    <li>
                        <Input
                            label="Annual investment"
                            type="number"
                            initValue="1200"
                        />
                    </li>
                </ul>

                <ul className="input-group">
                    <li>
                        <Input
                            label="Expected return"
                            type="number"
                            initValue="6"
                        />
                    </li>

                    <li>
                        <Input
                            label="Duration"
                            type="number"
                            initValue="10"
                        />
                    </li>
                </ul>
            </div>

            {children}
        </>
    );
}