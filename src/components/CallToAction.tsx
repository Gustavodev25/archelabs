import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = ({ onOpenContact }: { onOpenContact: () => void }) => {
    return (
        <section className="cta-section">
            <motion.div
                className="cta-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="cta-content">
                    <h2 className="cta-title">
                        Pronto para o próximo nível?
                    </h2>
                    <p className="cta-subtitle">
                        Transforme suas ideias em resultados digitais de alto impacto.
                        Vamos construir o futuro do seu negócio juntos.
                    </p>

                    <div
                        className="cta-button-wrapper"
                    >
                        <button onClick={onOpenContact} className="cta-button">
                            Agendar Consultoria Gratuita
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CallToAction;
