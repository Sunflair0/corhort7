// document.addEventListener("DOMContentLoaded", function() {
//     loadPageContent("history"); 
    
//     const navLinks = document.querySelectorAll("nav a");
//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const pageId = link.getAttribute("href").substring(1);
//             loadPageContent(pageId);
//         });
//     });
// });

// function loadPageContent(pageId) {
//     const mainContent = document.querySelector("main");
//     const xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 mainContent.innerHTML = xhr.responseText;
//             } else {
//                 console.error("Failed to load content");
//             }
//         }
//     };
    
//     xhr.open("GET", `${pageId}.html`, true);
//     xhr.send();
// }
// document.addEventListener("DOMContentLoaded", function () {
//     loadPageContent("history"); 

//     const navLinks = document.querySelectorAll("nav a");
//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const pageId = link.getAttribute("href").substring(1);
//             loadPageContent(pageId);
//         });

//         link.addEventListener("mouseover", function () {
//             link.style.color = "#ffcc00"; 
//         });

//         link.addEventListener("mouseout", function () {
//             link.style.color = "#fff"; 
//         });
//     });
// });

// function loadPageContent(pageId) {
//     const mainContent = document.querySelector("main");
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 mainContent.innerHTML = xhr.responseText;
//             } else {
//                 console.error("Failed to load content");
//             }
//         }
//     };

//     xhr.open("GET", `${pageId}.html`, true);
//     xhr.send();
// }