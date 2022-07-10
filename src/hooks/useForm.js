import { useState } from 'react'

export const useForm = () => {
    const [values, setValues] = useState({});
    const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
    return {
        handleInputChange,
        values
    }
}
