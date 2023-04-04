// JavaScript
var liczba = 1


// Helpers for working with indexedDB API.

var indexedDB = window.indexedDB ||
  window.webkitIndexedDB ||
  window.mozIndexedDB;

function DB(name) {
  this.init = function (version, upgrade, done) {
    console.log('init');
    var openReq = indexedDB.open(name, version);
    openReq.onsuccess = function (e) {
      var db = e.target.result;
      // Chrome 23 still has setVersion so don't upgrade
      // unless the version is still old.
      if ('setVersion' in db && db.version < version) {
        var setVerReq = db.setVersion(version);
        setVerReq.onsuccess = function (e) {
          console.log('upgrading');
          upgrade(e.target.result.db);
          done();
        };
      } else {
        done();
      }
    };
    openReq.onupgradeneeded = function (e) {
      // Never gets raised before Chrome 23.
      console.log('upgrading');
      upgrade(e.target.result);
    };
    openReq.onerror = function (e) {
      console.log('init error');
    };
    openReq.onblocked = function (e) {
      console.log('init blocked');
    };
  };

  this.read = function (stores, fn, done) {
    return this.transaction('readonly', stores, fn, done);
  };

  this.readWrite = function (stores, fn, done) {
    return this.transaction('readwrite', stores, fn, done);
  };

  this.transaction = function (mode, stores, fn, done) {
    var openReq = indexedDB.open(name);
    openReq.onsuccess = function (e) {
      var db = e.target.result;
      var tx = db.transaction(stores, mode);
      tx.oncomplete = function (e) {
        if (done) {
          done();
        }
      };
      tx.onabort = function (e) {
        console.log('tx abort');
      };
      tx.onerror = function (e) {
        console.log('tx error');
      };
      fn(tx);
    };
    openReq.onerror = function (e) {
      console.log('open tx error');
    };
  };
}

DB.deleteDatabase = function (name, done) {
  var delReq = indexedDB.deleteDatabase(name);
  delReq.onsuccess = function (e) {
    // Not triggered before Chrome 23.
    done();
  };
  delReq.onerror = function (e) {
    console.log('delete error');
  };
  delReq.onblocked = function (e) {
    console.log('delete blocked');
  };
};

var databaseName = 'ContactsDB';
var contactsStoreName = 'contacts';

var contactsDB = new DB(databaseName);

var contacts = document.getElementById('contacts');

contactsDB.init(1, function(db) {
db.createObjectStore(contactsStoreName, {
autoIncrement: true
});
}, function() {
console.log('ready');

});

function saveData() {
  var t = document.getElementById('clients_data_table');
  for (var i = 0, row; row = t.rows[i]; i++) {
    const User = {
      firstname: t.rows[i].cells[0],
      lastname: t.rows[i].cells[0],
      email: t.rows[i].cells[0],
      zip: t.rows[i].cells[0],
      nip: t.rows[i].cells[0],
      phone: t.rows[i].cells[0]
    };

    const transaction = db.transaction(User, "readwrite");
  }

}

function loadData() {

  request.db.store.array.forEach(item => {
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






// The actual script for this page.



function loadContactsTable() {
  contactsDB.read([contactsStoreName], function (tx) {
    var cursor = tx.objectStore(contactsStoreName).openCursor();
    cursor.onsuccess = function (e) {
      if (e.target.result) {
        addContactToTable(e.target.result.value);
        e.target.result.continue();
      }
    };
    cursor.onerror = function (e) {
      console.log('cursor error');
    };
  });
}

function addContactToTable(contact) {
  var newRow = contacts.insertRow(-1);
  var nameCell = newRow.insertCell(-1);
  nameCell.textContent = contact.name;
  var emailCell = newRow.insertCell(-1);
  emailCell.textContent = contact.email;
}

var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');

document.getElementById('addButton').onclick = function (e) {
  e.preventDefault();

  var name = nameInput.value;
  var email = emailInput.value;

  console.log('adding');

  contactsDB.readWrite([contactsStoreName], function (tx) {
    var contact = {
      name: name,
      email: email
    };

    tx.objectStore(contactsStoreName).put(contact);

    addContactToTable(contact);
  }, function () {
    console.log('added');

    nameInput.value = '';
    emailInput.value = '';

    nameInput.focus();
  });
};

document.getElementById('populateButton').onclick = function (e) {
  e.preventDefault();

  createFakeContacts();
};


document.getElementById('deleteButton').onclick = function (e) {
  e.preventDefault();

  console.log('deleting');

  DB.deleteDatabase(databaseName, function () {
    console.log('deleted');
  });
};