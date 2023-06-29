export class newUser {

  //atributos
  dateBirth?: string
  email?:string
  id?: string
  lastName?: string
  name: string
  password?: string
  phoneNumber?: Number
  updatedAt?: string
  _id?: string

  constructor(
      dateBirth = '',
      email = '',
      id = '',
      lastName = '',
      password = '',
      updatedAt = '',
      _id = '',
      name = ''
  ) {
      this.dateBirth = dateBirth;
      this.email = email;
      this.id = id;
      this.lastName = lastName;
      this.password = password;
      this.updatedAt = updatedAt;
      this._id = _id;
      this.name = name
  }
}
