import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
    {
        question: "Como funciona o processo de desenvolvimento?",
        answer: "Seguimos uma metodologia ágil dividida em 4 etapas: Descoberta (entendimento do negócio), Design/Prototipagem, Desenvolvimento e Lançamento. Mantemos comunicação constante e você tem visibilidade total do progresso através de ferramentas de gestão."
    },
    {
        question: "Vocês atendem startups e empresas já estabelecidas?",
        answer: "Sim! Temos soluções personalizadas para cada estágio. Para startups, focamos em MVPs ágeis e escaláveis. Para empresas maduras, trabalhamos na digitalização de processos complexos e modernização de legado."
    },
    {
        question: "Qual o prazo médio de entrega de um projeto?",
        answer: "O prazo varia conforme a complexidade. Landing pages podem ficar prontas em 1 semana, enquanto plataformas complexas podem levar de 4 a 12 semanas. Definimos um cronograma claro logo na fase de proposta."
    },
    {
        question: "Vocês oferecem suporte após o lançamento?",
        answer: "Absolutamente. Não abandonamos o projeto após a entrega. Oferecemos planos de suporte contínuo, manutenção evolutiva e monitoramento para garantir que sua aplicação continue rodando perfeitamente."
    },
    {
        question: "Como é feito o orçamento?",
        answer: "Analisamos suas necessidades específicas em uma reunião inicial gratuita. Baseado no escopo, tecnologias e prazo, preparamos uma proposta detalhada com investimento fixo ou alocação por horas, conforme o modelo ideal para você."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <h2 className="faq-title">Dúvidas Frequentes</h2>
                    <p className="faq-subtitle">
                        Respostas diretas para as perguntas mais comuns sobre como trabalhamos.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="faq-answer"
                                    >
                                        <div className="faq-answer-inner">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
