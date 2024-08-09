document.addEventListener('DOMContentLoaded', function () {
    // Open modal
    document.querySelectorAll('[class^="openModal-"]').forEach(function (openModalLink) {
        openModalLink.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('modal').style.display = 'block';
        });
    });

    // Close modal when clicking on the close button
    document.getElementById('closeModal').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal').style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    });
});
