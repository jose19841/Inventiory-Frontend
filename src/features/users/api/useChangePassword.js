import { useState } from 'react';
import axios from 'axios';

const useChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const changePassword = async (currentPassword, newPassword, repeatPassword) => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post(`http://localhost:8080/user/change-password`, {
                currentPassword,
                newPassword,
                repeatPassword
            }, { withCredentials: true }); // incluir cookies

           setSuccess(response.data);
        } catch (err) {
            setError(err.response?.data || "Error al cambiar la contraseña");
        } finally {
            setLoading(false);
        }
    };

    return { changePassword, loading, error, success };
};

export default useChangePassword;
