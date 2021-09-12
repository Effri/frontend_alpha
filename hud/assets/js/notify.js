function notify(type, layout, message, time) {
    var types = ['alert', 'error', 'success', 'information', 'warning'];
    var layouts = ['bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter', 'bottomCenter'];
    var icons = ['<img src="./assets/images/icons/notification/info.png">', '<img src="./assets/images/icons/notification/error.png">', '<img src="./assets/images/icons/notification/success.png">', '<img src="./assets/images/icons/notification/info.png">', '<img src="./assets/images/icons/notification/warning.png">']
    message = '<div class="notify-block"><div class="notify-icons">' + icons[type] + '</div><div class="notyfi-message">' + message + '</div></div>';
    new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: 'fivestar',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        }
    }).show();
}