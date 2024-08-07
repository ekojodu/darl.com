// footer
const date = new Date();
const year = date.getFullYear();
let footerParagraph = document.querySelector('.footers');

footerParagraph.innerHTML = `&copy; ${year} Digital Agriculture Research Lab. All Right Reserved.`;
