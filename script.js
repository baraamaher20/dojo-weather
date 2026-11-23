const cityLinks = document.querySelectorAll('.city-link');

cityLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    alert('Loading weather report for ' + link.textContent + '...');
  });
});
var btn=document.getElementById('btn');
function disappear(btn) {
  btn.closest('.cookie-card').classList.add('hidden');
}

const select = document.querySelector('select');
select.addEventListener('change', function() {
  const tempHighs = document.querySelectorAll('.temp-high');
  const tempLows = document.querySelectorAll('.temp-low');

  tempHighs.forEach(function(temp) {
    convertTemp(temp);
  });

  tempLows.forEach(function(temp) {
    convertTemp(temp);
  });
});

function convertTemp(element) {
  const current = parseFloat(element.textContent);

  if (select.value === '°F') {
    element.textContent = Math.round(current * 9/5 + 32) + '°';
  } else {
    element.textContent = Math.round((current - 32) * 5/9) + '°';
  }
}