import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>('http://localhost:3000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const addUser = async () => {
        try {
            await axios.post('http://localhost:3000/api/users', { name, email });
            fetchUsers();
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Management</h2>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
