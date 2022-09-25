const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// toggle btn click korar por sidebar ta show korbe

toggleBtn.addEventListener('click', function(){
     sidebar.classList.toggle("show-sidebar");
});

// close btn click korar por sidebar ta close hoye jabe

closeBtn.addEventListener('click', function(){
     sidebar.classList.remove("show-sidebar");
});