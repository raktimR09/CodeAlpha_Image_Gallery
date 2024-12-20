const galleryImages = document.querySelectorAll('.gallery-container img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

galleryImages.forEach(image => {
image.addEventListener('click', () => {
modal.style.display = 'flex';
    modalImage.src = image.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});