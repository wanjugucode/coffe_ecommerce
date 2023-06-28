document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
  });

document.querySelector('.close').addEventListener('click', function() {
    this.classList.toggle('active')
});
