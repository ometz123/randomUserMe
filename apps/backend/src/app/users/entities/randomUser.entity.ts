import { RandomUserDetails } from '@randomuser/shared/types';

export class RandomUser implements RandomUserDetails {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  dob: { date: string; age: number };
  gender: string;
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
  };
  login: { uuid: string };
  name: { title: string; first: string; last: string };
  phone: string;
  picture: { large: string };

  constructor(details: RandomUserDetails) {
    Object.assign(this, details);
  }

}
