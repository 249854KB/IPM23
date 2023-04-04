// JavaScript
var liczba = 1

let db;

const openRequest = indexedDB.open('myDatabase', 2);

openRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  console.log('running onupgradeneeded');
  const storeOS = db.createObjectStore('myDatabaseStore', { keyPath: "name" });

};
openRequest.onsuccess = function (e) {
  console.log('running onsuccess');
  db = e.target.result;
  addItem();
};
openRequest.onerror = function (e) {
  console.log('onerror! doesnt work');
  console.dir(e);
};

function saveData() {
  var t = document.getElementById('clients_data_table');
  for (var i = 0, row; row = t.rows[i]; i++) {
    const item = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      zip: document.getElementById("zip").value,
      nip: document.getElementById("nip").value,
      phone: document.getElementById("phone").value
    };
    const tx = db.transaction("myDatabaseStore", "readwrite");
    const store = tx.objectStore('myDatabaseStore');
    store.add(item);
  }

}

function loadData() {
  const store = tx.objectStore('myDatabaseStore');
  store.array.forEach(item => {
     document.getElementById("firstname").value = item.firstname,
      document.getElementById("lastname").value = item.lastname,
    document.getElementById("email").value = item.email,
     document.getElementById("zip").value = item.zip,
     document.getElementById("nip").value = item.nip,
     document.getElementById("phone").value = item.phone
  });
}

function toTable() {
  var t = document.getElementById('clients_data_table');
  var r = t.insertRow(-1);
  var c = r.insertCell(0);
  c.innerHTML = document.getElementById("firstname").value;
  c = r.insertCell(1);
  c.innerHTML = document.getElementById("lastname").value;
  c = r.insertCell(2);
  c.innerHTML = document.getElementById("email").value;
  c = r.insertCell(3);
  c.innerHTML = document.getElementById("zip").value;
  c = r.insertCell(4);
  c.innerHTML = document.getElementById("nip").value;
  c = r.insertCell(5);
  c.innerHTML = document.getElementById("phone").value;

}

function myFunction() {
  if (liczba == 1) {
    document.getElementById("firstname").value = "kacper";
    document.getElementById("lastname").value = "Banek";
    document.getElementById("zip").value = "90-000";
    document.getElementById("nip").value = "022-41-11-111";
    document.getElementById("ipv4").value = "10.1.1.200";
    document.getElementById("webpage").value = "https://www.jacek.pl";
    document.getElementById("email").value = "jb@gmail.com";
    document.getElementById("winpath1").value = "c:\\windows\\temp";
    document.getElementById("winpath2").value = "C:\\Windows\\temp";
    document.getElementById("linuxpath").value = "/etc/process";
    document.getElementById("phone").value = "123456789";
  }
  else if (liczba == 2) {
    document.getElementById("firstname").value = "Adam";
    document.getElementById("lastname").value = "Kuzin";
    document.getElementById("zip").value = "90-120";
    document.getElementById("nip").value = "022-41-12-111";
    document.getElementById("ipv4").value = "10.1.2.200";
    document.getElementById("webpage").value = "https://www.jacekgacek.pl";
    document.getElementById("email").value = "jb1@gmail.com";
    document.getElementById("winpath1").value = "c:\\windows\\temp";
    document.getElementById("winpath2").value = "C:\\Windows\\temp";
    document.getElementById("linuxpath").value = "/etc/process1";
    document.getElementById("phone").value = "123456719";

  }
  else if (liczba == 3) {
    document.getElementById("firstname").value = "kacperw";
    document.getElementById("lastname").value = "Barnek";
    document.getElementById("zip").value = "60-000";
    document.getElementById("nip").value = "022-21-11-111";
    document.getElementById("ipv4").value = "10.1.12.200";
    document.getElementById("webpage").value = "https://www.jg.pl";
    document.getElementById("email").value = "jb2@gmail.com";
    document.getElementById("winpath1").value = "c:\\windows\\temp";
    document.getElementById("winpath2").value = "C:\\MsDos\\temp";
    document.getElementById("linuxpath").value = "/etc/process2";
    document.getElementById("phone").value = "123456319";
  }
  else if (liczba == 4) {
    document.getElementById("firstname").value = "kacpera";
    document.getElementById("lastname").value = "Banekei";
    document.getElementById("zip").value = "70-000";
    document.getElementById("nip").value = "021-41-11-111";
    document.getElementById("ipv4").value = "100.1.1.200";
    document.getElementById("webpage").value = "https://www.pol.pl";
    document.getElementById("email").value = "jb3@gmail.com";
    document.getElementById("winpath1").value = "c:\\win\\temp";
    document.getElementById("winpath2").value = "C:\\Win\\temp";
    document.getElementById("linuxpath").value = "/etc/process3";
    document.getElementById("phone").value = "123356789";
  }
  else if (liczba == 5) {
    document.getElementById("firstname").value = "kacpers";
    document.getElementById("lastname").value = "Banekson";
    document.getElementById("zip").value = "80-000";
    document.getElementById("nip").value = "022-41-11-211";
    document.getElementById("ipv4").value = "10.123.1.200";
    document.getElementById("webpage").value = "https://www.mina.pl";
    document.getElementById("email").value = "jb4@gmail.com";
    document.getElementById("winpath1").value = "c:\\winnt\\temp";
    document.getElementById("winpath2").value = "C:\\wINNt\\temp";
    document.getElementById("linuxpath").value = "/etc/process4";
    document.getElementById("phone").value = "123456189";
    liczba = 0;
  }
  liczba = liczba + 1;
  toTable();
}

