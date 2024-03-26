function showOrderForm() {
  Swal.fire({
    title: "Place an Order",
    html: `
  <form id="orderForm">
    <h3 class="text-danger p-1 yellowbg fw-bold">--------</h3><br>
    <input type="text" id="name" class="form-control borderedinput text-center" placeholder="Your Name" required><br>
    
    
    <input type="text" id="phone"  class="form-control borderedinput text-center"  placeholder="Your Phone/ Email" required><br>
    
    <select id="paymentMethod"  class="form-control  borderedinput text-center" >
      <option >Payment Method</option>
      <option value="mobile_money">Mobile Money</option>
      <option value="credit_card">Credit Card</option>
      <option value="cash">Cash</option>
    </select><br><br>
  </form>
`,
    confirmButtonText: "Place Order",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    preConfirm: () => {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const paymentMethod = document.getElementById("paymentMethod").value;

      // Verify inputs
      if (name.trim() === "" || phone.trim() === "") {
        Swal.showValidationMessage("Name and Phone are required");
      } else {
        // Send data to SheetDB
        const day = new Date();
        const options = {
          day: "2-digit",
          month: "short",
          year: "numeric",
        };
        const formattedDay = day.toLocaleDateString("en-US", options);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("paywith", paymentMethod);
        formData.append("date_sent", formattedDay);

        fetch("", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle success response
            console.log("Data sent to SheetDB:", data);
            Swal.fire("Success", "Your order has been placed!", "success");
          })
          .catch((error) => {
            // Handle error
            console.error("Error sending data to SheetDB:", error);
            Swal.fire(
              "Error",
              "Failed to place the order. Please try again.",
              "error"
            );
          });
      }
    },
  });
}
