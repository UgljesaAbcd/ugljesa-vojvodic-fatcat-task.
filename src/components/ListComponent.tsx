import { useEffect, useState, FC } from 'react';

import { getByPathAndParams } from '@homework-task/services/BaseApi';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const fetchUsers = async (): Promise<User[]> => {
    // this is how I like to make http request,
    // usualy path variables is used to insert ids and other dynamic values in path itself,
    // and params is used to make query from object.
    // you can choose between these two options,
    // just comment current path and params, and uncomment first two, path and pathVariables.
    const response = await getByPathAndParams({
        // path: '/users?_limit=:limit',
        // pathVariables: {
        //     limit: 5,
        // },
        path: '/users',
        params: {
            _limit: 5,
        },
    });
    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }
    const data = response.data as User[];
    return data;
};

const ListComponent: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                alert(error);
            }
        };

        void fetchData();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>ID:</strong> {user.id} <br />
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Username:</strong> {user.username} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Phone:</strong> {user.phone} <br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;
