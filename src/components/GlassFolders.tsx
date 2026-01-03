import React from 'react';
import { motion } from 'framer-motion';
import { FiFolder, FiLock } from 'react-icons/fi';
import './GlassFolders.css';
import { useNavigate } from 'react-router-dom';

export interface GlassFolderItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  subtitle: string;
  link?: string;
  comingSoon?: boolean;
  customClass?: string;
}

export interface GlassFoldersProps {
  items: GlassFolderItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  cyan: 'linear-gradient(hsl(193, 90%, 50%), hsl(178, 90%, 50%))',
};

const GlassFolders: React.FC<GlassFoldersProps> = ({ items, className }) => {
  const navigate = useNavigate();

  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleClick = (item: GlassFolderItem) => {
    if (item.comingSoon) return;
    if (item.link) {
      navigate(item.link);
    }
  };

  return (
    <div className={`folder-btns ${className || ''}`}>
      {items.map((item, index) => (
        <motion.button
          key={index}
          type="button"
          className={`folder-btn cursor-target ${item.comingSoon ? 'folder-btn--disabled' : ''} ${item.customClass || ''}`}
          aria-label={item.label}
          onClick={() => handleClick(item)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          disabled={item.comingSoon}
        >
          <span className="folder-btn__back" style={getBackgroundStyle(item.color)}></span>
          <span className="folder-btn__front">
            <span className="folder-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <div className="folder-btn__info">
            <span className="folder-btn__label">{item.label}</span>
            <span className="folder-btn__subtitle">{item.subtitle}</span>
            {item.comingSoon && (
              <span className="folder-btn__badge">
                <FiLock className="w-3 h-3" />
                Em breve
              </span>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default GlassFolders;

