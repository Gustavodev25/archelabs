import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        branch: '',
        message: ''
    });

    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close select on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsSelectOpen(false);
            }
        };

        if (isSelectOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSelectOpen]);

    const isFormValid = formData.name && formData.phone && formData.branch;

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '');

        let formattedValue = rawValue;

        if (rawValue.length > 0) {
            formattedValue = '(' + rawValue.substring(0, 2);
        }
        if (rawValue.length > 2) {
            formattedValue += ') ' + rawValue.substring(2, 7);
        }
        if (rawValue.length > 7) {
            formattedValue += '-' + rawValue.substring(7, 11);
        }

        setFormData({ ...formData, phone: formattedValue });
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSelectOption = (value: string) => {
        setFormData(prev => ({ ...prev, branch: value }));
        setIsSelectOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let messageText = `Olá, meu nome é *${formData.name}*.\n`;
        messageText += `Atuo no ramo: *${formData.branch}*.\n`;
        messageText += `Telefone/Contato: ${formData.phone}.\n\n`;

        if (formData.message) {
            messageText += `*Mensagem:* ${formData.message}`;
        }

        const whatsappUrl = `https://wa.me/5518996239335?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
        setFormData({ name: '', phone: '', branch: '', message: '' });
        setIsSelectOpen(false);
    };

    const branches = [
        "E-commerce / Varejo Online",
        "Saúde e Bem-estar",
        "Advocacia / Jurídico",
        "Tecnologia / Startup",
        "Imobiliária e Construção",
        "Educação e Treinamentos",
        "Serviços Financeiros",
        "Alimentação / Restaurante",
        "Outro"
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="contact-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="contact-modal-content"
                        initial={{ opacity: 0, scale: 0.5, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 100 }}
                        onClick={(e) => e.stopPropagation()}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        {/* Header Row: Title + Close Button */}
                        <div className="contact-modal-top-row">
                            <h2 className="contact-modal-title">Vamos conversar?</h2>
                            <button className="contact-modal-close-inline" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="contact-modal-body-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-input-group">
                                    <label className="contact-label" htmlFor="name">Nome</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="contact-input"
                                        placeholder="Seu nome ou da sua empresa"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />
                                </div>

                                <div className="contact-input-group">
                                    <label className="contact-label" htmlFor="phone">Telefone / WhatsApp</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="contact-input"
                                        placeholder="(00) 00000-0000"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        maxLength={15}
                                    />
                                </div>

                                <div className="contact-input-group" ref={selectRef}>
                                    <label className="contact-label">Ramo de Atuação</label>
                                    <div
                                        className={`contact-custom-select-trigger ${isSelectOpen ? 'active' : ''}`}
                                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                                        style={{ color: formData.branch ? '#111827' : '#9ca3af' }}
                                    >
                                        {formData.branch || "Selecione uma opção..."}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M6 9l6 6l6 -6" />
                                        </svg>
                                    </div>

                                    <AnimatePresence>
                                        {isSelectOpen && (
                                            <motion.div
                                                className="contact-custom-dropdown full-scrollbar"
                                                initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                                exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                {branches.map((branch) => (
                                                    <div
                                                        key={branch}
                                                        className={`contact-custom-option ${formData.branch === branch ? 'selected' : ''}`}
                                                        onClick={() => handleSelectOption(branch)}
                                                    >
                                                        {branch}
                                                        {formData.branch === branch && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                                                        )}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="contact-input-group">
                                    <label className="contact-label" htmlFor="message">Mensagem (Opcional)</label>
                                    <textarea
                                        id="message"
                                        className="contact-input contact-textarea"
                                        placeholder="Como podemos te ajudar?"
                                        value={formData.message}
                                        onChange={(e) => handleChange('message', e.target.value)}
                                    />
                                </div>

                                <div style={{ opacity: isFormValid ? 1 : 0.6, pointerEvents: isFormValid ? 'auto' : 'none', transition: 'opacity 0.2s', width: '100%' }}>
                                    <button type="submit" className="contact-submit-btn" style={{ width: '100%' }}>
                                        Enviar mensagem no WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
