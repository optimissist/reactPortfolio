import { forwardRef } from 'react';
import './contact.css';

const ContactRef = forwardRef((props, ref) => {
    const { label } = props;
    return (
        <label >
            {label}
            <input ref={ref}/>
        </label>
    );
});

export default ContactRef;