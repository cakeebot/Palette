import { types } from '../Utility/elixir';

class InputKey {
  keyCode: number
  key: string

  pressedDown: boolean = false

  private togglePressed(key: Event): void {
    if (this.pressedDown) {
      this.pressedDown = false
    } else {
      this.pressedDown = true
    }
  }

  public addListeners () {
    document.addEventListener('keydown', (key: KeyboardEvent) => {
      this.togglePressed(key)
    })
    
    document.addEventListener('keyup', (key: KeyboardEvent) => {
      this.togglePressed(key)
    })
  }

  constructor (keyCode: number, key: string) {
    this.keyCode = keyCode
    this.key = key

    this.addListeners()
  }
}

export enum Key {
  // Special Keys
  Ctrl = 17,
  Meta = 91,
  Alt = 18,
  Shift = 16,
  Capslock = 20,
  Tab = 9,
  Escape = 27,

  Insert = 45,
  Delete = 46,
  Home = 36,
  End = 35,
  PageUp = 33,
  PageDown = 34,
  ScrollLock = 145,

  ArrowUp = 38,
  ArrowDown = 40,
  ArrowLeft = 37,
  ArrowRight = 39,

  // Number Row
  N1 = 49,
  N2 = 50,
  N3 = 51,
  N4 = 52,
  N5 = 53,
  N6 = 54,
  N7 = 55,
  N8 = 56,
  N9 = 57,
  N0 = 58,

  // Number Pad
  Numpad0 = 96,
  Numpad1 = 97,
  Numpad2 = 98,
  Numpad3 = 99,
  Numpad4 = 100,
  Numpad5 = 101,
  Numpad6 = 102,
  Numpad7 = 103,
  Numpad8 = 104,
  Numpad9 = 105,

  NumLock = 144,
  NumpadSlash = 191,
  NumpadAsterisk = 106,
  NumpadMinus = 109,
  NumpadPlus = 107,
  NumpadDot = 110,

  // Letters
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,

  // Symbols
  Space = 32,
  Grave = 192,
  Period = 190,
  Comma = 188,
  Slash = 191,

  Semicolon = 59,
  Apostrophe = 222,

  BracketLeft = 219,
  BracketRight = 221,
  Backslash = 220,

  Dash = 173,
  Equals = 61
}

export module input {

  export function registerOnKeypress (key: Key, run: types.VoidFunction): void {
    document.addEventListener('keypress', (event) =>{
      if ( event.keyCode == key ) {
        run()
      }
    })
  }

  export function registerOnKeypressCombo (keys: Key[], run: types.VoidFunction): void {

  }
}