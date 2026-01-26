import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "A ArcheLabs captou exatamente a essência da nossa marca.",
        author: "Mariana Costa",
        role: "CMO de Fintech",
        avatarInitials: "MC"
    },
    {
        id: 2,
        text: "Automação de processos que nos economizou dezenas de horas.",
        author: "Ricardo Alencar",
        role: "COO de Logística",
        avatarInitials: "RA"
    },
    {
        id: 3,
        text: "Tráfego pago com ROI positivo desde a primeira semana.",
        author: "Fernanda Lima",
        role: "CEO de E-commerce",
        avatarInitials: "FL"
    },
    {
        id: 4,
        text: "O dashboard administrativo transformou nossa gestão interna.",
        author: "Carlos Mendes",
        role: "Diretor de Engenharia",
        avatarInitials: "CM"
    },
    {
        id: 5,
        text: "Design impecável e entrega muito antes do prazo combinado.",
        author: "Sofia Rebeca",
        role: "Fundadora de App",
        avatarInitials: "SR"
    },
    {
        id: 6,
        text: "Suporte técnico excepcional e arquitetura escalável.",
        author: "Pedro Santos",
        role: "CTO de Startup",
        avatarInitials: "PS"
    }
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: true });

    // Duplicate list to ensure seamless infinite scroll
    const marqueeList = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="testimonials-section" ref={ref} id="depoimentos">
            <div className="testimonials-header">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="testimonials-title">O Que Dizem Nossos Parceiros</h2>
                    <p className="testimonials-subtitle">
                        Histórias reais de sucesso impulsionadas pela nossa tecnologia.
                    </p>
                </motion.div>
            </div>

            <div className="testimonials-track-container">
                <motion.div
                    className="testimonials-track"
                    animate={{
                        x: ["0%", "-33.33%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeList.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="testimonial-card"
                        >
                            <div className="testimonial-content">
                                <div className="testimonial-quote-icon">"</div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        <span>{testimonial.avatarInitials}</span>
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>{testimonial.author}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
