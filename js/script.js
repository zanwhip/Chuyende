function openImageModal() {
  document.getElementById('imageModal').style.display = 'block';
}

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}
  
  function copyToClipboard() {
    const copyText = document.getElementById('shareLinkInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert('Link copied to clipboard!');
  }
  