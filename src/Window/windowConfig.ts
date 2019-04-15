import { Menu, app, BrowserWindow } from 'electron'

interface WindowSize {
  w: number
  h: number
}

export let MainWindow: BrowserWindow

export module WindowSettings {
  // Window Properties
  export let windowSize: WindowSize = {
    w: 800,
    h: 800
  }
  export let fullscreen: boolean = false

  export let windowConfig: Electron.BrowserWindowConstructorOptions
  
  export let menu: Menu

  // index location
  export let indexPath: string

  // Document Properties
  export let windowTitle: string = "PaletteInstance"

}

export function createMainWindow () {
  // Override window config
  WindowSettings.windowConfig.fullscreen = WindowSettings.fullscreen

  // Init the window
  MainWindow = new BrowserWindow(WindowSettings.windowConfig)

  MainWindow.loadFile(WindowSettings.indexPath)
  MainWindow.setMenu(WindowSettings.menu)

  // Create events
  MainWindow.once('ready-to-show', () =>{
    MainWindow.show()
  })
  MainWindow.on('closed', () =>{
    MainWindow = null
  })
}

export function startApp () {
  app.on('ready', createMainWindow)
  app.on('quit', () => {
    if (process.platform != 'darwin') {
      app.quit()
    }
  })
  app.on('activate', ()=> {
    if (MainWindow == null) {
      createMainWindow()
    }
  })
}