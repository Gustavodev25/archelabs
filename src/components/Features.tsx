import { motion } from 'framer-motion';
import { BlurFade } from './BlurFade';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Simplicidade Radical",
            description: "Interface intuitiva que coloca o controle nas suas mãos sem complexidade desnecessária.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" /></svg>
            )
        },
        {
            title: "Performance Nativa",
            description: "Construído sobre uma infraestrutura moderna para garantir tempos de carregamento instantâneos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bolt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
            )
        },
        {
            title: "Segurança Blindada",
            description: "Proteção de dados de ponta a ponta com criptografia avançada e conformidade total.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lock-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M10 11v-2a2 2 0 1 1 4 0v2" /></svg>
            )
        },
        {
            title: "Integração Total",
            description: "Conecte-se facilmente com suas ferramentas favoritas através de nossa API robusta.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-api"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13h5" /><path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" /><path d="M20 8v8" /><path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" /></svg>
            )
        },
        {
            title: "Analytics Real-time",
            description: "Acompanhe suas métricas em tempo real com dashboards detalhados e intuitivos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20l14 0" /></svg>
            )
        },
        {
            title: "Suporte Dedicado",
            description: "Nossa equipe de especialistas está sempre pronta para ajudar você a crescer.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-headset"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M18 19c0 1.657 -2.686 3 -6 3" /><path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" /><path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" /></svg>
            )
        }
    ];

    return (
        <section className="features-container" id="recursos">
            <div className="features-content">
                <BlurFade delay={0.2} inView>
                    <div className="features-header">
                        <h2 className="features-title">Recursos Pensados para Você</h2>
                        <p className="features-subtitle">
                            Tudo o que você precisa para acelerar seu negócio, em uma única plataforma unificada.
                        </p>
                    </div>
                </BlurFade>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <BlurFade key={index} delay={0.3 + index * 0.1} inView className="feature-fade-item">
                            <motion.div
                                className="feature-card"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-card-title">{feature.title}</h3>
                                <p className="feature-card-desc">{feature.description}</p>
                            </motion.div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
