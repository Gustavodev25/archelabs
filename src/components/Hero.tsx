import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BlurFade } from './BlurFade';
import NumberFlow from '@number-flow/react';
import './Hero.css';


const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(2000);
    }, []);

    return (
        <section className="hero-container" id="home">
            {/* HeroBackground moved to App.tsx */}
            <div className="hero-content-layer">
                <BlurFade delay={0.1} inView>
                    <div className="hero-pill">
                        <div className="avatar-group">
                            {[
                                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                            ].map((src, i) => (
                                <motion.img
                                    key={i}
                                    src={src}
                                    alt={`User ${i + 1}`}
                                    className="avatar"
                                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                                />
                            ))}
                        </div>
                        <span className="pill-text" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            Mais de
                            <span className="pill-highlight" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <NumberFlow
                                    value={count}
                                    locales="pt-BR"
                                />
                                +
                            </span>
                            startups confiam
                        </span>
                    </div>
                </BlurFade>

                <BlurFade delay={0.25} inView>
                    <h1 className="hero-title" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        Construindo o futuro digital com elegância e performance.
                    </h1>
                </BlurFade>

                <BlurFade delay={0.5} inView>
                    <p className="hero-description">
                        Uma abordagem minimalista para experiências web complexas. Focamos em cada detalhe para entregar produtos que encantam.
                    </p>
                </BlurFade>

                <BlurFade delay={0.75} inView>
                    <div className="hero-actions">
                        <button onClick={onOpenContact} className="hero-btn hero-btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            Entrar em contato
                        </button>
                        <a
                            href="#servicos"
                            className="hero-btn hero-btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('servicos');
                                if (element) {
                                    const topbarHeight = 80;
                                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                    const offsetPosition = elementPosition - topbarHeight;
                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                            }}
                        >
                            Saber mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default Hero;
