export default function DataCollectionPanel() {
    return (
        <div id="user-input">
            <ul className="input-group">
                <li>
                    <label>Initial investment</label>
                    <input type="number" />
                </li>

                <li>
                    <label>Annual investment</label>
                    <input type="number" />
                </li>

                <li>
                    <label>Expected return</label>
                    <input type="number" />
                </li>

                <li>
                    <label>Duration</label>
                    <input type="number" />
                </li>
            </ul>
        </div>
    );
}