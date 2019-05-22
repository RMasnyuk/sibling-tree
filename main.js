const outerUL = document.querySelector('.tree');
const li = outerUL.querySelectorAll('li');

for (let i = 0; i < li.length; i++ ) {
    const span = document.createElement('span');
    li[i].insertBefore(span, li[i].firstChild);
    span.append(span.nextSibling);
}

outerUL.addEventListener('click', hideElements);
function hideElements (event) {
const target = event.target;
if (target.nodeName === 'SPAN') {
    let childrenUL = target.parentNode.querySelector('ul');
    childrenUL.hidden = !childrenUL.hidden;
}
}
