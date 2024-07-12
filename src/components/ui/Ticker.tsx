import React, { useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const ParallaxContainer = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
`;

const Scroller = styled(motion.div)`
  font-size: 100px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

const ScrollerSpan = styled.span`
  display: block;
  margin-right: 30px;
  color: black;
`;

export default function Ticker({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <ParallaxContainer>
      <Scroller style={{ x }}>
        <ScrollerSpan>{children} </ScrollerSpan>
        <ScrollerSpan>{children} </ScrollerSpan>
        <ScrollerSpan>{children} </ScrollerSpan>
        <ScrollerSpan>{children} </ScrollerSpan>
      </Scroller>
    </ParallaxContainer>
  );
}
