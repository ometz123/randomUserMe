import { RandomUserDetails } from '@randomuser/shared/types';

type FakeRandomUsersResponse = {
  results: RandomUserDetails[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
export const fakeRandomUsersResponse: FakeRandomUsersResponse = {
  results: [
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Emma', last: 'Johnson' },
      email: 'emma.johnson@example.com',
      login: { uuid: '64bfae1234abcdef12345678' },
      dob: { date: '1990-05-15T00:00:00Z', age: 34 },
      phone: '555-1234',
      location: {
        street: { number: 123, name: 'Main St' },
        city: 'Springfield',
        state: 'Illinois',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/women/1.jpg' }
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Liam', last: 'Smith' },
      email: 'liam.smith@example.com',
      login: { uuid: '64bfae2234abcdef12345679' },
      dob: { date: '1988-09-22T00:00:00Z', age: 36 },
      phone: '555-2345',
      location: {
        street: { number: 456, name: 'Oak St' },
        city: 'Riverdale',
        state: 'California',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/2.jpg' }
    },
    {
      gender: 'female',
      name: { title: 'Mrs', first: 'Olivia', last: 'Williams' },
      email: 'olivia.williams@example.com',
      login: { uuid: '64bfae3234abcdef1234567a' },
      dob: { date: '1995-02-10T00:00:00Z', age: 30 },
      phone: '555-3456',
      location: {
        street: { number: 789, name: 'Pine St' },
        city: 'Centerville',
        state: 'Texas',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/women/3.jpg' }
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Noah', last: 'Brown' },
      email: 'noah.brown@example.com',
      login: { uuid: '64bfae4234abcdef1234567b' },
      dob: { date: '1992-07-08T00:00:00Z', age: 32 },
      phone: '555-4567',
      location: {
        street: { number: 321, name: 'Elm St' },
        city: 'Shelbyville',
        state: 'Florida',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/4.jpg' }
    },
    {
      gender: 'female',
      name: { title: 'Miss', first: 'Ava', last: 'Jones' },
      email: 'ava.jones@example.com',
      login: { uuid: '64bfae5234abcdef1234567c' },
      dob: { date: '2000-11-30T00:00:00Z', age: 24 },
      phone: '555-5678',
      location: {
        street: { number: 654, name: 'Birch St' },
        city: 'Greendale',
        state: 'New York',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/women/5.jpg' }
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Elijah', last: 'Garcia' },
      email: 'elijah.garcia@example.com',
      login: { uuid: '64bfae6234abcdef1234567d' },
      dob: { date: '1985-04-18T00:00:00Z', age: 39 },
      phone: '555-6789',
      location: {
        street: { number: 987, name: 'Maple St' },
        city: 'Hill Valley',
        state: 'Ohio',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/6.jpg' }
    },
    {
      gender: 'female',
      name: { title: 'Ms', first: 'Sophia', last: 'Martinez' },
      email: 'sophia.martinez@example.com',
      login: { uuid: '64bfae7234abcdef1234567e' },
      dob: { date: '1998-06-05T00:00:00Z', age: 26 },
      phone: '555-7890',
      location: {
        street: { number: 159, name: 'Willow St' },
        city: 'Sunnydale',
        state: 'Nevada',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/women/7.jpg' }
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'James', last: 'Rodriguez' },
      email: 'james.rodriguez@example.com',
      login: { uuid: '64bfae8234abcdef1234567f' },
      dob: { date: '1991-12-25T00:00:00Z', age: 33 },
      phone: '555-8901',
      location: {
        street: { number: 753, name: 'Cedar St' },
        city: 'River City',
        state: 'Washington',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/8.jpg' }
    },
    {
      gender: 'female',
      name: { title: 'Mrs', first: 'Isabella', last: 'Hernandez' },
      email: 'isabella.hernandez@example.com',
      login: { uuid: '64bfae9234abcdef12345680' },
      dob: { date: '1993-03-20T00:00:00Z', age: 31 },
      phone: '555-9012',
      location: {
        street: { number: 852, name: 'Aspen St' },
        city: 'Twin Peaks',
        state: 'Montana',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/women/9.jpg' }
    },
    {
      gender: 'male',
      name: { title: 'Mr', first: 'William', last: 'Lopez' },
      email: 'william.lopez@example.com',
      login: { uuid: '64bfaea234abcdef12345681' },
      dob: { date: '1987-01-14T00:00:00Z', age: 37 },
      phone: '555-0123',
      location: {
        street: { number: 951, name: 'Magnolia St' },
        city: 'Bedford Falls',
        state: 'Virginia',
        country: 'United States'
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/10.jpg' }
    },
  ],
  info: {
    seed: 'testingseed',
    results: 10,
    page: 1,
    version: '1.4',
  },
};