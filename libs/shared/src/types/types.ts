
export type RandomUserPreview = {
  login: { uuid:string };
  picture: { thumbnail: string };
  name: { title: string; first: string; last: string };
  gender: string;
  location: { country: string };
  phone: string;
  email: string;
}

export type RandomUserDetails = Omit<RandomUserPreview,'picture'|'location'> & {
  _id?: string;
  dob: { date: string; age: number };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
  };
  picture: { large: string, };
}
