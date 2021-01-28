interface FilterInterface {
  label: string;
  type: 'slider' | 'checkbox' | 'button';
  min?: number;
  max?: number;
  options?: Array<{
    showLabel?: boolean;
    id: string | number;
    label: string;
    styles?: React.CSSProperties;
  }>;
}

interface AppliedFilterInterface {
  filter: FilterInterface;
  min?: number;
  max?: number;
  value?: {
    id: string | number;
    label: string;
  };
}

export type { FilterInterface, AppliedFilterInterface };
