import React, { useState, useEffect } from 'react';

export const ManuscriptLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const targetName = "ABISOLA OLUWATOYIN";
  const [revealedCount, setRevealedCount] = useState(0);
  const [activeLetterPos, setActiveLetterPos] = useState<number | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);

  // Typewritten manuscript paragraphs from which letters will be extracted
  const manuscriptText = [
    "In the quiet hours before dawn, every writer confronts the first white sheet. Words are not mere decorative instruments; they are the architecture of human thought and conviction.",
    "Language, when shaped with intention, possesses the extraordinary power to turn commercial complexity into enduring clarity. A paragraph begins with an impulse and transforms through rigorous revision.",
    "Between the typed line and the editorial margin, the true voice emerges—annotated, struck through, corrected, and brought decisively into light.",
  ];

  // Map letters of ABISOLA OLUWATOYIN to specific positions in the text
  // Each entry points to paragraph index, word index, and letter index
  const letterPositions = [
    { p: 0, w: 2, l: 0, char: 'A' },   // "hours" -> or "dawn"? In "hours", char 'h', wait: let's pick exact letters:
    { p: 0, w: 1, l: 0, char: 'B' },   // "before" -> 'b'
    { p: 0, w: 0, l: 0, char: 'I' },   // "In" -> 'I'
    { p: 0, w: 4, l: 0, char: 'S' },   // "sheet" -> 's'
    { p: 0, w: 2, l: 1, char: 'O' },   // "hours" -> 'o'
    { p: 1, w: 0, l: 0, char: 'L' },   // "Language" -> 'L'
    { p: 1, w: 0, l: 1, char: 'A' },   // "Language" -> 'a'
    // Space
    { p: 1, w: 12, l: 0, char: 'O' },  // "power" or "to"
    { p: 1, w: 15, l: 1, char: 'L' },  // "complexity" -> 'l'
    { p: 1, w: 5, l: 0, char: 'U' },   // "thought" -> 'u'
    { p: 0, w: 7, l: 0, char: 'W' },   // "writer" -> 'w'
    { p: 1, w: 3, l: 0, char: 'A' },   // "architecture" -> 'a'
    { p: 1, w: 6, l: 0, char: 'T' },   // "turn" -> 't'
    { p: 2, w: 4, l: 1, char: 'O' },   // "voice" -> 'o'
    { p: 1, w: 15, l: 9, char: 'Y' },  // "complexity" -> 'y'
    { p: 2, w: 1, l: 0, char: 'I' },   // "Between" or "in"
    { p: 2, w: 13, l: 0, char: 'N' },  // "noted" or "and"
  ];

  useEffect(() => {
    // Sequentially highlight and extract letters to spell ABISOLA OLUWATOYIN
    const totalLetters = targetName.replace(/\s/g, '').length; // 17 letters
    const intervalTime = 110; // snappy, cinematic pace

    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < totalLetters) {
          setActiveLetterPos(prev);
          return prev + 1;
        } else {
          clearInterval(timer);
          // Pause briefly to display complete typed name with subtitle, then dismiss
          setTimeout(() => {
            setIsDismissing(true);
            setTimeout(onComplete, 700);
          }, 800);
          return prev;
        }
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Build the currently spelled name string with spaces preserved
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
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'rgba(20, 10, 24, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Background Layered Manuscript Sheets (like Image 1 & Image 3) */}
      <div className="relative w-full max-w-3xl">

        {/* Back Under-Sheet rotated (peeking manuscript sheet) */}
        <div
          className="absolute inset-0 rounded shadow-2xl transform rotate-[2deg] translate-x-3 translate-y-3 opacity-60 pointer-events-none border border-black/10"
          style={{ background: 'var(--paper-leaf)' }}
        />

        {/* Second Under-Sheet rotated in opposite direction */}
        <div
          className="absolute inset-0 rounded shadow-xl transform -rotate-[1.5deg] -translate-x-2 -translate-y-2 opacity-80 pointer-events-none border border-black/10"
          style={{ background: 'var(--paper-leaf)' }}
        />

        {/* Foreground Main Typed Manuscript Sheet */}
        <div
          className="relative paper-sheet p-6 sm:p-12 rounded shadow-2xl border"
          style={{
            background: 'var(--paper-leaf)',
            borderColor: 'var(--ink-rule)',
            color: 'var(--ink)',
          }}
        >
          {/* Header Typewriter Folio */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b text-[11px] font-mono tracking-widest text-ink/60 uppercase">
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>MANUSCRIPT DRAFT // P. 01</span>
              <span>·</span>
              <span>TYPEWRITER TYPESCRIPT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-hand text-sm capitalize" style={{ color: 'var(--red-pencil)' }}>
                extracting author identity...
              </span>
              <button
                onClick={() => {
                  setIsDismissing(true);
                  setTimeout(onComplete, 300);
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
                          // Check if this letter is currently selected in the sequence
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
                              {/* Red Pencil Circle around extracted letter */}
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
            {/* Top Red-Pen Margin Tag */}
            <div className="font-hand text-base sm:text-lg mb-1" style={{ color: 'var(--red-pencil)' }}>
              ^ [author identified from manuscript text]
            </div>

            {/* Assembled Spelled Name */}
            <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-widest uppercase my-2 min-h-[3rem] flex items-center justify-center" style={{ color: 'var(--ink)' }}>
              {currentSpelled}
            </div>

            {/* Red Underline Indicator */}
            <div className="w-48 h-0.5 mx-auto my-2" style={{ background: 'var(--red-pencil)' }} />

            {/* Subtitle in Author Script */}
            <div
              className={`font-hand text-lg sm:text-xl transition-opacity duration-300 ${
                revealedCount >= 17 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: 'var(--red-pencil)' }}
            >
              ~ Writer · Corporate Communications Specialist · Brand Storyteller ~
            </div>
          </div>

          {/* Bottom Manuscript Stamp & Proof Number */}
          <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono text-ink/60">
            <span>MS. REF: AO-2026</span>
            <span className="font-hand text-sm text-[var(--red-pencil)]">
              "words with intent, strategy with soul"
            </span>
            <span className="proof-stamp text-[9px]">READY FOR PROOF</span>
          </div>
        </div>

      </div>
    </div>
  );
};
