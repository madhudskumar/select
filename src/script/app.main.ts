const $selectBox = document.getElementById('sb');
const $form = document.getElementById('select-form');
const $submit = document.getElementById('submit');
const _hidden = 'show';
const _active = 'active';
let $dd, $li, $listItem;

window.onload = () => {
    transSelectBox();
};

function transSelectBox() {
    $selectBox.classList.add('hidden');
    createDD();
    handleSubmit();
}

function createDD(){
    const replace = document.createElement('div');
    replace.id = 'replace';
    let iconRoot = '/icons/';

    //create button
    const dd = document.createElement('button');
    dd.id = 'dd';
    dd.type = 'button';
    const img = document.createElement('img');
    img.src = iconRoot + 'profile' + '.svg';
    img.id = 'img';
    dd.appendChild(img);
    const p = document.createElement('p');
    p.appendChild(document.createTextNode('profile'));
    dd.appendChild(p);
    const span = document.createElement('span');
    const img2 = document.createElement('img');
    img2.src = iconRoot + 'dd' + '.svg';
    span.appendChild(img2);
    dd.appendChild(span);
    replace.appendChild(dd);
    //btn complete


    //#listItem
    const options = ['settings', 'password', 'logout'];
    const ul = document.createElement('ul');

    //create list
    options.map((option) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const pad5 = document.createElement('div');

        img.src = iconRoot + option + '.svg';
        p.appendChild(document.createTextNode(option));
        pad5.setAttribute('class',"pad5");
        pad5.appendChild(img);
        pad5.appendChild(p);
        li.classList.add('options');
        pad5.addEventListener('click', handleOptionClick);
        li.appendChild(pad5);
        ul.appendChild(li);
    });

    const listItem = document.createElement('div');
    listItem.id = 'list-item';
    listItem.classList.add('hide');
    const imgTop = document.createElement('div');
    imgTop.classList.add('img-top');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    const dIcon = document.createElement('DIV');
    dIcon.classList.add('rect');
    icon.appendChild(dIcon);
    imgTop.appendChild(icon);
    listItem.appendChild(imgTop);
    listItem.appendChild(ul);

    replace.appendChild(listItem);
    $form.insertBefore(replace, $submit);

    handleDropDown();
}

function handleDropDown(){
    $dd = document.getElementById('dd');
    $listItem = document.getElementById('list-item');
    $li = document.getElementsByClassName('options');

    $dd.addEventListener('click', () => {
        toggle();
    });

}

function toggle (){
    this.$listItem.classList.toggle(_hidden);
    this.$dd.classList.toggle(_active);
}

function handleOptionClick(event){
    if(event.target !== this) return;

    let pad5 = event.target.childNodes;
    $dd.childNodes[0].src = pad5[0].src;
    $dd.childNodes[1].innerText = pad5[1].innerText;

    document.getElementById('select-box').value = pad5[1].innerText;
    toggle();
}

function handleSubmit(){
    $form.addEventListener('submit', (e) => {
        if($dd.childNodes[1].innerText == 'profile'){
            e.preventDefault();
            alert('select one in the dropdown');
            return;
        }
    })
}