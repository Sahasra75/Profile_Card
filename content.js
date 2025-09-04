
 
  document.getElementById('contactBtn').addEventListener('click', function () {
    // Replace with actual email or contact page
    window.location.href = "mailto:devisahasra18@gmail.com";
  });

  // Optional: open links in new tab even if not using target="_blank"
//   document.querySelectorAll('.socials a').forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       window.open(this.href, '_blank');
//     });
//   });

//   const contactBtn = document.getElementById('contactBtn');
//   const popupForm = document.getElementById('popupForm');
//   const closePopup = document.getElementById('closePopup');

//   contactBtn.addEventListener('click', () => {
//     popupForm.style.display = 'flex';
//   });

//   closePopup.addEventListener('click', () => {
//     popupForm.style.display = 'none';
//   });

//   // Close popup if clicked outside the form
//   window.addEventListener('click', (e) => {
//     if (e.target === popupForm) {
//       popupForm.style.display = 'none';
//     }
//   });