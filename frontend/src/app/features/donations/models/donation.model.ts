export interface Donation {
  id: string;
  donorId: string;
  receiverId: string;
  donorName: string;
  receiverName: string;
  bloodType: string;
  date: Date;
  status: 'completed' | 'cancelled';
}