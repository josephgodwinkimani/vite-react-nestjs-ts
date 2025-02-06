import React from 'react';
import UserManagement from './UserManagement';
import TodoManagement from './TodoManagement';

const App: React.FC = () => (
    <div className="App">
        <h1>Welcome to the App</h1>
        <UserManagement />
        <TodoManagement />
    </div>
);

export default App;
