import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import NewEmployeeModal from './components/EmployeeModal';
import useEmployees from './hooks/useEmployees';
import { EmployeeDTO } from './types';

const App: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { employees, loading, error, addEmployee, removeEmployee } =
        useEmployees();

    const handleOpenModel = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleCreateEmployee = async (employeeDto: EmployeeDTO) => {
        await addEmployee(employeeDto);
        setModalOpen(false);
    };

    const handleRemoveEmployee = async (id: number) => {
        await removeEmployee(id);
    };

    return (
        <div className="main-container">
            <button className="btnNewEmployee" onClick={handleOpenModel}>
                New Employee
            </button>

            <NewEmployeeModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleCreateEmployee}
            />

            {/* This message can be printout in a popup or modal view */}
            {error && <div>Error: {error}</div>}

            <EmployeeList
                employees={employees}
                loading={loading}
                onRemove={handleRemoveEmployee}
            />
        </div>
    );
};

export default App;
