function notify(type, layout, message, time) {
    var types = ['alert', 'error', 'success', 'information', 'warning'];
    var layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
    var icons = [`
    <div class="border"></div>
    <img src="./res_phoenix/img_phoenix/icon-notify/question.svg" width="25px">`, 
    `
    <div class="border"></div>
    <img src="./res_phoenix/img_phoenix/icon-notify/error.svg" width="25px">`, 
    `
    <div class="border"></div>
    <img src="./res_phoenix/img_phoenix/icon-notify/success.svg" width="25px">`, 
    `
    <div class="border"></div>
    <img src="./res_phoenix/img_phoenix/icon-notify/info.svg" width="25px">`, 
    `
    <div class="border"></div>
    <img src="./res_phoenix/img_phoenix/icon-notify/warning.svg" width="25px">
     `]
    message = '<div class="text">' + icons[type] + message + '</div>';
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