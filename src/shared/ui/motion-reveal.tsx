"use client";

import { motion } from "motion/react";
import type { ReactNode, RefObject } from "react";

import { useIntersectionReveal } from "@/shared/hooks/use-intersection-reveal";

type MotionRevealProps = {
  as?: "div" | "section";
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  id?: string;
};

export function MotionReveal({
  as,
  children,
  className,
  delay = 0,
  threshold = 0.2,
  id,
}: MotionRevealProps) {
  if (as === "section") {
    return (
      <MotionRevealSection
        className={className}
        delay={delay}
        threshold={threshold}
        id={id}
      >
        {children}
      </MotionRevealSection>
    );
  }

  return (
    <MotionRevealDiv className={className} delay={delay} threshold={threshold} id={id}>
      {children}
    </MotionRevealDiv>
  );
}

function MotionRevealSection({
  children,
  className,
  delay,
  threshold,
  id,
}: Omit<MotionRevealProps, "as">) {
  const { ref, isVisible } = useIntersectionReveal<HTMLElement>(threshold);

  return (
    <motion.section
      ref={ref as RefObject<HTMLElement>}
      initial={{ opacity: 0, y: 26 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function MotionRevealDiv({
  children,
  className,
  delay,
  threshold,
  id,
}: Omit<MotionRevealProps, "as">) {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>(threshold);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
