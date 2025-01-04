<?php
// functions.php

// Enqueue Styles and Scripts
function cat_api_enqueue_assets() {
    wp_enqueue_style('cat-api-style', get_template_directory_uri() . '/style.css'); // Caminho para o style.css
    wp_enqueue_script('cat-api-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'cat_api_enqueue_assets');
?>
