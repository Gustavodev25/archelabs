import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
    words: string[];
    className?: string;
    duration?: number;
}

export const TextScramble: React.FC<TextScrambleProps> = ({
    words,
    className = "",
    duration = 2000
}) => {
    const [text, setText] = useState(words[0]);
    const [, setIndex] = useState(0);

    // Caracteres para o efeito de "embaralhar"
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const intervalRef = useRef<any>(null);

    useEffect(() => {


        const nextWord = () => {
            setIndex((prev) => {
                const nextIdx = (prev + 1) % words.length;
                const newWord = words[nextIdx];


                let iteration = 0;

                clearInterval(intervalRef.current);

                intervalRef.current = setInterval(() => {
                    setText(() => {
                        return newWord
                            .split("")
                            .map((_, i) => {
                                if (i < iteration) {
                                    return newWord[i];
                                }
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join("");
                    });

                    if (iteration >= newWord.length) {
                        clearInterval(intervalRef.current);
                    }

                    iteration += 1 / 3;
                }, 30);

                return nextIdx;
            });
        };

        const cycleInterval = setInterval(nextWord, duration);

        return () => {
            clearInterval(cycleInterval);
            clearInterval(intervalRef.current);
        };
    }, [words, duration]);

    return (
        <span className={`inline-block font-mono ${className}`}>
            {text}
        </span>
    );
};
