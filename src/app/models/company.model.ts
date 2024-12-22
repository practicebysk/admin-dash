export interface CompanyDetails {
  company: string;
  fname: string;
  lname: string;
  adress: string;
  date: string;
  gender: string;
  size: string;
  email: string;
}

export class CompanyDTO implements CompanyDetails {
  constructor(
    public company: string,
    public fname: string,
    public lname: string,
    public adress: string,
    public date: string,
    public gender: string,
    public size: string,
    public email: string
  ) {}
}
