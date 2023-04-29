const content = document.getElementById('content');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
      data.forEach(element => {
        const newPost = document.createElement('div');

        newPost.innerHTML = (`<h2>${element.title}</h2>
        <div>${element.body}</div>`);
        
        content.appendChild(newPost);
      }); 
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });