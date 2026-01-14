export const COLORS = {
  // Primary Palette - Deep, Premium Colors
  primary: '#6C63FF',      // Vibrant Purple
  secondary: '#FF6584',    // Coral Pink
  accent: '#4ECDC4',       // Turquoise
  
  // Module Colors
  spirit: '#9D84FF',       // Spiritual Purple
  body: '#FF6B9D',         // Fitness Pink
  mind: '#4ECDC4',         // Mental Teal
  wealth: '#FFD93D',       // Gold
  
  // Backgrounds
  background: '#0A0E27',   // Deep Navy
  surface: '#1A1F3A',      // Card Background
  surfaceLight: '#252B48', // Lighter Surface
  
  // Text
  text: '#FFFFFF',
  textSecondary: '#A0A3BD',
  textMuted: '#6E7191',
  
  // Status
  success: '#06FFA5',
  warning: '#FFB800',
  error: '#FF4757',
  
  // Gradients
  gradientStart: '#6C63FF',
  gradientEnd: '#4ECDC4',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};
