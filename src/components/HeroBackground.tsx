import './HeroBackground.css';

const HeroBackground = () => {
    return (
        <div className="abacate-bg-container">
            {/* Base Dot Pattern */}
            <div className="bg-pattern-dots"></div>

            {/* Top Diagonal Stripe Accent */}
            <div className="bg-stripes-top"></div>

            {/* Vertical Grid System */}
            <div className="bg-grid-layout">
                <div className="grid-divider"></div>
                <div className="grid-divider"></div>
                <div className="grid-divider"></div>
                <div className="grid-divider"></div>
                <div className="grid-divider"></div>
            </div>

            {/* Soft Green Ambient Glow */}
            <div className="bg-glow-blur"></div>
        </div>
    );
};

export default HeroBackground;
