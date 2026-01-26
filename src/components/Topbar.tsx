import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import './Topbar.css';

const Topbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
    const [activeLink, setActiveLink] = React.useState('#home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    // Initialize state based on current scroll position to avoid flash
    const [isScrolled, setIsScrolled] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return window.scrollY > 50;
        }
        return false;
    });

    React.useEffect(() => {
        const handleScroll = () => {
            // Handle Topbar styling
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Handle Scroll Spy
            const sections = links.map(link => link.href.substring(1)); // remove #
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is well within viewport (e.g. top is near top of screen or covers middle)
                    // Using a simpler logic: checks if the section top is above the middle of viewport 
                    // and section bottom is below the navbar area.
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
                        current = '#' + section;
                    }
                }
            }

            if (current && current !== activeLink) {
                setActiveLink(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeLink]); // Add activeLink to dependency if we use it inside (strictly speaking we don't need it if we used functional state update or just compared with local var, but for safety in this effect structure)

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActiveLink(href);
        setIsMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const topbarHeight = 80; // Approximate offset for fixed header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - topbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const links = [
        { href: '#home', label: 'Início' },
        { href: '#recursos', label: 'Recursos' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#depoimentos', label: 'Depoimentos' },
        { href: '#faq', label: 'FAQ' },
    ];

    return (
        <motion.header
            className="topbar-container"
            initial={false}
            animate={{
                width: isScrolled ? "min(850px, 90%)" : "min(1150px, calc(90% - 3rem))",
                padding: isScrolled ? "0.5rem 0.75rem" : "0.75rem 2.5rem",
                top: isScrolled ? "1rem" : "2rem",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.8)",
                borderColor: isScrolled ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.05)",
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <div className="topbar-logo">
                <motion.img
                    initial={false}
                    src={logo}
                    alt="Logo"
                    animate={{ height: isScrolled ? 24 : 32 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
            </div>

            {/* Desktop Navigation */}
            <motion.nav
                className="topbar-nav"
                initial={false}
                animate={{ gap: isScrolled ? "0.5rem" : "1.5rem" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {links.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        className={`topbar-link ${activeLink === link.href ? 'active' : ''}`}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        initial={false}
                        animate={{
                            fontSize: isScrolled ? "0.85rem" : "0.9rem",
                            padding: isScrolled ? "0.3rem 0.7rem" : "0.4rem 1rem"
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {activeLink === link.href && (
                            <motion.div
                                layoutId="active-pill"
                                className="nav-pill"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '999px',
                                    backgroundColor: 'rgba(0,0,0,0.8)',
                                    zIndex: -1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
                    </motion.a>
                ))}
            </motion.nav>

            {/* Desktop Actions */}
            <div className="topbar-actions">
                <motion.button
                    onClick={onOpenContact}
                    className="btn-contact"
                    initial={false}
                    animate={{
                        fontSize: isScrolled ? "0.85rem" : "0.9rem",
                        padding: isScrolled ? "0.4rem 0.8rem" : "0.6rem 1.2rem"
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    Contato
                </motion.button>
            </div>

            {/* Mobile Toggle Button */}
            <button
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
            >
                <motion.div
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    style={{ width: 24, height: 24, position: 'relative' }}
                >
                    {/* Top Bar */}
                    <motion.span
                        style={{
                            position: 'absolute', height: 2, width: '100%', backgroundColor: 'currentColor', top: '30%', left: 0, borderRadius: 2
                        }}
                        variants={{
                            closed: { rotate: 0, top: '30%' },
                            open: { rotate: 45, top: '50%' }
                        }}
                    />
                    {/* Middle Bar (hides on open) */}
                    {/* Bottom Bar */}
                    <motion.span
                        style={{
                            position: 'absolute', height: 2, width: '100%', backgroundColor: 'currentColor', top: '70%', left: 0, borderRadius: 2
                        }}
                        variants={{
                            closed: { rotate: 0, top: '70%' },
                            open: { rotate: -45, top: '50%' }
                        }}
                    />
                </motion.div>
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-container"
                        initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: 'blur(0px)',
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                staggerChildren: 0.1,
                                delayChildren: 0.1
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                            filter: 'blur(10px)',
                            transition: { duration: 0.2 }
                        }}
                    >
                        {links.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className={`mobile-nav-link ${activeLink === link.href ? 'active' : ''}`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                variants={{
                                    initial: { opacity: 0, x: -10 },
                                    animate: { opacity: 1, x: 0 }
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={onOpenContact}
                            style={{ marginTop: '0.5rem', display: 'inline-block', textAlign: 'center' }}
                            className="btn-contact"
                            variants={{
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 }
                            }}
                        >
                            Contato
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Topbar;
