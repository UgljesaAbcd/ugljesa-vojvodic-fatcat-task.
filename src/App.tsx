import './styles.css';

import { FC } from 'react';

// import ListComponent from './components/ListComponent';
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
            {/* <ListComponent /> */}
            <PageGenerator data={dataLayoutConfig} />
        </main>
    );
};

export default App;
