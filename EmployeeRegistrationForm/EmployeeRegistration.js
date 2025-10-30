document.getElementById("employeeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("empName").value;
  let email = document.getElementById("empEmail").value;
  let phone = document.getElementById("empPhone").value;
  let dept = document.getElementById("empDept").value;
  let gender = document.querySelector('input[name="empGender"]:checked');
  let photo = document.getElementById("empPhoto").files[0];

  if (!gender) {
    alert("Please select gender!");
    return;
  }

  if (!photo) {
    alert("Please upload a profile photo!");
    return;
  }

  let message = document.getElementById("message");
  message.style.color = "green";
  message.textContent = "Employee registered successfully!";

  document.getElementById("employeeForm").reset();
});
