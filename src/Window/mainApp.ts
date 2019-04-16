
import { app, BrowserWindow, BrowserWindowConstructorOptions, Menu } from 'electron';
import { Page } from './page';


function ifDocumentExists (run: Function): void {
  if (!document == undefined) {
    run()
  }
}

interface MainAppOptions {
  waitToShow?: boolean
}

export class MainApp {
  window: BrowserWindow
  settings: BrowserWindowConstructorOptions

  menu: Menu = null

  // Documents
  indexPage: Page
  pages: Page[]

  // Configuration
  appConfig: MainAppOptions

  // Functions
  private createWindow (): void {
    this.window = new BrowserWindow(this.settings)

    this.window.loadFile(this.indexPage.path)
    this.window.setMenu(this.menu)

    // Events
    if (this.appConfig.waitToShow) {
      this.window.hide()

      this.window.once('ready-to-show', () =>{
        this.window.show
      })
    }

    this.window.on('closed', () => {
      this.window = null
    })
  }
  public startApp (): void {
    app.on('ready', ()=>{
      this.createWindow()
    })
    app.on('quit', ()=> {
      if (process.platform != 'darwin') {
        app.quit()
      }
    })
    app.on('activate', ()=>{
      if (this.window == null) {
        this.createWindow()
      }
    })
  }

  // Constructor
  constructor (
    settings?: BrowserWindowConstructorOptions,
    indexPage?: Page,
    pages?: Page[]
  ) {
    this.settings = settings
    this.indexPage = indexPage
    this.pages = pages
  }
}