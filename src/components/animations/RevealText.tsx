import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface RevealTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  tag = 'h2',
  delay = 0,
  stagger = 0.03,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    const Tag = tag;
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const MotionTag = motion[tag] as typeof motion.div;

  return (
    <MotionTag
      className={`${className} inline-flex flex-wrap gap-x-[0.28em] perspective-[800px]`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block transform-gpu origin-bottom will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};
