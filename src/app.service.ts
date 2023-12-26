import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class AppService {

  private users: IUser[] = [
    {
      id: 1,
      name: 'Tamilan',
      age: 23,
    },
    {
      id: 1,
      name: 'Nandha',
      age: 24,
    },
    {
      id: 1,
      name: 'Nandha Kumar',
      age: 24,
    },
  ];

  findUsersByName(nameToBeMatched: string): IUser[] {
    return nameToBeMatched
      ? this.users.filter((user) =>
          user.name.toLowerCase().includes(nameToBeMatched),
        )
      : 
        this.users;
  }

  findUserById(id: string): IUser {

    return this.users.find((user) => user.id === Number(id));
  }
}