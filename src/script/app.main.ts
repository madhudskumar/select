window.onload = () => {
    transSelectBox();
    handleDD();
};

function transSelectBox() {
    const $selectBox = document.getElementById('select-box');
    $selectBox.classList.add('hidden');
}

function handleDD(){
    const $dd = document.getElementById('dd');
    const $li = document.getElementById('list-item').classList;
    const _hidden = 'hide';
    const _active = 'active';

    $dd.addEventListener('click', () => {
        $li.toggle(_hidden);
        $dd.classList.toggle(_active)
    })
}
