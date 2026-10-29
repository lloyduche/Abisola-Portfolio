import React, { useState, useEffect } from 'react';

export const ManuscriptLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const targetName = "ABISOLA OLUWATOYIN";
  const [revealedCount, setRevealedCount] = useState(0);
  const [activeLetterPos, setActiveLetterPos] = useState<number | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);

  // Typewritten manuscript draft text
  const manuscriptText = [
    "In the quiet hours before dawn, every writer confronts the blank page. Words are not mere decorative instruments; they are the architecture of conviction and commercial clarity.",
    "Language, when shaped with intention, possesses the power to turn complexity into enduring understanding. A paragraph begins as an impulse and emerges through rigorous revision.",
    "Between the typed line and the editorial margin, the true voice emerges—annotated, struck through, corrected, and brought decisively into light.",
  ];

  // Specific coordinates (paragraph, word, letter) for each letter of ABISOLA OLUWATOYIN
  const letterPositions = [
    { p: 0, w: 2, l: 0, char: 'A' },   // A
    { p: 0, w: 1, l: 0, char: 'B' },   // B
    { p: 0, w: 0, l: 0, char: 'I' },   // I
    { p: 0, w: 4, l: 0, char: 'S' },   // S
    { p: 0, w: 2, l: 1, char: 'O' },   // O
    { p: 1, w: 0, l: 0, char: 'L' },   // L
    { p: 1, w: 0, l: 1, char: 'A' },   // A
    // Space
    { p: 1, w: 8, l: 1, char: 'O' },   // O
    { p: 1, w: 10, l: 4, char: 'L' },  // L
    { p: 1, w: 4, l: 1, char: 'U' },   // U
    { p: 0, w: 3, l: 0, char: 'W' },   // W
    { p: 1, w: 2, l: 2, char: 'A' },   // A
    { p: 1, w: 7, l: 0, char: 'T' },   // T
    { p: 2, w: 4, l: 1, char: 'O' },   // O
    { p: 1, w: 10, l: 9, char: 'Y' },  // Y
    { p: 2, w: 0, l: 6, char: 'I' },   // I
    { p: 2, w: 3, l: 3, char: 'N' },   // N
  ];

  useEffect(() => {
    const totalLetters = targetName.replace(/\s/g, '').length; // 17 letters
    const intervalTime = 110;

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
          }, 800);
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
        isDismissing ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'rgba(15, 15, 17, 0.92)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="relative w-full max-w-3xl">

        {/* Fanned under-sheets (Images 1 & 3 style) */}
        <div
          className="absolute inset-0 rounded shadow-2xl transform rotate-[2.5deg] translate-x-3 translate-y-3 opacity-50 pointer-events-none border border-black/10"
          style={{ background: 'var(--paper-leaf)' }}
        />
        <div
          className="absolute inset-0 rounded shadow-xl transform -rotate-[1.8deg] -translate-x-2 -translate-y-2 opacity-75 pointer-events-none border border-black/10"
          style={{ background: 'var(--paper-leaf)' }}
        />

        {/* Foreground Manuscript Page */}
        <div
          className="relative broadsheet-card p-6 sm:p-12 rounded shadow-2xl border"
          style={{
            background: 'var(--paper-leaf)',
            borderColor: 'var(--ink-rule)',
            color: 'var(--ink)',
          }}
        >
          {/* Header Typewriter Folio */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b text-[11px] font-mono tracking-widest text-ink/60 uppercase">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--red-pencil)]">MANUSCRIPT DRAFT // P. 01</span>
              <span>·</span>
              <span>TYPESCRIPT PROOF</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-hand text-sm capitalize text-[var(--red-pencil)]">
                extracting letters...
              </span>
              <button
                onClick={() => {
                  setIsDismissing(true);
                  setTimeout(onComplete, 250);
                }}
                className="ml-3 px-2 py-0.5 rounded border text-[10px] uppercase font-mono font-bold hover:bg-black/5"
                style={{ borderColor: 'var(--ink-rule)' }}
              >
                Skip [Space]
              </button>
            </div>
          </div>

          {/* Typewritten Manuscript Text with Active Letter Highlights */}
          <div className="space-y-4 font-mono text-xs sm:text-sm text-ink/85 leading-relaxed tracking-wide">
            {manuscriptText.map((paragraph, pIdx) => {
              const words = paragraph.split(' ');
              return (
                <p key={pIdx} className="relative">
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

          {/* Central Author Assembler Plate */}
          <div
            className="mt-8 p-6 rounded border relative overflow-hidden text-center"
            style={{
              background: 'var(--paper)',
              borderColor: 'var(--ink-rule-strong)',
            }}
          >
            <div className="font-hand text-base sm:text-lg mb-1 text-[var(--red-pencil)]">
              ^ [author identified from manuscript]
            </div>

            <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-widest uppercase my-2 min-h-[3rem] flex items-center justify-center text-ink">
              {currentSpelled}
            </div>

            <div className="w-36 h-0.5 mx-auto my-2" style={{ background: 'var(--red-pencil)' }} />

            <div
              className={`font-hand text-lg sm:text-xl transition-opacity duration-300 text-[var(--red-pencil)] ${
                revealedCount >= 17 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ~ Writer · Corporate Communications · Brand Storytelling ~
            </div>
          </div>

          {/* Bottom Manuscript Stamp */}
          <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono text-ink/60">
            <span>MS. REF: AO-2026</span>
            <span className="font-hand text-sm text-[var(--red-pencil)]">
              "words with intent, strategy with soul"
            </span>
            <span className="proof-stamp text-[9px]">FINAL PASS</span>
          </div>
        </div>

      </div>
    </div>
  );
};
