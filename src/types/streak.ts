interface DataByDay {
  date: Date;
  amount: number;
  type: string;
}

interface ResponseStreak {
  data: DataByDay[];
  mostVisit: string;
  mostStay: string;
}

export type { ResponseStreak };
