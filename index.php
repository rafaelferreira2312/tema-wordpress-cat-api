<?php get_header(); ?>

<main>
    <h1>Take a Look at Some of Our Pets</h1>

    <div class="search-bar">
        <input type="text" placeholder="Search..." id="search">
        <button id="view-favorites">My Favorites</button>
    </div>

    <div class="cat-grid" id="cat-grid">
        <!-- Cat cards will be loaded here dynamically -->
    </div>

    <div class="pagination" id="pagination-serach">
        <button class="pagination-btn" id="prev">&laquo; Previous</button>
        <span id="page-indicator">Page 1</span>
        <button class="pagination-btn" id="next">Next &raquo;</button>
    </div>
</main>

<?php get_footer(); ?>
