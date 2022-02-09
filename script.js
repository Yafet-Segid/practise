document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUser").addEventListener("click", getUser);

function getText() {
  fetch("sample.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

function getUser() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>users</h2>`;
      data.forEach(function (user) {
        output += `
          <ul>
          <li>ID: ${user.firstname} </li>
          <li>Name: ${user.lastname} </li>
          <li>Email: ${user.occupation} </li>
         </ul>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
function outPut() {
  fetch("users.json")
    .then((req) => {
      return req.text();
    })
    .then((data) => {
      //   console.log(data);
      document.getElementById("output").innerHTML = data;
    });
}
outPut();
