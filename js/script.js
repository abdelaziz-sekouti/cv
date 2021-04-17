//Select all ancre
var ancre = document.querySelectorAll('.ancre');
document.querySelector('.ancre:nth-child(1)').parentElement.parentElement.style.backgroundColor = '#030';
document.querySelector('.ancre:nth-child(1)').parentElement.parentElement.style.color = '#ccc';
// loop through all ancre
Array.from(ancre).forEach(function(anc) {
	// anc.firstElementChild.parentElement.parentElement.style.backgroundColor = '#f00';
	anc.addEventListener('click', deploier, true);
	//stop event propagation to child
	anc.firstElementChild.addEventListener('click', function(e) {
		e.stopPropagation();
	});
});
//function to call when  ancre is clicked
function deploier(e) {
	ancre.forEach(function(anc) {
		//reset chevron right class to all span ancre's child
		anc.firstElementChild.className = 'glyphicon glyphicon-triangle-right';
		anc.parentElement.parentElement.style.backgroundColor = '#f5f5f5';
		anc.parentElement.parentElement.style.color = '#000';

		// check if collapsed div is collapse or not
		if (e.target.parentElement.parentElement.nextElementSibling.classList.contains('in')) {
			//div not collapse then affect chevron right to span
			e.target.firstElementChild.className = 'glyphicon glyphicon-triangle-right';
			e.target.parentElement.parentElement.style.backgroundColor = '#f5f5f5';
			e.target.parentElement.parentElement.style.color = '#000';
		}
		else {
			//div  collapsed then affect chevron down to span
			e.target.firstElementChild.className = 'glyphicon glyphicon-triangle-bottom';
			e.target.parentElement.parentElement.style.backgroundColor = '#030';
			e.target.parentElement.parentElement.style.color = '#ccc';
		}
	});
}
