import './styles.css';

import { FC } from 'react';

import MyFormGenerator from './components/MyFormGenerator/MyFormGenerator';
import PageGenerator from './components/PageGenerator/PageGenerator';
import { dataLayoutConfig } from './components/PageGenerator/config/pageLayout';

type AppProps = {
    tab: string;
};

const App: FC<AppProps> = ({ tab }) => {
    return (
        <main>
            <MyFormGenerator />
            <PageGenerator data={dataLayoutConfig} />
        </main>
    );
};

export default App;
