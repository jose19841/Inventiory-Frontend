import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangePassword from "../api/useChangePassword";
import { AlertTriangle, CheckCircle, KeyRound, Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
    const { changePassword, loading, error, success } = useChangePassword();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        repeatPassword: ""
    });
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        repeat: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({ ...prevState, [field]: !prevState[field] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(formData.currentPassword, formData.newPassword, formData.repeatPassword);
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate("/dashboard"); 
            }, 2000);
        }
    }, [success, navigate]);

    return (
        <div className="mt-5 pt-3 d-flex align-items-center justify-content-center flex-column" data-aos="fade-left">
            <div className="col-sm-12 col-md-8 col-lg-8 card pt-4 pb-3">
                <h2 className="text-center pt-2"><KeyRound size={24} className="me-2" />Cambiar Contraseña</h2>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="currentPassword" className="form-label">Contraseña actual:</label>
                            <div className="input-group">
                                <input type={showPassword.current ? "text" : "password"} name="currentPassword" id="currentPassword" value={formData.currentPassword} onChange={handleChange} required className="form-control" placeholder="Ingresa tu contraseña actual" />
                                <button type="button" className="btn btn-outline-secondary" onClick={() => togglePasswordVisibility('current')}>
                                    {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            
                            <label htmlFor="newPassword" className="form-label mt-3">Nueva contraseña:</label>
                            <div className="input-group">
                                <input type={showPassword.new ? "text" : "password"} name="newPassword" id="newPassword" value={formData.newPassword} onChange={handleChange} required className="form-control" placeholder="Ingresa una nueva contraseña" />
                                <button type="button" className="btn btn-outline-secondary" onClick={() => togglePasswordVisibility('new')}>
                                    {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="repeatPassword" className="form-label">Repetir nueva contraseña:</label>
                            <div className="input-group">
                                <input type={showPassword.repeat ? "text" : "password"} name="repeatPassword" id="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required className="form-control" placeholder="Repite la nueva contraseña" />
                                <button type="button" className="btn btn-outline-secondary" onClick={() => togglePasswordVisibility('repeat')}>
                                    {showPassword.repeat ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4 pt-3">
                        <button type="submit" className="btn btn-confirm" disabled={loading}>{loading ? "Cambiando..." : "Cambiar Contraseña"}</button>
                    </div>
                </form>

                {error && <div className="alert alert-danger mt-1 text-center mx-2" role="alert"><AlertTriangle/><span className="m-2">{typeof error === "string" ? error : JSON.stringify(error)}</span></div>}
                {success && <div className="alert alert-success mt-0 text-center mx-2" role="alert"> <CheckCircle/> <span>¡Contraseña cambiada exitosamente!</span></div>}
            </div>
        </div>
    );
};

export default ChangePassword;
