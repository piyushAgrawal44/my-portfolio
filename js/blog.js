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

const productReviews = [
    {
        category: "Product Review",
        title: "hoop Magnesium Sleep Body Lotion | Topical Magnesium Chloride Supplement for Muscle Recovery, Better Sleep | Magnesium Oil Supports Deep Sleep, Recovery from Cramps, Fitness | 250 ml",
        image: "https://m.media-amazon.com/images/I/71zRBjJvF+L._SX679_.jpg",
        content: "Magnesium sleep lotion has magnesium oil, lavender that relax muscles for natural good sleep support",
        created_date: "19 Feb 2025"
    },
    {
        category: "Product Review",
        title: "FARM BIONICS Combo of Guava Flavour Vitamin B12 and Muskmelon Flovour Vitamin D3 Oral Spray, 30ml | 100% Vegetarian",
        image: "https://m.media-amazon.com/images/I/710YzKz--eL._SX679_.jpg",
        content: "FARM BIONICS Combo of Guava Flavour Vitamin B12 and Muskmelon Flovour Vitamin D3 Oral Spray, 30ml | 100% Vegetarian | Sugar and Gluten Free | Immunity Booster Spray for Men and Women",
        created_date: "19 Feb 2025"
    },
    {
        category: "Product Review",
        title: "She Essentials Lavender Essential Oil Combo for Hair Nourishment, Moisturizing Skin - 100% Pure, Natural and Undiluted Oil, For Healthy Hair & Growth, Skin, Hair Fall Control and Relaxing Sleep | 2x5ml",
        image: "https://m.media-amazon.com/images/I/61UDQ55JMQL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
        content: "100% pure and natural lavender essential oil that nourishes hair, moisturizes skin, and promotes relaxation for better sleep.",
        purchase_link: "https://amzn.to/4i5QkQ4",
        created_date: "19 Feb 2025"
    },
    {
        category: "Product Review",
        title: "BLUE TEA - Chamomile Tea - 30 g - 30+ Cups | SLEEP & RELAXATION | Herbal Tea - Caffeine Free - Flower Based - Non-Bitter - Non-GMO | Featured In Shark Tank | Reusable Pet Jar",
        image: "https://m.media-amazon.com/images/I/61CGFIrP6vL._SX679_.jpg",
        content: "A caffeine-free herbal tea made from chamomile flowers, promoting relaxation, stress relief, and better sleep.",
        purchase_link: "https://amzn.to/3ELeWzf",
        created_date: "19 Feb 2025"
    }
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

// Function to dynamically generate blog articles using innerHTML
function generateProductReviewArticles() {
    const blogList = document.getElementById('product-review-list');
    let html = '';

    productReviews.forEach((blog,index) => {
        html += `
        <a class="decoration-none" href="./single-product-review.html?id=${index+1}">
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
document.addEventListener('DOMContentLoaded', function(){
    generateBlogArticles();
    generateProductReviewArticles();
});
