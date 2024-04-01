// Function to add a new row to the table
function addRow() {
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const foodChoice = document.getElementById("foodChoice").value;
  
    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${foodChoice}</td>
    `;
  
    // Append the new row to the table body
    document.getElementById("tableBody").appendChild(newRow);
  
    // Clear form fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("foodChoice").value = "pizza"; // Reset food choice to default
  }
  