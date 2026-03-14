declare module "zdog" {
  interface IllustrationOptions {
    element: HTMLCanvasElement | SVGSVGElement;
    zoom?: number;
    dragRotate?: boolean;
    resize?: boolean;
  }

  interface AnchorOptions {
    addTo?: Anchor;
    rotate?: { x?: number; y?: number; z?: number };
    translate?: { x?: number; y?: number; z?: number };
  }

  interface ShapeOptions extends AnchorOptions {
    path?: Array<
      | { move: { x: number; y: number; z: number } }
      | { line: { x: number; y: number; z: number } }
    >;
    stroke?: number | false;
    color?: string;
    fill?: boolean;
    closed?: boolean;
  }

  interface RectOptions extends AnchorOptions {
    width?: number;
    height?: number;
    stroke?: number | false;
    color?: string;
    fill?: boolean;
  }

  interface BoxOptions extends AnchorOptions {
    width?: number;
    height?: number;
    depth?: number;
    stroke?: number | false;
    color?: string;
    fill?: boolean;
    frontFace?: string | boolean;
    rearFace?: string | boolean;
    leftFace?: string | boolean;
    rightFace?: string | boolean;
    topFace?: string | boolean;
    bottomFace?: string | boolean;
  }

  class Anchor {
    rotate: { x: number; y: number; z: number };
    translate: { x: number; y: number; z: number };
    constructor(options?: AnchorOptions);
    addChild(child: Anchor): void;
    remove(): void;
  }

  class Illustration extends Anchor {
    constructor(options: IllustrationOptions);
    updateRenderGraph(): void;
  }

  class Shape extends Anchor {
    constructor(options: ShapeOptions);
    color: string;
    stroke: number | false;
  }

  class Rect extends Anchor {
    constructor(options: RectOptions);
    color: string;
  }

  class Box extends Anchor {
    constructor(options: BoxOptions);
    color: string;
    frontFace: string | boolean;
    rearFace: string | boolean;
    leftFace: string | boolean;
    rightFace: string | boolean;
    topFace: string | boolean;
    bottomFace: string | boolean;
  }

  const TAU: number;
}
