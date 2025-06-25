'use client';

import { useState } from 'react';
import styles from './ChromaticShapesDemo.module.css';

interface ChromaticShapesDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticShapesDemo({
  initialRedOffset = 3,
  initialBlueOffset = -3,
  initialIntensity = 1,
}: ChromaticShapesDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);

  const presets = [
    { name: 'Classic', red: 3, blue: -3, intensity: 1 },
    { name: 'Heavy', red: 6, blue: -6, intensity: 1.2 },
    { name: 'Subtle', red: 1, blue: -1, intensity: 0.7 },
    { name: 'Asymmetric', red: 4, blue: -2, intensity: 0.9 },
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setIntensity(preset.intensity);
  };

  const reset = () => {
    setRedOffset(initialRedOffset);
    setBlueOffset(initialBlueOffset);
    setIntensity(initialIntensity);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.sliders}>
          <div className={styles.slider}>
            <label>Red Offset: {redOffset}px</label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={redOffset}
              onChange={(e) => setRedOffset(Number(e.target.value))}
              className={styles.redSlider}
            />
          </div>
          <div className={styles.slider}>
            <label>Blue Offset: {blueOffset}px</label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={blueOffset}
              onChange={(e) => setBlueOffset(Number(e.target.value))}
              className={styles.blueSlider}
            />
          </div>
          <div className={styles.slider}>
            <label>Intensity: {intensity.toFixed(1)}</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className={styles.intensitySlider}
            />
          </div>
        </div>
        <div className={styles.presets}>
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={styles.presetButton}
            >
              {preset.name}
            </button>
          ))}
          <button onClick={reset} className={styles.resetButton}>
            Reset
          </button>
        </div>
      </div>

      <div className={styles.demo}>
        <svg width="400" height="300" viewBox="0 0 400 300" className={styles.svg}>
          <defs>
            <filter id="chromatic-shapes">
              <feOffset in="SourceGraphic" dx={redOffset} dy="0" result="red" />
              <feColorMatrix
                in="red"
                type="matrix"
                values={`${intensity} 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0`}
                result="redChannel"
              />

              <feOffset in="SourceGraphic" dx="0" dy="0" result="green" />
              <feColorMatrix
                in="green"
                type="matrix"
                values={`0 0 0 0 0  0 ${intensity} 0 0 0  0 0 0 0 0  0 0 0 1 0`}
                result="greenChannel"
              />

              <feOffset in="SourceGraphic" dx={blueOffset} dy="0" result="blue" />
              <feColorMatrix
                in="blue"
                type="matrix"
                values={`0 0 0 0 0  0 0 0 0 0  0 0 ${intensity} 0 0  0 0 0 1 0`}
                result="blueChannel"
              />

              <feBlend in="redChannel" in2="greenChannel" mode="screen" result="redGreen" />
              <feBlend in="redGreen" in2="blueChannel" mode="screen" />
            </filter>
          </defs>

          {/* Circle */}
          <circle cx="80" cy="80" r="40" fill="#ffffff" filter="url(#chromatic-shapes)" />

          {/* Rectangle */}
          <rect x="160" y="40" width="80" height="80" fill="#ffffff" filter="url(#chromatic-shapes)" />

          {/* Triangle */}
          <polygon points="320,40 280,120 360,120" fill="#ffffff" filter="url(#chromatic-shapes)" />

          {/* Star */}
          <polygon
            points="80,200 85,185 100,185 88,175 93,160 80,170 67,160 72,175 60,185 75,185"
            fill="#ffffff"
            filter="url(#chromatic-shapes)"
          />

          {/* Diamond */}
          <polygon points="200,160 240,200 200,240 160,200" fill="#ffffff" filter="url(#chromatic-shapes)" />

          {/* Hexagon */}
          <polygon
            points="320,180 340,160 360,180 360,220 340,240 320,240 300,220 300,180"
            fill="#ffffff"
            filter="url(#chromatic-shapes)"
          />
        </svg>
      </div>
    </div>
  );
}