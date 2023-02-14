import { forwardRef, useState } from 'react';
import ContactRef from './contactRef.js';
import './contact.css';

const FormField = forwardRef(function FormField({ label }, ref) {
    const [value, setValue] = useState('');
    return (
        <>
            <ContactRef
                ref={ref}
                label={label}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </>
    );
});

export default FormField;