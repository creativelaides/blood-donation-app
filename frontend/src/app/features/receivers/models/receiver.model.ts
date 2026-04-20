export interface Receiver {
  id: string;
  name: string;
  bloodType: string;
  age: number;
  hospital: string;
  status: 'pending' | 'attended';
  createdAt: Date;
}