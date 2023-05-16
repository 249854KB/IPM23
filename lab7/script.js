// JavaScript
var liczba = 1
let db; //Info about database
const DBOpenRequest = indexedDB.open('IndexedDB', 3);

DBOpenRequest.onerror = (event) => {
  console.log("Error opening database");
};

DBOpenRequest.onsuccess = (event) => {
  console.log("Database opening succeed");

  db = event.target.result;

};


DBOpenRequest.onupgradeneeded = (event) => {
  db = event.target.result;

  db.onerror = (event) => {
    console.log('Error loading database.');
  };

  // Create an objectStore for this database
  const objectStore = db.createObjectStore('IndexedDB', { keyPath: 'id' });

  // Define what data items the objectStore will contain
  objectStore.createIndex('firstname', 'firstname', { unique: false });
  objectStore.createIndex('lastname', 'lastname', { unique: false });
  objectStore.createIndex('email', 'email', { unique: false });
  objectStore.createIndex('zip', 'zip', { unique: false });
  objectStore.createIndex('nip', 'nip', { unique: false });
  objectStore.createIndex('phone', 'phone', { unique: false });

  console.log("Created object store.");
};

function saveData() {

  console.log("Aha niby uswam ale nie weim");
  clearDBStore('IndexedDB');

  var table = document.getElementById("clients_data_table");
  for (var i = 1, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    var vfirstname = row.cells[0].innerHTML;
    var vlastname = row.cells[1].innerHTML;
    var vemail = row.cells[2].innerHTML;
    var vzip = row.cells[3].innerHTML;
    var vnip = row.cells[4].innerHTML;
    var vphone = row.cells[5].innerHTML;



    // Grab the values entered into the form fields and store them in an object ready for being inserted into the IndexedDB
    const newItem = [
      { id: i, firstname: vfirstname, lastname: vlastname, email: vemail, zip: vzip, nip: vnip, phone: vphone },
    ];

    // Open a read/write DB transaction, ready for adding the data
    const transaction = db.transaction(['IndexedDB'], 'readwrite');

    // Report on the success of the transaction completing, when everything is done
    transaction.oncomplete = () => {
      console.log('Transaction completed: database modification finished.');

      // Update the display of data to show the newly added item, by running displayData() again.
    };

    // Handler for any unexpected error
    transaction.onerror = () => {
      console.log(`Transaction not opened due to error: ${transaction.error}`);
    };

    // Call an object store that's already been added to the database
    const objectStore = transaction.objectStore('IndexedDB');

    // Make a request to add our newItem object to the object store
    const objectStoreRequest = objectStore.add(newItem[0]);
    objectStoreRequest.onsuccess = (event) => {

      console.log('Request successful.');

    };
  }
};

//Loading data
function loadData() {
  // First clear the content of the task list so that you don't get a huge long list of duplicate stuff each time

  var table = document.getElementById("clients_data_table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  // Open our object store and then get a cursor list of all the different data items in the IDB to iterate through
  const objectStore = db.transaction('IndexedDB').objectStore('IndexedDB');
  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    // Check if there are no (more) cursor items to iterate through
    if (!cursor) {
      // No more items to iterate through, we quit.
      console.log('Entries all displayed.');
      return;
    }

    // Read the shit and add it to table
    const { firstname, lastname, email, zip, nip, phone } = cursor.value;
    var t = document.getElementById('clients_data_table');
    var r = t.insertRow(-1);
    var c = r.insertCell(0);
    c.innerHTML = firstname;
    c = r.insertCell(1);
    c.innerHTML = lastname;
    c = r.insertCell(2);
    c.innerHTML = email;
    c = r.insertCell(3);
    c.innerHTML = zip;
    c = r.insertCell(4);
    c.innerHTML = nip;
    c = r.insertCell(5);
    c.innerHTML = phone;
    c = r.insertCell(6);
    c.innerHTML = "<button class='delete_row' onclick=\"delete_row(this)\"  >Delete</button> <button class='move_up' onclick=\"up_row(this)\"  >Up</button> <button class='move_down' onclick=\"down_row(this)\"  >Down</button> </button> <button class='edit_row' onclick=\"edit_row(this)\"  >Edytuj</button>";
    // continue on to the next item in the cursor

    console.log('Printed row');
    cursor.continue();

  };

};



// 2 Functions that are used in Dodaj button
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
  c = r.insertCell(6);
  c.innerHTML = "<button class='delete_row' onclick=\"delete_row(this)\"  >Delete</button> <button class='move_up' onclick=\"up_row(this)\"  >Up</button> <button class='move_down' onclick=\"down_row(this)\"  >Down</button> <button class='edit_row' onclick=\"edit_row(this)\"  >Edytuj</button>";

}

function delete_row(btn) {
  var r = btn.parentNode.parentNode;
  r.parentNode.removeChild(r);
}

function edit_row(btn)
{
  var r = btn.parentNode.parentNode.rowIndex;
  var rows = document.getElementById('clients_data_table').rows;
  
  document.getElementById("accept").disabled = false;
  document.getElementById("firstname").value = rows[r].cells[0].innerHTML;
  document.getElementById("email").value = rows[r].cells[2].innerHTML;
  document.getElementById("lastname").value = rows[r].cells[1].innerHTML;
  document.getElementById("zip").value = rows[r].cells[3].innerHTML;
  document.getElementById("nip").value = rows[r].cells[4].innerHTML
  document.getElementById("phone").value = rows[r].cells[5].innerHTML;
}

function acceptEdit()
{
  document.getElementById("accept").disabled = true;
}
function up_row(btn) {
  var r = btn.parentNode.parentNode.rowIndex;
  var rows = document.getElementById('clients_data_table').rows,
    parent = rows[r].parentNode;
  if (r > 1) {

    parent.insertBefore(rows[r], rows[r - 1])
  }
  else{
    parent.insertBefore(rows[r], rows[rows.length])
  }
}

function down_row(btn) {
  var r = btn.parentNode.parentNode.rowIndex;
  var rows = document.getElementById('clients_data_table').rows,
    parent = rows[r].parentNode;
  if (r < rows.length -1) {
    parent.insertBefore(rows[r+1], rows[r])
  }
  else
  {
    parent.insertBefore(rows[r], rows[1])
  }
}
function generateData() {
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

function append()
{
  document.getElementById("accept").disabled = true;
  toTable();
}

function clearDBStore(storename) {
  const transaction = db.transaction(storename, "readwrite");
  const objectStore = transaction.objectStore(storename);
  const objectStoreRequest = objectStore.clear();
}

