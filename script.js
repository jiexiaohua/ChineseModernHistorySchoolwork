function showContent(contentId) {
    // Hide main content
    document.getElementById('main-content').style.display = 'none';
    
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    // Show selected content with animation
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove('hidden');
    // Trigger reflow
    void selectedContent.offsetWidth;
    selectedContent.classList.add('active');
}

function showMain() {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    // Show main content
    document.getElementById('main-content').style.display = 'block';
} 