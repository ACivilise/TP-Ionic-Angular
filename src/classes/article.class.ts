
export class Article {
  public Name: string;
  public Date: string;
  public Quantity: number;
  public Id: number | null;
  // private _Name: string;
  // public get Name(): string {
  //   return this._Name;
  // }
  // public set Name(value: string) {
  //   this._Name = value;
  // }
  // private _Date: string;
  // public get Date(): string {
  //   return this._Date;
  // }
  // public set Date(value: string) {
  //   this._Date = value;
  // }

  // private _Quantity: number;
  // public get Quantity(): number {
  //   return this._Quantity;
  // }
  // public set Quantity(value: number) {
  //   this._Quantity = value;
  // }

  // private _Id: number | null;
  // public get Id(): number | null {
  //   return this._Id;
  // }
  // public set Id(value: number | null) {
  //   this._Id = value;
  // }

  public constructor(name: string, date: string, quantity: number, id: number | null) {
    this.Name = name;
    this.Date = date;
    this.Quantity = quantity;
    this.Id = id;
  }
}

