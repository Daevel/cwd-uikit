export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const BREAKPOINTS: Record<BreakpointKey, string> = {
  xs: '(max-width: 599px)',
  sm: '(min-width: 600px) and (max-width: 959px)',
  md: '(min-width: 960px) and (max-width: 1279px)',
  lg: '(min-width: 1280px) and (max-width: 1919px)',
  xl: '(min-width: 1920px)',
};

export interface CwdFlexConfig {
  direction: string;
  align: string;
  justify: string;
  gap: string;
  wrap: string;
}
