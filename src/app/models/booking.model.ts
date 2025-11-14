export interface Booking {
  _id: string;
  roomId: string;
  userId: string;
  username: string;
  email: string;
  checkInDate: string;  // or Date if you parse it
  checkOutDate: string; // or Date
  status: string;       // e.g., 'booked', 'cancelled'
}
