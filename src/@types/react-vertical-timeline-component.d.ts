declare module 'react-vertical-timeline-component' {
  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    children?: React.ReactNode;
  }

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
  export const VerticalTimeline: React.FC<{
    className?: string;
    children: React.ReactNode;
    lineColor?: string;
  }>;
} 