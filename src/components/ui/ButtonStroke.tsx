import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  color: white;

  position: relative;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &:hover .button-stroke {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }
`;

const TextSpan = styled.span`
  position: relative;
`;

const ButtonStroke = styled.svg`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); // Center align the SVG
  stroke: yellow;
  stroke-width: 4;
  stroke-dasharray: 650; // Define the total length of the path
  stroke-dashoffset: 650; // Start with the path fully hidden
  transition: stroke-dashoffset 300ms ease-out; // Animation effect

  ${Button}:hover & {
    stroke-dashoffset: 0; // Animate the line on hover
  }
`;

const ButtonUnderline = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setSvgWidth(textRef.current.offsetWidth); // Set SVG width based on text width
    }
  }, [children]); // Update on children change

  return (
    <Button href={href}>
      <TextSpan ref={textRef}>
        {children}
        <ButtonStroke
          width={svgWidth}
          height="2"
          viewBox={`0 0 ${svgWidth} 2`}
          preserveAspectRatio="none"
        >
          <path d={`M0,1 L${svgWidth},1`} className="button-stroke" />
        </ButtonStroke>
      </TextSpan>
    </Button>
  );
};

export default ButtonUnderline;
