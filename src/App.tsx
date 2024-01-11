import './styles.css';

import { FC } from 'react';

import MyFormGenerator from './components/MyFormGenerator/MyFormGenerator';
import { dataLayoutConfig } from './components/PageGenerator/config/pageLayout';
import PageGenerator from './components/PageGenerator/PageGenerator';

type AppProps = {
    tab: string;
};

const App: FC<AppProps> = () => {
    return (
        <main>
            <MyFormGenerator />
            <PageGenerator data={dataLayoutConfig} />
        </main>
    );
};

export default App;
