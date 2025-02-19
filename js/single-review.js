const blogs = [
    {
        category: "Product Review",
        title: "hoop Magnesium Sleep Body Lotion | Topical Magnesium Chloride Supplement for Muscle Recovery, Better Sleep | Magnesium Oil Supports Deep Sleep, Recovery from Cramps, Fitness | 250 ml",
        image: "https://m.media-amazon.com/images/I/71zRBjJvF+L._SX679_.jpg",
        purchase_link: "https://amzn.to/4gMYjjN", // Add purchase link
        content: `
        <div class="mb-3">
            <div class="">
                <h2 class="card-title">#ProductReview</h2>
                <p class="">Magnesium sleep lotion contains magnesium oil and lavender, which help relax muscles for natural sleep support.</p>
                
                <p class="">This lotion is designed for individuals struggling with sleep disorders, muscle cramps, or post-workout recovery. The presence of magnesium chloride aids muscle relaxation, while lavender provides a calming aroma, making it an excellent addition to your nighttime routine.</p>

                <p class="">Applying the lotion before bed may help improve sleep quality and reduce muscle stiffness, providing a holistic solution for better relaxation.</p>
                
                <hr>
                
                <h3 class="card-title">#KeyBenefits</h3>
                
                <ul class="list-group list-group-numbered">
                    <li class="">Supports deep sleep naturally with magnesium and lavender.</li>
                    <li class="">Helps in muscle recovery, reducing cramps and discomfort.</li>
                    <li class="">Absorbs quickly without a greasy residue.</li>
                </ul>

                <hr>
                
                <p class="">Have you tried this product? Share your thoughts in the comments!</p>
                
                <p class="">That's all for today.</p>
                
                <p class="">Signing off,</p>
                <p class="">Piyush Agrawal</p>
            </div>
        </div>
        `,
        created_date: "19 Feb 2025"
    },
    {
        category: "Product Review",
        title: "FARM BIONICS Combo of Guava Flavour Vitamin B12 and Muskmelon Flavour Vitamin D3 Oral Spray, 30ml | 100% Vegetarian",
        image: "https://m.media-amazon.com/images/I/710YzKz--eL._SX679_.jpg",
        purchase_link: "https://amzn.to/4gJ3RvD", // Add purchase link
        content: `
        <div class="mb-3">
            <div class="">
                <h2 class="card-title">#ProductReview</h2>
                <p class="">FARM BIONICS Vitamin B12 and Vitamin D3 oral spray offers a convenient way to support immunity and overall well-being.</p>
                
                <p class="">With a refreshing guava and muskmelon flavor, this oral spray is perfect for those who struggle with traditional pills. It is 100% vegetarian, sugar-free, and gluten-free, making it suitable for a wide range of dietary preferences.</p>

                <p class="">Vitamin B12 plays a crucial role in energy production and brain function, while Vitamin D3 is essential for bone health and immune support. This spray makes it easy to maintain optimal levels of these vital nutrients.</p>
                
                <hr>
                
                <h3 class="card-title">#KeyBenefits</h3>
                
                <ul class="list-group list-group-numbered">
                    <li class="">Quick and effective absorption with oral spray technology.</li>
                    <li class="">Boosts immunity and supports overall well-being.</li>
                    <li class="">Delicious guava and muskmelon flavors.</li>
                    <li class="">Sugar-free, gluten-free, and 100% vegetarian.</li>
                </ul>

                <hr>
                
                <p class="">Have you used this product before? Share your experience in the comments!</p>
                
                <p class="">That's all for today.</p>
                
                <p class="">Signing off,</p>
                <p class="">Piyush Agrawal</p>
            </div>
        </div>
        `,
        created_date: "19 Feb 2025"
    }
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
