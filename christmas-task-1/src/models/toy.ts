export interface IToy {
  id: string,
  color: string,
  date: Date,
}

export default class Toy implements IToy {
  id: string;
  color: string;
  date: Date;

  constructor(data: IToy) {
    this.id = data.id;
    this.color = data.color;
    this.date = data.date;
  }

  public clone() {
    return new Toy(this);
  }
}