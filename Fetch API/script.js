document.getElementById("fetchUserBtn").addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const userInfoDiv = document.getElementById("userInfo");
      userInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <img src="${user.picture.large}" alt="Profile Picture">
      `;
    })
    .catch(error => {
      console.error("Error fetching user:", error);
    });
});