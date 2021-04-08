export interface IEventData {
  id: number;
  title: string;
  desc?: string;
  startDate: Date;
  createdBy?: string;
  createdAt?: Date;
  type?: number;
  color?: string;
}
