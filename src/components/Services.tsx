import { useState } from 'react';
import LiquidBackground from './LiquidBackground';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Design Visual",
            description: "Interfaces deslumbrantes que encantam usuários e fortalecem sua marca.",
            details: "Criação de identidades visuais marcantes, UI/UX design focado na conversão e prototipagem de alta fidelidade para garantir que sua visão ganhe vida exatamente como imaginado.",
            idealFor: [
                "Startups buscando identidade forte",
                "Empresas passando por rebranding",
                "Produtos digitais focados em UX/UI"
            ],
            colors: ['#4A90D9', '#F5A623', '#9B59B6'] as [string, string, string], // Blue -> Orange -> Purple
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
            )
        },
        {
            title: "Tráfego Pago",
            description: "Estratégias de ads data-driven para maximizar seu ROI e escalar vendas.",
            details: "Gestão completa de campanhas no Google Ads, Facebook Ads e LinkedIn Ads. Análise de métricas em tempo real e otimização contínua para reduzir o CAC e aumentar o LTV.",
            idealFor: [
                "E-commerces querendo escalar vendas",
                "Negócios locais buscando novos clientes",
                "Infoprodutores em lançamento"
            ],
            colors: ['#00D9A5', '#4A90D9', '#00B894'] as [string, string, string], // Teal -> Blue -> Green
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
            )
        },
        {
            title: "Desenvolvimento",
            description: "Aplicações web e mobile robustas, construídas com a tecnologia mais moderna.",
            details: "Desenvolvimento Full-stack utilizando React, Node.js, e Next.js. Arquitetura escalável, APIs seguras e performance otimizada para suportar o crescimento do seu negócio.",
            idealFor: [
                "Startups SaaS e Marketplaces",
                "Empresas digitalizando processos",
                "Negócios que precisam de escala"
            ],
            colors: ['#6C5CE7', '#A29BFE', '#74B9FF'] as [string, string, string], // Purple -> Lavender -> Sky
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
            )
        },
        {
            title: "Automação",
            description: "Robôs inteligentes e workflows que trabalham por você 24/7.",
            details: "Implementação de RPA (Robotic Process Automation) e chatbots com IA. Automatize tarefas repetitivas, atendimento ao cliente e processos internos para focar no estratégico.",
            idealFor: [
                "Empresas com processos repetitivos",
                "Atendimento com alto volume",
                "Equipes enxutas focadas em eficiência"
            ],
            colors: ['#FF7675', '#FDCB6E', '#E17055'] as [string, string, string], // Coral -> Yellow -> Orange
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-robot"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" /><path d="M10 16h4" /><path d="M9 11v-1" /><path d="M15 11v-1" /><path d="M5 7l-2 2l2 2" /><path d="M19 7l2 2l-2 2" /></svg>
            )
        }
    ];

    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="services-section" id="servicos">
            <div className="services-container">
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="services-title">O Que Fazemos por Você</h2>
                    <p className="services-subtitle">
                        Expertise multidisciplinar para cobrir todas as frentes do seu negócio digital.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            layoutId={`service-card-${index}`}
                            onOpenModal={() => setSelectedId(index)}
                            isSelected={selectedId === index}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <ServiceModal
                        service={services[selectedId]}
                        layoutId={`service-card-${selectedId}`}
                        onClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceModal = ({ service, layoutId, onClose }: { service: any, layoutId: string, onClose: () => void }) => {
    const [isQuoteMode, setIsQuoteMode] = useState(false);
    const [message, setMessage] = useState(`Olá, gostaria de fazer uma cotação sobre ${service.title}`);

    return (
        <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="service-modal-content no-scrollbar"
                layoutId={layoutId}
                layout // Enable layout animation for resizing
                onClick={(e) => e.stopPropagation()}
                style={{ padding: 0 }}
                transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
            >
                <motion.div className="service-modal-visual-header" layoutId={`${layoutId}-header`}>
                    <LiquidBackground
                        className="service-liquid-canvas"
                        colors={{
                            color1: service.colors[0],
                            color2: service.colors[1],
                            color3: service.colors[2]
                        }}
                    />
                    <motion.div className="service-floating-icon" layoutId={`${layoutId}-icon`}>
                        {service.icon}
                    </motion.div>

                    <button className="service-modal-close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                </motion.div>

                <div className="service-modal-body-wrapper">
                    <motion.h3 className="service-modal-title" layoutId={`${layoutId}-title`}>
                        {service.title}
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        style={{ width: '100%' }}
                    >
                        {!isQuoteMode ? (
                            <>
                                <p className="service-modal-desc">{service.description}</p>
                                <div className="service-modal-divider" />
                                <p className="service-modal-details">{service.details}</p>
                                <div className="service-modal-divider" />
                                <div className="service-modal-ideal-for">
                                    <h4 className="service-ideal-title">Para quem faz sentido:</h4>
                                    <ul className="service-ideal-list">
                                        {service.idealFor.map((item: string, i: number) => (
                                            <li key={i} className="service-ideal-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-check-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service-modal-actions">
                                    <button
                                        className="service-modal-quote-btn"
                                        onClick={() => setIsQuoteMode(true)}
                                    >
                                        Fazer uma cotação
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="service-quote-preview" style={{ marginTop: '1rem' }}>
                                <p className="service-quote-label">Mensagem para WhatsApp:</p>
                                <textarea
                                    className="service-quote-textarea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    style={{ height: '150px' }} // Slightly taller for modal
                                />
                                <div className="service-quote-actions">
                                    <button
                                        className="service-back-btn"
                                        onClick={() => setIsQuoteMode(false)}
                                    >
                                        Voltar
                                    </button>
                                    <a
                                        href={`https://wa.me/5518996239335?text=${encodeURIComponent(message)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="service-confirm-btn"
                                    >
                                        Enviar
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ service, index, layoutId, onOpenModal, isSelected }: { service: any, index: number, layoutId: string, onOpenModal: () => void, isSelected: boolean }) => {
    const [isQuoteMode, setIsQuoteMode] = useState(false);
    const [message, setMessage] = useState(`Olá, gostaria de fazer uma cotação sobre ${service.title}`);

    return (
        <motion.div
            className="service-card"
            layoutId={layoutId}
            layout // Enable layout animation
            style={{ opacity: isSelected ? 0 : 1 }} // Hide visually but keep mounted to preserve state/avoid flash
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.06)" }}
            viewport={{ once: true }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                delay: 0.2 + index * 0.1,
                duration: 0.4
            }}
        >
            <motion.div className="service-visual-header" layoutId={`${layoutId}-header`}>
                <LiquidBackground
                    className="service-liquid-canvas"
                    colors={{
                        color1: service.colors[0],
                        color2: service.colors[1],
                        color3: service.colors[2]
                    }}
                />
                <motion.div className="service-floating-icon" layoutId={`${layoutId}-icon`}>
                    {service.icon}
                </motion.div>
            </motion.div>

            <div className="service-content-wrapper">
                {!isQuoteMode ? (
                    <>
                        <motion.h3 className="service-card-title" layoutId={`${layoutId}-title`}>
                            {service.title}
                        </motion.h3>
                        <p className="service-card-desc">{service.description}</p>

                        <div className="service-card-actions">
                            <button
                                className="service-read-more-btn"
                                onClick={onOpenModal}
                            >
                                Ver mais detalhes
                            </button>
                            <button
                                className="service-quote-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsQuoteMode(true);
                                }}
                            >
                                Fazer uma cotação
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="service-quote-preview">
                        <p className="service-quote-label">Mensagem para WhatsApp:</p>
                        <textarea
                            className="service-quote-textarea"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="service-quote-actions">
                            <button
                                className="service-back-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsQuoteMode(false);
                                }}
                            >
                                Voltar
                            </button>
                            <a
                                href={`https://wa.me/5518996239335?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="service-confirm-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Enviar
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Services;
