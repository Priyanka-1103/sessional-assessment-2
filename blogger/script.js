/// Fething data from API 
const xhr = new XMLHttpRequest();
var response, page = 1;

const url = `https://jsonplaceholder.typicode.com/posts?key=AIzaSyBwyS06wC4v_VOu-wsyt7_hnBXs6SOwspU&utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&count=25`;


xhr.open('GET', url);

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        response = JSON.parse(xhr.responseText);
        console.log(response);
        updateContent();
    }
}

xhr.send();

//////////////// implementing pagination
let pagination = new tui.Pagination("pagination", {
    totalItems: 100,
});

pagination.on("beforeMove", function (eventData) {
    page = eventData.page;
    updateContent();
});

function updateContent() {
    let template = "";
    for (let i = (page - 1) * 10; i < page * 10; i++) {
        template += `
        <div class="blog-card">
        <img src="https://picsum.photos/250/?random=${i}" class="blog-image" alt="">
        <h2 class="blog-title">${response[i].title}</h2>
        <p class="blog-overview">${response[i].body}</p>
        <a href="login.html" class="btn dark">Read more</a>
       </div>`;
    }
    document.querySelector('.blogs-section').innerHTML = template;
}



////////
document.querySelector('.publish-btn').addEventListener('click', () => {
    const val = `<div class="blog-card">
        <img src="https://picsum.photos/250/?random=${Math.random()}" class="blog-image" alt="">
        <h2 class="blog-title">${document.querySelector('.title').value}</h2>
        <p class="blog-overview">${document.querySelector('.article').value}}</p>
        <a href="login.html" class="btn dark">Read more</a>
       </div>`;

    document.querySelector('.blogs-section').innerHTML += val;
})