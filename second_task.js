const button = document.getElementById('button');
const body = document.getElementById('body');
const title = document.getElementById('title');
const content = document.getElementById('content');

button.onclick = function (e) {
    e.preventDefault();

    let post = {
        title: title.value,
        body: body.value

    }

    fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(res => res.json())
.then(post => {
    console.log(post);
    const newPost = document.createElement('div');

    newPost.innerHTML = (`<h2>${post.title}</h2>
    <div>${post.body}</div>`);
        
    content.appendChild(newPost);
    document.getElementById("form").reset();
})
.catch(error => console.log(error))
}