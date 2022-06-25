import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Car",
    amount: 2000000,
    note: "",
    createdAt: 0,
  },
  {
    id: "2",
    description: "Gum",
    amount: 200,
    note: "",
    createdAt: moment(0).add(4, "days").valueOf(),
  },
  {
    id: "1",
    description: "Burrito",
    amount: 400,
    note: "",
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
];

export default expenses;
