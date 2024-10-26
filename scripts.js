function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    mainContent.classList.remove("shifted");
  } else {
    sidebar.classList.add("open");
    mainContent.classList.add("shifted");
  }
}
