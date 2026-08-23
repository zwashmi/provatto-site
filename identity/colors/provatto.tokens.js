/**
 * Provatto — React Native design tokens (developer-ready mapping)
 * Generated from production/tokens.json. RTL is the default layout direction.
 * Usage: import { colors, type, space, radius, elevation, motion } from './provatto.tokens';
 */

export const colors = {
  // brand
  teal: '#12B5B0',
  tealHover: '#0FA09B',
  tealText: '#0B706D',   // AA on light
  navy: '#0A111F',
  navyCard: '#132038',
  gold: '#C9A86A',
  goldInk: '#755E2E',    // AA on light
  // neutral (light = default theme)
  paper: '#F5F3EF',
  paperAlt: '#FCFBF8',
  sink: '#EEEBE4',
  card: '#FFFFFF',
  hairline: '#E7E2D9',
  textPrimary: '#0A111F',
  textSecondary: '#565E6C',
  textMuted: '#828A98',
  // semantic
  success: '#1E8A57', successBg: '#E7F5EE',
  warning: '#8A6410', warningBg: '#F8F1DF',
  error:   '#A5342E', errorBg:   '#F9EAE9',
};

export const darkColors = {
  paper: '#0A111F', paperAlt: '#132038', sink: '#0A111F',
  card: '#132038', hairline: 'rgba(201,168,106,0.35)',
  textPrimary: '#F2F4F8', textSecondary: '#AEB6C4', textMuted: '#8E97A8',
};

export const fontFamily = {
  arabic: 'IBMPlexSansArabic',
  latin: 'IBMPlexSans',
  numeric: 'IBMPlexSans', // Latin digits always
};

export const type = {
  display:  { fontFamily: fontFamily.arabic, fontSize: 40, fontWeight: '500', lineHeight: 54 },
  h1:       { fontFamily: fontFamily.arabic, fontSize: 30, fontWeight: '600', lineHeight: 41 },
  h2:       { fontFamily: fontFamily.arabic, fontSize: 24, fontWeight: '600', lineHeight: 33 },
  h3:       { fontFamily: fontFamily.arabic, fontSize: 20, fontWeight: '600', lineHeight: 28 },
  bodyLg:   { fontFamily: fontFamily.arabic, fontSize: 17, fontWeight: '400', lineHeight: 30 },
  body:     { fontFamily: fontFamily.arabic, fontSize: 15, fontWeight: '400', lineHeight: 26 },
  caption:  { fontFamily: fontFamily.arabic, fontSize: 13, fontWeight: '400', lineHeight: 20 },
  numeric:  { fontFamily: fontFamily.numeric, fontSize: 15, fontWeight: '500' },
  microLabel:{ fontFamily: fontFamily.latin, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' },
};

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, '2xl': 24, '3xl': 32, '4xl': 40, '5xl': 48, screen: 24 };
export const radius = { sm: 8, md: 12, lg: 16, xl: 24, pill: 999 };

export const elevation = {
  card:   { shadowColor: '#0A111F', shadowOpacity: 0.06, shadowRadius: 16, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  raised: { shadowColor: '#0A111F', shadowOpacity: 0.14, shadowRadius: 30, shadowOffset: { width: 0, height: 8 }, elevation: 8 },
};

export const motion = {
  duration: { fast: 150, base: 240, slow: 400 },
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // map to Easing.bezier(0.4,0,0.2,1)
  reducedMotion: 'disable translate/scale; keep opacity only',
};

export const layout = { direction: 'rtl', mirrorInRTL: ['back','forward','transferOut','transferIn','note','share'] };

export default { colors, darkColors, fontFamily, type, space, radius, elevation, motion, layout };
