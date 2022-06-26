export default (expenses = []) => {
  if (!Array.isArray(expenses)) {
    return expenses.amount;
  }
  const amounts = expenses.map((e) => {
    return e.amount;
  });
  const initial = 0;

  return amounts.reduce((prev, cur) => prev + cur, initial);
};
