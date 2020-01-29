var firebaseConfig = {
    apiKey: "AIzaSyAJnotawWK9fdhcvrfmwvAZUxiuvzdCm3Q",
    authDomain: "timesheetzrj.firebaseapp.com",
    databaseURL: "https://timesheetzrj.firebaseio.com",
    projectId: "timesheetzrj",
    storageBucket: "timesheetzrj.appspot.com",
    messagingSenderId: "590700295724",
    appId: "1:590700295724:web:f75d6066d12fdcdfc8c389"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  $("#add-employee").on("click", function(event){
    event.preventDefault();
        let employeeName = $('#employee-name').val().trim();
        let employeeRole = $('#role').val().trim();
        let startDate = $('#start-date').val().trim();
        let monthlyRate = $('#rate').val().trim();

    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        startDate: startDate,
        monthlyRate: monthlyRate
    })

  });