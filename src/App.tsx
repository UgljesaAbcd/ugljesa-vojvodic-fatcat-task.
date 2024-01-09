import './styles.css';

import { FC } from 'react';

import Button from '@homework-task/components/Button';

type AppProps = {
    tab: string;
};

const App: FC<AppProps> = ({ tab }) => {
    return (
        <main>
            <Button onClick={(e) => {}} className={'test'}>
                test
            </Button>
        </main>
    );
};

export default App;
