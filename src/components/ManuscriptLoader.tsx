import React, { useState, useEffect } from 'react';

export const ManuscriptLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const targetName = "ABISOLA OLUWATOYIN";
  const [revealedCount, setRevealedCount] = useState(0);
  const [activeLetterPos, setActiveLetterPos] = useState<number | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);

  const manuscriptText = [
    "In the quiet hours before dawn, every writer confronts the blank page. Words are not mere decorative instruments; they are the architecture of conviction and commercial clarity.",
    "Language, when shaped with intention, possesses the power to turn complexity into enduring understanding. A paragraph begins as an impulse and emerges through rigorous revision.",
    "Between the typed line and the editorial margin, the true voice emerges—annotated, struck through, corrected, and brought decisively into light.",
  ];

  const letterPositions = [
    { p: 0, w: 2, l: 0, char: 'A' },
    { p: 0, w: 1, l: 0, char: 'B' },
    { p: 0, w: 0, l: 0, char: 'I' },
    { p: 0, w: 4, l: 0, char: 'S' },
    { p: 0, w: 2, l: 1, char: 'O' },
    { p: 1, w: 0, l: 0, char: 'L' },
    { p: 1, w: 0, l: 1, char: 'A' },
    // Space
    { p: 1, w: 8, l: 1, char: 'O' },
    { p: 1, w: 10, l: 4, char: 'L' },
    { p: 1, w: 4, l: 1, char: 'U' },
    { p: 0, w: 3, l: 0, char: 'W' },
    { p: 1, w: 2, l: 2, char: 'A' },
    { p: 1, w: 7, l: 0, char: 'T' },
    { p: 2, w: 4, l: 1, char: 'O' },
    { p: 1, w: 10, l: 9, char: 'Y' },
    { p: 2, w: 0, l: 6, char: 'I' },
    { p: 2, w: 3, l: 3, char: 'N' },
  ];

  useEffect(() => {
    const totalLetters = targetName.replace(/\s/g, '').length;
    const intervalTime = 100;

    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < totalLetters) {
          setActiveLetterPos(prev);
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setIsDismissing(true);
            setTimeout(onComplete, 600);
          }, 700);
          return prev;
        }
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  let lettersFound = 0;
  const currentSpelled = targetName.split('').map((char) => {
    if (char === ' ') return ' ';
    if (lettersFound < revealedCount) {
      lettersFound++;
      return char;
    }
    return '_';
  }).join('');

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 select-none transition-all duration-700 ${
        isDismissing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'rgba(10, 10, 10, 0.88)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="relative w-full max-w-2xl bg-[var(--paper)] text-[var(--ink)] p-8 sm:p-14 shadow-2xl border border-[var(--rule)]">

        {/* Header Typewriter Folio */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b text-[11px] font-mono tracking-widest text-[var(--ink-secondary)] uppercase">
          <div>MANUSCRIPT DRAFT // NO. 01</div>
          <button
            onClick={() => {
              setIsDismissing(true);
              setTimeout(onComplete, 200);
            }}
            className="text-[10px] uppercase font-mono tracking-wider hover:text-[var(--red-pencil)] transition-colors"
          >
            [ Skip to Spread ]
          </button>
        </div>

        {/* Typewritten Manuscript Text with Active Letter Highlights */}
        <div className="space-y-4 font-mono text-xs sm:text-sm text-[var(--ink)]/85 leading-relaxed">
          {manuscriptText.map((paragraph, pIdx) => {
            const words = paragraph.split(' ');
            return (
              <p key={pIdx}>
                {words.map((word, wIdx) => {
                  return (
                    <span key={wIdx} className="inline-block mr-1.5">
                      {word.split('').map((char, cIdx) => {
                        const matchIdx = letterPositions.findIndex(
                          (pos) => pos.p === pIdx && pos.w === wIdx && pos.l === cIdx
                        );

                        const isSelected = matchIdx !== -1 && matchIdx < revealedCount;
                        const isCurrentlyActive = matchIdx !== -1 && matchIdx === activeLetterPos;

                        return (
                          <span
                            key={cIdx}
                            className={`relative transition-all duration-150 ${
                              isCurrentlyActive
                                ? 'font-bold scale-125 inline-block text-white'
                                : isSelected
                                ? 'font-bold text-[var(--red-pencil)]'
                                : ''
                            }`}
                            style={{
                              background: isCurrentlyActive ? 'var(--red-pencil)' : 'transparent',
                              borderRadius: '2px',
                              padding: isCurrentlyActive ? '0 2px' : '0',
                            }}
                          >
                            {char}
                            {isSelected && !isCurrentlyActive && (
                              <span
                                className="absolute -inset-1 border border-dashed rounded-full pointer-events-none opacity-80"
                                style={{ borderColor: 'var(--red-pencil)' }}
                              />
                            )}
                          </span>
                        );
                      })}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        {/* Central Author Assembler (No box — clean editorial title) */}
        <div className="mt-10 pt-8 border-t text-center">
          <div className="font-hand text-base mb-1 text-[var(--red-pencil)]">
            ^ [extracting author signature]
          </div>

          <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-widest uppercase my-2 min-h-[3rem] flex items-center justify-center text-[var(--ink)]">
            {currentSpelled}
          </div>

          <div
            className={`font-serif italic text-base sm:text-lg transition-opacity duration-300 text-[var(--ink-secondary)] mt-1 ${
              revealedCount >= 17 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Writer &bull; Corporate Communications Specialist &bull; Brand Storyteller
          </div>
        </div>

      </div>
    </div>
  );
};
