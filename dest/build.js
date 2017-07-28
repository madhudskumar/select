window.onload = function () {
    transSelectBox();
    handleDD();
};
function transSelectBox() {
    var $selectBox = document.getElementById('select-box');
    $selectBox.classList.add('hidden');
}
function handleDD() {
    var $dd = document.getElementById('dd');
    var $li = document.getElementById('list-item').classList;
    var _hidden = 'hide';
    var _active = 'active';
    $dd.addEventListener('click', function () {
        $li.toggle(_hidden);
        $dd.classList.toggle(_active);
    });
}
