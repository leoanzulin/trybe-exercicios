function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  let decemberDaysList = [29,30,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  let pai = document.getElementById('days');
  for (index = 0; index < decemberDaysList.length; index += 1) {    
    let days = document.createElement("li");
    let dia = decemberDaysList[index]
    days.innerHTML = dia;
    if (dia === 24 || dia === 31) {
      days.className = 'day holiday'; 
      pai.appendChild(days); 
    } else if (dia === 4 || dia === 11 || dia === 18) {      
      days.className = 'day friday'; 
      pai.appendChild(days);
    } else if (dia === 25) {      
      days.className = 'day holiday friday'; 
      pai.appendChild(days);
    } else {      
      days.className = 'day';
    pai.appendChild(days);
    }
  }
}
createDaysOfTheMonth();

function createtButton(string) {
  let pai = document.querySelector('.buttons-container');
  let button = document.createElement("button");
  button.innerText = string
  button.id = 'btn-holiday';
  pai.appendChild(button);
}
createtButton('Feriados')