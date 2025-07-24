const blogs = [
    {
        category: "Product Review",
        title: "Kids school bags",
        image: "https://m.media-amazon.com/images/I/61FfJ+vlOCL._SX679_.jpg",
        purchase_link: "https://amzn.to/3GEKAji", // Add purchase link
        content: `
        <div class="mb-3">
            <div class="">
                <h2 class="card-title">#ProductReview</h2>
                <p class=""Skybags Buddy 03 Dino 20 Liters Premium Polyester Fabric School Backpack for Kids with Multiple Compartments and Adjustable Strap - Boys & Girls</p>
               
              
                
                <p class="">Have you tried this product? Share your thoughts in the comments!</p>
                
                <p class="">That's all for today.</p>
                
                <p class="">Signing off,</p>
                <p class="">Piyush Agrawal</p>
            </div>
        </div>
        `,
        created_date: "19 July 2025"
    },
   




];


// Function to extract URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to display the single blog article
function displayBlog() {
    const blogId = getParameterByName('id') - 1;
    const blog = blogs[blogId];

    if (blog) {
        const blogContent = document.getElementById('blog-content');
        const html = `
        <div class="single-blog">
            <div class="single-blog-image" style="background-image: url(${blog.image});"></div>
            <h2>${blog.title}</h2>
            <div class="purchase-button">
                <a href="${blog.purchase_link}" target="_blank" class="btn btn-primary">Buy Now</a>
            </div>
            <p class="single-blog-category">${blog.category}</p>
            <p class="single-blog-date">${blog.created_date}</p>
            <div class="single-blog-content">
                ${blog.content}
            </div>
        </div>
        `;
        blogContent.innerHTML = html;
    } else {
        const blogContent = document.getElementById('blog-content');
        blogContent.innerHTML = '<p>Blog not found.</p>';
    }
}


// Call the function to display the blog on page load
document.addEventListener('DOMContentLoaded', displayBlog);
