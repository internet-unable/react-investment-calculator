import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Table from './components/Table/Table.jsx';

export default function App() {
    return (
        <>
            <Header />

            <Content>
                <Table />
            </Content>
        </>
    )
}