import { useEffect, useState, FC } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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

export default UserList;
