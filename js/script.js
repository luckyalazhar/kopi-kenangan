// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger').onclick = () =>{
	navbarNav.classList.toggle('active');
}

// ketika klik di luar menu
const menu = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
	if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});