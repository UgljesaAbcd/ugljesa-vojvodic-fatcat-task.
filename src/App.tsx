import './styles.css';

import { FC } from 'react';

import MyFormGenerator from './components/MyFormGenerator/MyFormGenerator';

type AppProps = {
    tab: string;
};

const App: FC<AppProps> = ({ tab }) => {
    return (
        <main>
            <MyFormGenerator />
        </main>
    );
};

export default App;
