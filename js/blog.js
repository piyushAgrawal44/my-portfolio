// Static array of blog data
const blogs = [
    {
        category: "New Youtube Feature",
        title: "Enhancing Interaction on YouTube: New Future of Comment Sections",
        image: "https://images.unsplash.com/photo-1523474438810-b04a2480633c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D",
        content: "Content for the second blog article.",
        created_date: "06 July 2024"
    },
    {
        category: "Internshala UX Enhancement",
        title: "Optimizing Internshala: Proposing a User-Friendly Resume Feature",
        image: "https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Content for the first blog article.",
        created_date: "03 June 2024"
    },
];

// Function to dynamically generate blog articles using innerHTML
function generateBlogArticles() {
    const blogList = document.getElementById('blog-list');
    let html = '';

    blogs.forEach((blog,index) => {
        html += `
        <a class="decoration-none" href="./single-blog.html?id=${index+1}">
            <div class="article" style="background-image: url(${blog.image});">
                <div class="overlay"></div>
                <div class="wrap-cat">
                    <span class="cat" data-hover="${blog.category}">${blog.category}</span>
                </div>
                <h1><span>${blog.title}</span></h1>
                <p class="text-light">${blog.created_date}</p>
            </div>
        </a>
        `;
    });

    blogList.innerHTML = html;
}

// Call the function to generate blog articles on page load
document.addEventListener('DOMContentLoaded', generateBlogArticles);
