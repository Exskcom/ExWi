document.getElementById("investmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Redirecting to payment...");
    window.location.href = "payment.html";
});

