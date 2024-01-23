const link1 = document.querySelector('.link-js1');
const link2 = document.querySelector('.link-js2');
const link3 = document.querySelector('.link-js3');

function onSearch(event) {
  event.preventDefault();
  const clickedLink = event.currentTarget;
  if (clickedLink === link1) {
    link1.classList.add('current');
    link2.classList.remove('current');
    link3.classList.remove('current');
  } else if (clickedLink === link2) {
    link2.classList.add('current');
    link1.classList.remove('current');
    link3.classList.remove('current');
  } else if (clickedLink === link3) {
    link3.classList.add('current');
    link1.classList.remove('current');
    link2.classList.remove('current');
  }
  console.log('Clicked link:', event.currentTarget);
}

link1.addEventListener('click', onSearch);
link2.addEventListener('click', onSearch);
link3.addEventListener('click', onSearch);
