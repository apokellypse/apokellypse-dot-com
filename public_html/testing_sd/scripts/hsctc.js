function swap(one, two) {
	document.getElementById(one).style.display = 'block';
	document.getElementById(two).style.display = 'none';
}
function show(element) {
	document.getElementById(element).style.display = 'block';
}
function hide(element) {
	document.getElementById(element).style.display = 'none';
}
//technically I could condense functions by making a single function for show/hide using a toggle but whatever
function highlight(element) {
	document.getElementById(element).style.color = '#9DCC5A';
}
function dehighlight(element) {
	document.getElementById(element).style.color = '#959595';
}