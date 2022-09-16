interface Log {
  inOut: string;
  date: Date;
  type: string;
}

interface LogCardProps {
  data: Log[];
}

export type { Log, LogCardProps };
