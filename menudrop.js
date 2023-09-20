function showTextBox() {
    var categorySelect = document.getElementById("category");
    var otherTextbox = document.getElementById("other-textbox");

    if (categorySelect.value === "other") {
      otherTextbox.style.display = "block";
    } else {
      otherTextbox.style.display = "none";
      document.getElementById("other-category").value = ""; // Clear the text if it was previously filled
    }
  }