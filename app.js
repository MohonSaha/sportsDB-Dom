
const vanishButton = document.getElementById("load-button").style.display = "block";

const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data))
}

// Auto load option 
// loadComments();

const displayComments = comment => {
    // console.log(comment);
    const commentsField = document.getElementById("display-comments");
    const vanishButton = document.getElementById("load-button").style.display = "none";
    comment.forEach(comment => {
        console.log(comment);
        const div = document.createElement("div");
        div.classList.add('style-comments')
        div.innerHTML = `     
                <h4> ${comment.id} </h4>
                <h6> ${comment.name} </h6>
                <h6> ${comment.email} </h6>
                <button onClick =" loadMoreData(${comment.id})"  type="button" class="btn btn-info mt-4" id="load-button">See More</button>
                
        `
    commentsField.appendChild(div);
    });
}

const loadMoreData = commentId => {
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMoreDetails(data))
}

const displayMoreDetails = comment => {
    const detailField = document.getElementById("load-details");
    detailField.textContent ='';
    // console.log(detailField);
    const div = document.createElement("div");
    div.classList.add('style-details');
    div.innerHTML = `
        <h3> ${comment.id} </h3>
        <p> ${comment.body}
    `
detailField.appendChild(div);
}