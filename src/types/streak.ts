interface SortingDateProps {
  date: Date;
  amount: number;
  type: string;
}

interface StreakResult {
  data: SortingDateProps[];
  mostVisit: string;
  mostStay: string;
}

export type { StreakResult };
