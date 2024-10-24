import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Employees</h1>
            <EmployeeList />
        </div>
    );
};

export default App;
