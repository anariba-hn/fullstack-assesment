import React, { useState } from 'react';
import { EmployeeDTO } from '../types';

interface INewEmployeeModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (employee: EmployeeDTO) => void;
}

const NewEmployeeModal: React.FC<INewEmployeeModalProps> = ({
    open,
    onClose,
    onSubmit
}) => {
    const [formData, setFormData] = useState<EmployeeDTO>({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        hireDate: new Date(),
        departmentId: 0
    });

    if (!open) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name == 'hireDate' ? new Date(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>
                    &times;
                </span>
                <h2>New Employee</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Hire Date:
                        <input
                            type="date"
                            name="hireDate"
                            placeholder="Fallow next format Y/M/D"
                            value={formData.hireDate
                                .toISOString()
                                .substring(0, 10)}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Department ID:
                        <input
                            type="number"
                            name="departmentId"
                            value={formData.departmentId}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="btnDetails">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewEmployeeModal;
