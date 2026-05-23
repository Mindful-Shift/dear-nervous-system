
// Bank subscribe
function bankSubscribe() {
  document.getElementById('bankSuccess').style.display = 'block';
}

// Cancel
function cancelSub() {
  const email = document.getElementById('cancelEmail').value.trim();
  if (!email || !email.includes('@')) {
    document.getElementById('cancelEmail').style.borderColor = '#c0614a';
    return;
  }
  document.getElementById('cancelMsg').style.display = 'block';
  document.getElementById('cancelEmail').style.borderColor = '';
}