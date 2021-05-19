document.querySelector('#get-text').addEventListener('click',getText);
document.querySelector('#get-users').addEventListener('click',getUsers);
document.querySelector('#get-ext-posts').addEventListener('click',getExternalPosts);
document.querySelector('#add-post').addEventListener('submit',addPost);

// FUNCTION TO GET SAMPLE TEXT
function getText()
{
    // ES5 
    /*
    fetch('sample.txt')
    .then(function(res){
        // will return request object like xhr before
        //console.log(res);

        // will use the prototype text() to return textt in the file
        //console.log(res.text());

        // would use the prototype jsond() to  return json response if the content in the file were a json response
        //console.log(res.json());

        // we can handle status with conditionals as xhr before
        if (res.status == 200)
        {
            return res.text();
        }
        else if (res.status == 404)
        {
            console.log('not file found');
            return 'file not found';
        }
    })
    .then(function(data){
        // will print the text content in the file because we return res.text() in previous then
        console.log(data);
    })
    */

    // ES6 validating error before
    /*
    fetch('sample.txt')
    .then((res) => {
        if (res.status == 200)
        {
            // only return text content of all object
            return res.text()
        } 
        else if (res.status == 404)  
        {
            return 'File not found'
        }
    })
    .then((data) => {
        document.querySelector("#output").innerHTML = data;
    })
    */

   // ES6 Catching error with Catch
 
   /* 
   fetch('sample2.txt')
    .then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.text();
    })
    .then((data) => document.querySelector("#output").innerHTML = data)
    .catch((err) => document.querySelector("#output").innerHTML = err)
    */

    // ES6 Catching error with Catch with generic handle Errors function
 
    fetch('sample.txt')
    .then(sampleTexthandleErrors)
    .then((data) => document.querySelector("#output").innerHTML = data)
    .catch((err) => document.querySelector("#output").innerHTML = err)
    
}
// generic handle error function
function sampleTexthandleErrors(res) {
    if (!res.ok) { 
        throw Error(res.statusText);
    }
    return res.text();
}

// FUNCTION TO GET USERS FROM JSON FILE
function getUsers()
{
    // ES6 
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>users</h2>';
        data.forEach(function(user){
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            
            `
        })
        document.querySelector("#output").innerHTML = output
        
    })
    
    
}

// FUNCTION TO GET EXTERNAL POSTS FROM EXTERNAL JSON API
function getExternalPosts()
{
    // ES6 
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
    fetch(requestUrl)
    .then((res) => res.json())
    .then((posts) => {
        let output = '<h2>Posts</h2>';
        posts.forEach(function(post){
            output += `
                <div class="post card card-body mb-3" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <div class="post-content">${post.body}</div>
                    <div class="link"><a href="${requestUrl}/${post.id}" target = "_blank">Read this post</a></div>
                </div>
            
            `
        })
        document.querySelector("#output").innerHTML = output
        
    })
    
    
}

// FUNCTION TO ADD JSON POST 
function addPost(ev)
{
    ev.preventDefault();
    // using FormData
    //let form = new FormData(this);
    //console.log(form.get(title));

    let title = this.title.value;
    let body = this.body.value;

    // ES6 
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => res.json())
    // append to output element 
    .then((data) => appendPostDom(data,document.querySelector('#output'), 'https://jsonplaceholder.typicode.com/posts'))
    
}

function appendPostDom(post, container, requestUrl) 
{
    console.log(post);

    html = `
        <div class="post card card-body mb-3" id="post-${post.id}">
            <h3>${post.title}</h3>
            <div class="post-content">${post.body}</div>
            <div class="post-author">User id: ${post.userId}</div>
            <div class="link"><a href="${requestUrl}/${post.id}" target = "_blank">Read this post</a></div>
        </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = html;
    container.appendChild(div);
}
