export class User {

  constructor(public firstName: string,
              public lastname: string,
              public email: string,
              public drinkPreference: string,
              public hobbies?: string[]) {
  }

}
