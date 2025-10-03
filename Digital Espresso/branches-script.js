const searchInput = document.getElementById("branchSearch");
const branchItems = document.querySelectorAll(".branch-item");

    searchInput.addEventListener("keyup", function() {
      let filter = searchInput.value.toLowerCase();
      branchItems.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });