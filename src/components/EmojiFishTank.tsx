'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

export type EmojiFishTankVariant = 'default' | 'embed';

type FishBehavior = 'wander' | 'chase' | 'orbit';

type FishConfig = {
  emoji: string;
  defaultFacing: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  depth: number;
  speed: number;
  agility: number;
  direction: 'left' | 'right';
  behavior: FishBehavior;
  targetIndex?: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  bobDistance: number;
  bobDuration: number;
  wiggleDuration: number;
  wiggleAngle: number;
};

type BubbleConfig = {
  left: number;
  delay: number;
  scale: number;
};

type DecorKind = 'plant' | 'shell' | 'rock';

type DecorConfig = {
  emoji: string;
  kind: DecorKind;
  left: number;
  scale: number;
  delay: number;
  depth: number;
};

type CSSVarStyle = CSSProperties & Record<`--${string}`, string>;

type EmojiFishTankProps = {
  variant?: EmojiFishTankVariant;
  className?: string;
  size?: 'full' | 'compact';
};

const FISH_SCHOOL: FishConfig[] = [
  {
    emoji: '🐠',
    defaultFacing: 'left',
    size: 'md',
    depth: 26,
    speed: 60,
    agility: 0.35,
    direction: 'right',
    behavior: 'wander',
    bobDistance: 12,
    bobDuration: 6.4,
    wiggleDuration: 3.2,
    wiggleAngle: 10
  },
  {
    emoji: '🐟',
    defaultFacing: 'left',
    size: 'sm',
    depth: 38,
    speed: 48,
    agility: 0.45,
    direction: 'left',
    behavior: 'chase',
    targetIndex: 0,
    bobDistance: 9,
    bobDuration: 5.6,
    wiggleDuration: 2.8,
    wiggleAngle: 12
  },
  {
    emoji: '🐡',
    defaultFacing: 'left',
    size: 'lg',
    depth: 52,
    speed: 42,
    agility: 0.3,
    direction: 'right',
    behavior: 'wander',
    bobDistance: 18,
    bobDuration: 8.4,
    wiggleDuration: 4.6,
    wiggleAngle: 6
  },
  {
    emoji: '🐙',
    defaultFacing: 'right',
    size: 'md',
    depth: 66,
    speed: 40,
    agility: 0.28,
    direction: 'left',
    behavior: 'orbit',
    orbitRadius: 120,
    orbitSpeed: 0.35,
    bobDistance: 22,
    bobDuration: 9,
    wiggleDuration: 5.6,
    wiggleAngle: 8
  },
  {
    emoji: '🪼',
    defaultFacing: 'right',
    size: 'md',
    depth: 58,
    speed: 34,
    agility: 0.25,
    direction: 'right',
    behavior: 'orbit',
    orbitRadius: 90,
    orbitSpeed: 0.28,
    bobDistance: 26,
    bobDuration: 10.6,
    wiggleDuration: 6.2,
    wiggleAngle: 6
  },
  {
    emoji: '🐳',
    defaultFacing: 'left',
    size: 'lg',
    depth: 24,
    speed: 52,
    agility: 0.22,
    direction: 'left',
    behavior: 'wander',
    bobDistance: 10,
    bobDuration: 8.5,
    wiggleDuration: 4.1,
    wiggleAngle: 4
  },
  {
    emoji: '🐬',
    defaultFacing: 'left',
    size: 'md',
    depth: 36,
    speed: 70,
    agility: 0.5,
    direction: 'right',
    behavior: 'chase',
    targetIndex: 5,
    bobDistance: 11,
    bobDuration: 5.8,
    wiggleDuration: 3,
    wiggleAngle: 9
  },
  {
    emoji: '🦑',
    defaultFacing: 'right',
    size: 'sm',
    depth: 74,
    speed: 46,
    agility: 0.4,
    direction: 'left',
    behavior: 'chase',
    targetIndex: 3,
    bobDistance: 17,
    bobDuration: 7.6,
    wiggleDuration: 4.8,
    wiggleAngle: 14
  },
  {
    emoji: '🐋',
    defaultFacing: 'left',
    size: 'lg',
    depth: 30,
    speed: 45,
    agility: 0.24,
    direction: 'left',
    behavior: 'orbit',
    orbitRadius: 160,
    orbitSpeed: 0.22,
    bobDistance: 12,
    bobDuration: 9.4,
    wiggleDuration: 4.4,
    wiggleAngle: 5
  }
];

const BUBBLES: BubbleConfig[] = [
  { left: 8, delay: 0, scale: 0.75 },
  { left: 16, delay: 4, scale: 1 },
  { left: 24, delay: 7, scale: 0.85 },
  { left: 36, delay: 1, scale: 0.9 },
  { left: 44, delay: 5, scale: 0.7 },
  { left: 56, delay: 2, scale: 1.1 },
  { left: 64, delay: 8, scale: 0.8 },
  { left: 72, delay: 3, scale: 0.95 },
  { left: 84, delay: 6, scale: 0.75 },
  { left: 92, delay: 9, scale: 0.9 }
];

type DecorSeed = {
  kind: DecorKind;
  emoji: string;
  seed: number;
};

const DECOR_BLUEPRINTS: DecorSeed[] = [
  { kind: 'plant', emoji: '🌿', seed: 11 },
  { kind: 'shell', emoji: '🐚', seed: 23 },
  { kind: 'rock', emoji: '🪨', seed: 31 },
  { kind: 'plant', emoji: '🌿', seed: 47 },
  { kind: 'rock', emoji: '🪨', seed: 59 },
  { kind: 'shell', emoji: '🐚', seed: 73 },
  { kind: 'plant', emoji: '🌿', seed: 89 },
  { kind: 'shell', emoji: '🐚', seed: 97 },
  { kind: 'rock', emoji: '🪨', seed: 109 }
];

function seededNoise(seed: number, channel: number) {
  const raw = Math.sin(seed * 9301 + channel * 49297 + 233280) * 43758.5453;
  return raw - Math.floor(raw);
}

function buildDecorItems(): DecorConfig[] {
  return DECOR_BLUEPRINTS.map((blueprint, index) => {
    const baseSeed = blueprint.seed + index * 17;
    const left = 6 + seededNoise(baseSeed, 1) * 88;
    const depthRange: [number, number] =
      blueprint.kind === 'plant' ? [18, 28] : blueprint.kind === 'shell' ? [8, 14] : [12, 20];
    const scaleRange: [number, number] =
      blueprint.kind === 'plant' ? [1.1, 1.45] : blueprint.kind === 'shell' ? [0.82, 1.08] : [0.95, 1.25];
    const scale = scaleRange[0] + seededNoise(baseSeed, 2) * (scaleRange[1] - scaleRange[0]);
    const depth = Math.round(depthRange[0] + seededNoise(baseSeed, 3) * (depthRange[1] - depthRange[0]));
    const delay = blueprint.kind === 'plant' ? seededNoise(baseSeed, 4) * 1.6 : 0;

    return {
      kind: blueprint.kind,
      emoji: blueprint.emoji,
      left,
      scale,
      depth,
      delay
    };
  }).sort((a, b) => a.left - b.left);
}

const DECOR_ITEMS = buildDecorItems();

export function EmojiFishTank({ variant = 'default', className, size = 'full' }: EmojiFishTankProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number>();
  const fishLayerRef = useRef<HTMLDivElement | null>(null);
  const fishRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      target.style.setProperty('--wave-offset', '0px');
      target.style.setProperty('--light-shift', '0px');
      return undefined;
    }

    const start = performance.now();

    const loop = (now: number) => {
      const elapsed = now - start;
      const wave = Math.sin(elapsed / 1400) * 6;
      const shimmer = Math.sin(elapsed / 2200) * 8;
      target.style.setProperty('--wave-offset', `${wave}px`);
      target.style.setProperty('--light-shift', `${shimmer}px`);
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const layer = fishLayerRef.current;
    if (!layer) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    type FishState = {
      config: FishConfig;
      x: number;
      y: number;
      vx: number;
      vy: number;
      targetX: number;
      targetY: number;
      orbitAngle: number;
      changeTimer: number;
      lastFacing: number;
    };

    let width = layer.clientWidth;
    let height = layer.clientHeight;

    const states: FishState[] = FISH_SCHOOL.map((config, index) => {
      const depthRatio = Math.min(Math.max(config.depth / 100, 0.12), 0.88);
      const startX = width * (0.15 + 0.7 * (index / FISH_SCHOOL.length));
      const startY = height * depthRatio + (Math.random() - 0.5) * 30;
      const initialFacing = config.direction === 'right' ? 1 : -1;

      return {
        config,
        x: startX,
        y: startY,
        vx: initialFacing * config.speed * 0.4,
        vy: 0,
        targetX: width * (0.2 + Math.random() * 0.6),
        targetY: height * depthRatio,
        orbitAngle: Math.random() * Math.PI * 2,
        changeTimer: Math.random() * 3,
        lastFacing: initialFacing
      };
    });

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver((entries) => {
          const entry = entries[0];
          width = entry.contentRect.width;
          height = entry.contentRect.height;
        })
      : null;
    resizeObserver?.observe(layer);

    const applyTransform = (state: FishState, index: number) => {
      const element = fishRefs.current[index];
      if (!element) {
        return;
      }

      const facingMultiplier = state.config.defaultFacing === 'left' ? -1 : 1;
      const orientation = state.lastFacing * facingMultiplier;
      element.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scaleX(${orientation})`;
      element.style.zIndex = String(200 - Math.round(state.config.depth));
    };

    states.forEach((state, index) => applyTransform(state, index));

    if (prefersReducedMotion) {
      return () => {
        resizeObserver?.disconnect();
      };
    }

    let last = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.12);
      last = now;

      states.forEach((state, index) => {
        const { config } = state;
        state.changeTimer += delta;

        let desiredX = state.targetX;
        let desiredY = state.targetY;

        if (config.behavior === 'chase' && typeof config.targetIndex === 'number') {
          const target = states[config.targetIndex % states.length];
          desiredX = target.x + Math.cos(now / 550 + index) * 32;
          desiredY = target.y + Math.sin(now / 600 + index) * 18;
        } else if (config.behavior === 'orbit') {
          const orbitSpeed = config.orbitSpeed ?? 0.32;
          const orbitRadius = config.orbitRadius ?? 110;
          state.orbitAngle += orbitSpeed * delta;
          const anchorX = width * 0.5;
          const anchorY = height * (config.depth / 100);
          desiredX = anchorX + Math.cos(state.orbitAngle + index * 0.35) * orbitRadius;
          desiredY = anchorY + Math.sin(state.orbitAngle + index * 0.35) * orbitRadius * 0.45;
        } else if (state.changeTimer > 3.6) {
          const depthRatio = Math.min(Math.max(config.depth / 100, 0.14), 0.86);
          state.targetX = width * (0.1 + Math.random() * 0.8);
          state.targetY = height * depthRatio + (Math.random() - 0.5) * 40;
          state.changeTimer = 0;
          desiredX = state.targetX;
          desiredY = state.targetY;
        }

        const noiseStrength = config.speed * 0.08;
        const steerX = (desiredX - state.x) * config.agility + (Math.random() - 0.5) * noiseStrength;
        const steerY = (desiredY - state.y) * config.agility + (Math.random() - 0.5) * noiseStrength * 0.6;

        state.vx += steerX * config.agility * delta;
        state.vy += steerY * config.agility * delta;

        const speed = Math.hypot(state.vx, state.vy);
        const maxSpeed = config.speed;
        if (speed > maxSpeed) {
          const scale = maxSpeed / speed;
          state.vx *= scale;
          state.vy *= scale;
        }

        state.x += state.vx * delta;
        state.y += state.vy * delta;

        const horizontalMargin = width * 0.08;
        const topLimit = height * 0.08;
        const bottomLimit = height * 0.92;

        if (state.x < horizontalMargin) {
          state.x = horizontalMargin;
          state.vx = Math.abs(state.vx);
        } else if (state.x > width - horizontalMargin) {
          state.x = width - horizontalMargin;
          state.vx = -Math.abs(state.vx);
        }

        if (state.y < topLimit) {
          state.y = topLimit;
          state.vy = Math.abs(state.vy);
        } else if (state.y > bottomLimit) {
          state.y = bottomLimit;
          state.vy = -Math.abs(state.vy);
        }

        if (Math.abs(state.vx) > 0.6) {
          state.lastFacing = state.vx > 0 ? 1 : -1;
        }

        applyTransform(state, index);
      });

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
    };
  }, []);

  const classes = ['emoji-fish-tank'];
  if (variant === 'embed') {
    classes.push('emoji-fish-tank--embed');
    if (size === 'compact') {
      classes.push('emoji-fish-tank--embed-compact');
    }
  }
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')} role="img" aria-label="Animated emoji aquarium">
      <svg className="emoji-fish-tank__filters" aria-hidden="true">
        <filter id="emoji-fish-water" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="42">
            <animate attributeName="baseFrequency" values="0.8;0.6;0.7;0.8" dur="14s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="16" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="emoji-fish-tank__glass" ref={containerRef}>
        <div className="emoji-fish-tank__surface" />
        <div className="emoji-fish-tank__water">
          <div className="emoji-fish-tank__shader" />
          <div className="emoji-fish-tank__bubble-layer" aria-hidden="true">
            {BUBBLES.map((bubble, index) => {
              const style: CSSVarStyle = {
                '--bubble-left': `${bubble.left}%`,
                '--bubble-delay': `${bubble.delay}s`,
                '--bubble-scale': `${bubble.scale}`
              };
              return <span key={index} className="emoji-fish-tank__bubble" style={style} />;
            })}
          </div>
          <div className="emoji-fish-tank__fish-layer" aria-hidden="true" ref={fishLayerRef}>
            {FISH_SCHOOL.map((fish, index) => {
              const style: CSSVarStyle = {
                '--bob-distance': `${fish.bobDistance}px`,
                '--bob-duration': `${fish.bobDuration}s`,
                '--bob-delay': `${(index * 0.37).toFixed(2)}s`,
                '--wiggle-duration': `${fish.wiggleDuration}s`,
                '--wiggle-angle': `${fish.wiggleAngle}deg`,
                '--wiggle-delay': `${(index * 0.49).toFixed(2)}s`
              };
              return (
                <span
                  key={`${fish.emoji}-${index}`}
                  className={`emoji-fish-tank__fish emoji-fish-tank__fish--${fish.size}`}
                  style={style}
                  ref={(node) => {
                    fishRefs.current[index] = node;
                  }}
                >
                  <span className="emoji-fish-tank__fish-motion">
                    <span className="emoji-fish-tank__fish-body">{fish.emoji}</span>
                  </span>
                </span>
              );
            })}
          </div>
          <div className="emoji-fish-tank__decor" aria-hidden="true">
            <span className="emoji-fish-tank__sand" />
            <div className="emoji-fish-tank__decor-layer">
              {DECOR_ITEMS.map((item, index) => {
                const baseStyle: CSSVarStyle = {
                  '--decor-left': `${item.left}%`,
                  '--decor-scale': `${item.scale}`,
                  '--decor-depth': `${item.depth}`
                };
                if (item.kind === 'plant') {
                  baseStyle['--plant-delay'] = `${item.delay}s`;
                }
                return (
                  <span
                    key={`${item.kind}-${index}`}
                    className={`emoji-fish-tank__decor-item emoji-fish-tank__decor-item--${item.kind}`}
                    style={baseStyle}
                  >
                    {item.emoji}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
