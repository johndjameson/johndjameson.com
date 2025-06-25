'use client';

import { useState, useEffect } from 'react';
import styles from './ChromaticTerminalDemo.module.css';

interface ChromaticTerminalDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticTerminalDemo({
  initialRedOffset = 2,
  initialBlueOffset = -2,
  initialIntensity = 0.8,
}: ChromaticTerminalDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    '$ system_scan --recursive',
    'Scanning system files...',
    'Found 2,847 files in 156 directories',
    '$ netstat -tuln | grep LISTEN',
    'tcp    0.0.0.0:22    LISTEN',
    'tcp    0.0.0.0:80    LISTEN', 
    'tcp    0.0.0.0:443   LISTEN',
    '$ ps aux | head -10',
    'USER   PID  %CPU %MEM COMMAND',
    'root     1   0.1  0.8 /sbin/init',
    'root   247   0.0  0.4 systemd',
    'daemon 512   0.2  1.2 nginx',
    '$ tail -f /var/log/access.log',
    '192.168.1.100 - GET /api/status 200',
    '10.0.0.50 - POST /auth/login 401',
    '203.0.113.5 - GET /dashboard 200',
    '$ _'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % terminalLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [terminalLines.length]);

  const presets = [
    { name: 'Retro', red: 1, blue: -1, intensity: 0.6 },
    { name: 'Heavy Glitch', red: 4, blue: -4, intensity: 1.2 },
    { name: 'Subtle', red: 0.5, blue: -0.5, intensity: 0.4 },
    { name: 'Asymmetric', red: 3, blue: -1, intensity: 0.9 },
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
              min="-6"
              max="6"
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
              min="-6"
              max="6"
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

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.closeBtn}></span>
            <span className={styles.minimizeBtn}></span>
            <span className={styles.maximizeBtn}></span>
          </div>
          <div className={styles.terminalTitle}>terminal</div>
        </div>
        
        <div className={styles.terminalBody}>
          <svg className={styles.terminalSvg} viewBox="0 0 600 400">
            <defs>
              <filter id="chromatic-terminal">
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
            
            <rect width="100%" height="100%" fill="#000000" />
            
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <text
                key={index}
                x="20"
                y={30 + index * 20}
                fill="#00ff00"
                fontSize="14"
                fontFamily="'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace"
                filter="url(#chromatic-terminal)"
              >
                {line}
              </text>
            ))}
            
            {/* Blinking cursor */}
            <rect
              x="20 + currentLine * 8"
              y={15 + currentLine * 20}
              width="8"
              height="16"
              fill="#00ff00"
              filter="url(#chromatic-terminal)"
              className={styles.cursor}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}