import { Menu, BrowserWindow } from 'electron'

interface WindowSize {
  w: number
  h: number
}

export let MainWindow: BrowserWindow 

export module WindowSettings {
  export let windowSize: WindowSize = {
    w: 800,
    h: 800
  }
  
  export let menu: Menu
}