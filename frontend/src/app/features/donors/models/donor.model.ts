export interface Donor {
  id: string;
  name: string;
  bloodType: string;
  age: number;
  email: string;
  available: boolean;
  createdAt: Date;
}