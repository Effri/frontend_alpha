dataRespawn = '';

function set(data) {
    data = JSON.parse(data);
    dataRespawn = data;
    $('#spawn-select').css('display', 'flex');

    if (data[2] !== true) {
        $('#home').removeClass('active');
        $('.home-key').html('У ВАС НЕТ ДОМА');
        $('#home-spawn button').prop("disabled", true);
        $('#home-spawn button').addClass('disable');
        $('#home-spawn button').html('НЕДОСТУПНО');
    }

    if (data[1] !== true) {
        $('#org').removeClass('gun');
        $('.org-key').html('У ВАС НЕТ ОРГАНИЗАЦИИ');
        $('#org').addClass('noorg');
        $('#org-spawn button').prop("disabled", true);
        $('#org-spawn button').addClass('disable');
        $('#org-spawn button').html('НЕДОСТУПНО');
    }
    console.log($('#org b'))
}

function spawn(id) {
    mp.trigger('spawn', id);
}