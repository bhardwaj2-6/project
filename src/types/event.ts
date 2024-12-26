export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  category: 'academic' | 'cultural' | 'sports' | 'workshop';
  image: string;
  poster: string | null;
  organizer: string;
  registrationDeadline: Date;
  capacity: number;
  registeredCount: number;
}