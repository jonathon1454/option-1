// View Management
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`${viewName}-view`) ||
                      document.getElementById('dashboard-view');
    targetView.classList.add('active');

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize interactions when page loads
document.addEventListener('DOMContentLoaded', function() {

    // Metric Card Click Handlers
    const openTicketsCard = document.getElementById('openTicketsCard');
    const closedTicketsCard = document.getElementById('closedTicketsCard');

    openTicketsCard.addEventListener('click', function() {
        showView('open-tickets');
    });

    closedTicketsCard.addEventListener('click', function() {
        showView('closed-tickets');
    });

    // Filter Button Handler
    const filterButton = document.getElementById('filterButton');
    const filterPanel = document.getElementById('filterPanel');

    filterButton.addEventListener('click', function() {
        filterPanel.classList.add('active');
    });

    // Close filter panel when clicking outside
    filterPanel.addEventListener('click', function(e) {
        if (e.target === filterPanel) {
            filterPanel.classList.remove('active');
        }
    });

    // Apply Filters Button
    const applyButton = filterPanel.querySelector('.apply-button');
    applyButton.addEventListener('click', function() {
        // Get selected filters
        const dateFilters = Array.from(filterPanel.querySelectorAll('input[name="date"]:checked'))
            .map(input => input.value);
        const statusFilters = Array.from(filterPanel.querySelectorAll('input[name="status"]:checked'))
            .map(input => input.value);

        console.log('Applying filters:', { dateFilters, statusFilters });

        // Close panel
        filterPanel.classList.remove('active');

        // In a real app, you would filter the data here
        // For now, just show a message
        if (dateFilters.length > 0 || statusFilters.length > 0) {
            console.log('Filters applied successfully!');
        }
    });

    // Bar hover interactions (tooltips are handled via CSS :hover)
    const openBar = document.getElementById('openBar');
    const closedBar = document.getElementById('closedBar');

    // Add click handlers to bars for mobile
    openBar.addEventListener('click', function() {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    });

    closedBar.addEventListener('click', function() {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    });

    // Animate bars on load
    setTimeout(() => {
        const barFills = document.querySelectorAll('.bar-fill');
        barFills.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 300);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes filter panel
        if (e.key === 'Escape' && filterPanel.classList.contains('active')) {
            filterPanel.classList.remove('active');
        }
    });

    console.log('Dashboard loaded successfully!');
    console.log('Interactions:');
    console.log('- Click metric cards to view details');
    console.log('- Click filter button to show filters');
    console.log('- Hover over bars to see tooltips');
    console.log('- Click back buttons to return to dashboard');
});

// Export for potential use in other contexts
window.dashboardApp = {
    showView,
    version: '1.0.0',
    author: 'Built with Claude Code'
};
