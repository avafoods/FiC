// Lightweight interactivity: open mailto for membership, simple RSVP simulation
document.addEventListener('DOMContentLoaded', function(){
  const rsvpForms = document.querySelectorAll('.rsvp-form');
  rsvpForms.forEach(f => {
    f.addEventListener('submit', function(e){
      e.preventDefault();
      const name = f.querySelector('[name=name]').value || 'Friend';
      alert('Thank you, ' + name + '! Your RSVP has been noted. We will follow up by email.');
      f.reset();
    })
  })
});
