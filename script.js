const getServiceList = document.querySelector(".services-list-links");
getServiceList.querySelectorAll("details.e-n-accordion-item");

const currentURL = window.location.href;
const urlParts = currentURL.split(/\/+/).filter(Boolean);
console.log(urlParts);
const storeLastValue = urlParts.pop();
console.log(storeLastValue);



getServiceList.querySelectorAll("details").forEach((item, index) => {
    console.log(item, index);
});
