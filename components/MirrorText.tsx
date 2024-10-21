// components/MirrorText.tsx
import React from 'react';
import styles from './MirrorText.module.css';

interface MirrorTextProps {
  text: string;
  textColor?: string;
  mirrorColor?: string;
  fontSize?: string;
  position?: string;
}

const MirrorText: React.FC<MirrorTextProps> = ({
  text,
  textColor = 'text-black',
  mirrorColor = '#cd72ee',
  fontSize = 'text-6xl',
  position = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
}) => {
  return (
    <h1
      className={`relative ${fontSize} ${textColor} ${position}`}
      data-text={text}
    >
      {text}
      <span
        className={styles.mirror}
        style={{
          color: mirrorColor, // Directly set mirror text color
        }}
      >
        {text}
      </span>
    </h1>
  );
};

export default MirrorText;