document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading screen
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 2000);
  });
  
  function redirectToWhatsApp() {
    window.open("https://wa.me/+254114283550", "_blank");
  }
  
  // Function to view product details (placeholder for now)
  function viewProductDetails(product) {
    alert("You clicked on " + product + ". This will show product details.");
  }