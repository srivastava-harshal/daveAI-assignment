const allocate = (persons, buses) => {
  if (persons <= 0) return Array.from({ length: buses }, () => 0);
  const chart = [1];
  let remainingPeople = persons - 1;
  for (let i = 1; i < buses; i++) {
    const passengers = (chart[i - 2] || 0) + (chart[i - 1] || 0);
    if (passengers <= remainingPeople) {
      chart.push(passengers);
      remainingPeople -= passengers;
    } else {
      chart.push(remainingPeople);
      remainingPeople = 0;
    }
  }

  const result = document.getElementById("result");
  const htmlToInsert = chart
    .map((el) => {
      return `<div class="bus">🚌: ${el}</div>`;
    })
    .join("");

  result.innerHTML = htmlToInsert;
};

(() => {
  const people = document.getElementById("people");
  const buses = document.getElementById("buses");
  const result = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
    allocate(people, buses);
  });
})();
