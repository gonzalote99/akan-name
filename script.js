let inputDay, inputMonth, inputYear, gender, message, successMessage;
let akanMale = [];
let akanFemale = [];

const btnSubmit = document.querySelector('.submit');
btnSubmit.addEventListener('click', function() {
  inputDay = document.getElementById('day').value;
  inputMonth = document.getElementById('month').value;
  inputYear = document.getElementById('year').value;
  gender = document.querySelector('input[name="gender"]:checked');
  message = document.querySelector('.error');
  successMessage = document.querySelector('.div-alert')
  

  let akanMale = [
    {dayOfTheWeek: "Sunday", akanName: "Kole"},
    {dayOfTheWeek: "Mondey", akanName: "Dpol"},
    {dayOfTheWeek: "Tuesday", akanName: "Sent"},
    {dayOfTheWeek: "Wednesday", akanName: "Flos"},
    {dayOfTheWeek: "Thursday", akanName: "Tek"},
    {dayOfTheWeek: "Friday", akanName: "Rok"},
    {dayOfTheWeek: "Saturday", akanName: "Mels"}
  
  ];

  let akanFemale = [
    {dayOfTheWeek: "Sunday", akanName: "Aele"},
    {dayOfTheWeek: "Mondey", akanName: "Aspol"},
    {dayOfTheWeek: "Tuesday", akanName: "Pilent"},
    {dayOfTheWeek: "Wednesday", akanName: "Dolos"},
    {dayOfTheWeek: "Thursday", akanName: "Rek"},
    {dayOfTheWeek: "Friday", akanName: "Psok"},
    {dayOfTheWeek: "Saturday", akanName: "Lels"}
  
  ];

  if(inputDay < 0 || inputDay > 31) {
    message.textContent = 'enter valid date';
    message.classList.remove('display');

  }else if(inputMonth < 0 || inputDay > 12) {
    message.textContent = 'enter valid month';
    message.classList.remove('display')
  }else if(document.getElementById('year').value.length != 4 || inputYear <= 0 || inputYear > 9999) {
  message.textContent = 'enter valid year';
  message.classList.remove('display');
  }
  else if(inputYear > new Date().getFullYear()) {
    message.textContent = 'year grather than current';
    message.classList.remove('display');
  } else if(gender == null) {
    message.textContent = 'select gender';
    message.classList.remove('display');
  } else {
    message.classList.add('display')

    var monthBorn = parseInt(document.getElementById('month').value);
    var yearBorn = parseInt(document.getElementById('year').value);
    var dayBorn = parseInt(document.getElementById('day').value);
    var fullDateOfbirth = new Date(yearBorn + "/" + monthBorn + "/" + dayBorn);
    var d = fullDateOfbirth.getDay();

    if(gender.value == "male") {
      akanMale.find((item, index, arr) => {
        if(index == d) {
          console.log(item.akanName, item.dayOfTheWeek);
          successMessage.textContent = `akan name: ${item.akanName} born in ${item.dayOfTheWeek}`;
          successMessage.classList.remove('hidden');
        }
      });
    } else if(gender.value == "female") {
      akanFemale.find((item, index, arr) => {
        if(index == d) {
          console.log(item.akanName, item.dayOfTheWeek);
          successMessage.textContent = `akan name: ${item.akanName} born in ${item.dayOfTheWeek}`;
          successMessage.classList.remove('hidden');
        }
      });
    } else {
      let divAlertError = document.querySelector('div-alert-error').textContent = 'error displaying name';
      divAlertError.classList.remove('hidden');
    } 
  }
});