// JavaScript
var liczba = 1
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
}
function addToTable() {
  var t = document.getElementById('clients_data_table');
  var r = t.insertRow(-1);
  var c = r.insertCell(0);
  c.innerHTML = document.getElementById("firstname").value;
  c = r.insertCell(1);  
  c.innerHTML = document.getElementById("lastname").value;
  c = r.insertCell(2);
  c.innerHTML = document.getElementById("mail").value;
  c = r.insertCell(3);
  c.innerHTML = document.getElementById("zip").value;
  c = r.insertCell(4);
  c.innerHTML = document.getElementById("nip").value;
  c = r.insertCell(5);
  c.innerHTML = document.getElementById("phone").value;

  t.tBodies[0].appendChild(r)
}