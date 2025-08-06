 document.addEventListener('DOMContentLoaded', function() {

            const blogPosts = [
                {
                    id: 1,
                    title: "My First HTML Page",
                    excerpt: "The excitement and challenges of creating my very first HTML page from scratch.",
                    category: "html",
                    date: "May 15, 2024",
                    
                    content: "content1.html"
                },                {
                    id: 2,
                    title: "CSS Flexbox Magic",
                    excerpt: "How learning Flexbox transformed my approach to layout design.",
                    category: "css",
                    date: "June 2, 2024",
                   
                    content: "content2.html"
                },{
                    id: 3,
                    title: "JavaScript Event Listeners",
                    excerpt: "Understanding how to make web pages interactive with event listeners.",
                    category: "js",
                    date: "June 18, 2024",
                    
                    content: "content3.html"
                },
                {
                    id: 4,
                    title: "Building My First Project",
                    excerpt: "The journey of planning, coding, and deploying my first complete web project.",
                    category: "projects",
                    date: "July 5, 2024",
                    
                    content: "content4.html"
                },
                {
                    id: 5,
                    title: "CSS Grid vs Flexbox",
                    excerpt: "When to use Grid and when to stick with Flexbox for layouts.",
                    category: "css",
                    date: "July 22, 2024",
                  
                    content: "content5.html"
                },
{
                    id: 6,
                    title: "DOM Manipulation Basics",
                    excerpt: "How JavaScript lets you interact with and modify web pages dynamically.",
                    category: "js",
                    date: "August 10, 2024",
              
                    content: "content6.html"
                }
            ];
             // Function to render blog posts
            function renderPosts(posts) {
                const blogPostsContainer = document.getElementById('blogPosts');
                blogPostsContainer.innerHTML = '';
                
                if (posts.length === 0) {
                    blogPostsContainer.innerHTML = '<p>No posts found in this category.</p>';
                    return;
                }
                
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = `post-card ${post.category}`;
                    postElement.innerHTML = `
                        <div class="post-image" style="background-image: url('${post.image}')"></div>
                         <div class="post-content">
                            <h2>${post.title}</h2>
                            <div class="post-meta">
                                <span>${post.category.toUpperCase()}</span>
                                <span>${post.date}</span>
                            </div>
                            <p class="post-excerpt">${post.excerpt}</p>
                            <a href="${post.content}" class="read-more">Read More</a>
                        </div>
                    `;
                    blogPostsContainer.appendChild(postElement);
                });
            }
            
            // Initial render of all posts
            renderPosts(blogPosts);
            
            // Category filtering
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active button
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    const category = button.dataset.category;
                    
                    if (category === 'all') {
                        renderPosts(blogPosts);
                    } else {
                        const filteredPosts = blogPosts.filter(post => post.category === category);

                        renderPosts(filteredPosts);
                    }
                });
            });
            
            // Simple search functionality (could be enhanced)
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Search posts...';
            searchInput.style.margin = '1rem 0';
            searchInput.style.padding = '0.5rem';
            searchInput.style.width = '100%';
            searchInput.style.maxWidth = '500px';
            searchInput.style.borderRadius = '4px';
            searchInput.style.border = '1px solid #ccc';
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredPosts = blogPosts.filter(post => 
                    post.title.toLowerCase().includes(searchTerm) || 
                    post.excerpt.toLowerCase().includes(searchTerm)
                );
                renderPosts(filteredPosts);
            });
            
            // Insert search input before blog posts
            const blogPostsSection = document.getElementById('blogPosts');
            blogPostsSection.parentNode.insertBefore(searchInput, blogPostsSection);
        });
