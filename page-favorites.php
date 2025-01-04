<?php
/* Template Name: Favorites Page */
get_header();
?>

<main>
    <h1>Your Favorite Cats</h1>
    <section class="cat-grid" id="favorites-grid">
        <!-- Favorite cat cards will be dynamically inserted here -->
    </section>

    <!-- Pagination -->
    <div class="pagination" id="favorites-pagination">
        <button class="pagination-btn" id="prev">&laquo; Previous</button>
        <span id="page-indicator">Page 1</span>
        <button class="pagination-btn" id="next">Next &raquo;</button>
    </div>
</main>

<?php get_footer(); ?>
