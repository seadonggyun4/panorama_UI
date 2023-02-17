const { app, BrowserWindow, Menu  } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1500,
        height: 800,
    });
    window.loadFile("index.html");

    const template = [
        {
            label: "도메인설정",
            submenu: [
                {label: "삭제"},
                {label: "수정"},
            ],
        },
        {
            label: "페이지설정",
            submenu: [
                {label: "삭제"},
                {label: "수정"},
            ],
        },
        {
            label: "재시작",
            click: ()=>{
                window.webContents.executeJavaScript(`
                    localStorage.clear();
                    window.location.reload();
                `)
            }
        },
    ];

    const customMenu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(customMenu)
};


app.whenReady().then(() => {
    createWindow();
})