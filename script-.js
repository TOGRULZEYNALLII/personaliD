const config = {
  URL: "https://randomuser.me/api/",
};

const image = document.getElementById("img");
const fullname = document.getElementById("fullname");
const gender = document.getElementById("gender");
const userlocation = document.getElementById("location");
const country = document.getElementById("country");
const emaill = document.getElementById("email");
const registered = document.getElementById("registered");
const phone = document.getElementById("phone");

async function userfetch() {
  const response = await fetch(config.URL);
  const data = await response.json();

  gets(data);
  console.log(data);
}

userfetch();
function gets(data) {
  image.src = data.results[0].picture.medium;
  fullname.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
  gender.textContent = data.results[0].gender;
  userlocation.textContent = data.results[0].location.city;
  country.textContent = data.results[0].location.country;
  emaill.textContent = data.results[0].email;
  registered.textContent = data.results[0].registered.age;
  phone.textContent = data.results[0].phone;
}
