import { RandomUserDetails } from '@randomuser/shared/types';

export class CreateRandomUserDto implements RandomUserDetails {
  _id?: string;
  dob: { date: string; age: number };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
  };
  picture: { large: string };
  email: string;
  gender: string;
  login: { uuid: string };
  name: { title: string; first: string; last: string };
  phone: string;

  constructor(details: RandomUserDetails) {
    Object.assign(this, details);
  }
}
