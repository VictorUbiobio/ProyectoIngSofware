import React from 'react';
import ReguForm from '../components/ReguForm';
import DomicilioForm from '../components/DomicilioForm';

const FormRegu = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-8 bg-slate-500">
                <ReguForm />
                <DomicilioForm />
            </div>
        </div>
    );
};

export default FormRegu;