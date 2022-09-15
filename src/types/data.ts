interface DataProps {
  date: Date;
  amount: number;
  type: string;
}

interface ResponseData {
  data: DataProps[];
}

export type {
  DataProps,
  ResponseData
}