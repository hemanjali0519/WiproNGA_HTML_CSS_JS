const tableBody = document.getElementById("tableBody");
const pageInfo = document.getElementById("pageInfo");

const usersPerPage = 3;
let currentPage = 1;
let userIdCounter = 100;

// Initial users (async-safe data)
let users = [
  { id: 1, name: "Leanne Graham", email: "leanne@gmail.com" },
  { id: 2, name: "Ervin Howell", email: "ervin@gmail.com" },
  { id: 3, name: "Clementine Bauch", email: "clementine@gmail.com" },
  { id: 4, name: "Patricia Lebsack", email: "patricia@gmail.com" },
  { id: 5, name: "Chelsey Dietrich", email: "chelsey@gmail.com" }
];

// Render table with pagination
function renderTable() {
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;

  users.slice(start, end).forEach(user => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });

  const totalPages = Math.ceil(users.length / usersPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

// Pagination controls
document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
};

document.getElementById("nextBtn").onclick = () => {
  const totalPages = Math.ceil(users.length / usersPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
};

// User Registration
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const msg = document.getElementById("formMsg");

  let valid = true;

  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    valid = false;
  } else name.classList.remove("is-invalid");

  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
    valid = false;
  } else email.classList.remove("is-invalid");

  if (valid) {
    users.push({
      id: ++userIdCounter,
      name: name.value,
      email: email.value
    });

    currentPage = Math.ceil(users.length / usersPerPage);
    renderTable();

    msg.innerHTML = "<span class='text-success'>User registered successfully!</span>";
    this.reset();
  }
});

// Initial load
renderTable();