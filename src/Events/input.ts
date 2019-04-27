class InputKey {
  keyCode: number
  key: string

  pressedDown: boolean = false

  private togglePressed(key: KeyboardEvent): void {
    if (key.keyCode == this.keyCode) {
      if (this.pressedDown) {
        this.pressedDown = false
      } else {
        this.pressedDown = true
      }
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

type InputFunction = (key: InputKey, args?: any[]) => void

class InputKeybind {
  run: InputFunction
  runArgs: any[]
  
  key: InputKey

  onePress: boolean
  private triggered: boolean = false

  private callbackCheck (args: any[]) {
    // Update triggered status
    if (this.key.pressedDown && !this.triggered ) {
      this.triggered = true
    } else if (!this.key.pressedDown && this.triggered) {
      this.triggered = false
    }

    // C
  }

  public activate () {
    setInterval(this.callbackCheck, 50, this.runArgs) 
  }

  constructor (key: InputKey, run: InputFunction, onePress: boolean) {
    this.key = key
    this.run = run
    this.onePress = onePress
  }
}

export const Key = {
  // Special Keys
  Ctrl: new InputKey(17, 'Control'),
  Meta: new InputKey(91, 'OS'),
  Alt: new InputKey(18, 'Alt'),
  Shift: new InputKey(16, 'Shift'),
  CapsLock: new InputKey(20, 'CapsLock'),
  Tab: new InputKey(9, 'Tab'),
  Escape: new InputKey(27, 'Escape'),

  Insert: new InputKey(45, 'Insert'),
  Delete: new InputKey(46, 'Delete'),
  Home: new InputKey(36, 'Home'),
  End: new InputKey(35, 'End'),
  PageUp: new InputKey(33, 'PageUp'),
  PageDown: new InputKey(34, 'PageDown'),
  ScrollLock: new InputKey(145, 'ScrollLock'),
  Pause: new InputKey(19, 'Pause'),

  ArrowUp: new InputKey(38, 'ArrowUp'),
  ArrowDown: new InputKey(40, 'ArrowDown'),
  ArrowLeft: new InputKey(37, 'ArrowLeft'),
  ArrowRight: new InputKey(39, 'ArrowRight'),

  // Number Row
  N1: new InputKey(49, '1'),
  N2: new InputKey(50, '2'),
  N3: new InputKey(51, '3'),
  N4: new InputKey(52, '4'),
  N5: new InputKey(53, '5'),
  N6: new InputKey(54, '6'),
  N7: new InputKey(55, '7'),
  N8: new InputKey(56, '8'),
  N9: new InputKey(57, '9'),
  N0: new InputKey(48, '0'),

  // Number Pad
  Numpad0: new InputKey(96, '0'),
  Numpad1: new InputKey(97, '1'),
  Numpad2: new InputKey(98, '2'),
  Numpad3: new InputKey(99, '3'),
  Numpad4: new InputKey(100, '4'),
  Numpad5: new InputKey(101, '5'),
  Numpad6: new InputKey(102, '6'),
  Numpad7: new InputKey(103, '7'),
  Numpad8: new InputKey(104, '8'),
  Numpad9: new InputKey(105, '9'),

  NumLock: new InputKey(144, 'NumLock'),
  NumpadDivide: new InputKey(111, '/'),
  NumpadMultiply: new InputKey(106, '*'),
  NumpadSubtract: new InputKey(109, '-'),
  NumpadAdd: new InputKey(107, '+'),
  NumpadDecimal: new InputKey(110, '.'),

  // Letters
  A: new InputKey(65, 'a'),
  B: new InputKey(66, 'b'),
  C: new InputKey(67, 'c'),
  D: new InputKey(68, 'd'),
  E: new InputKey(69, 'e'),
  F: new InputKey(70, 'f'),
  G: new InputKey(71, 'g'),
  H: new InputKey(72, 'h'),
  I: new InputKey(73, 'i'),
  J: new InputKey(74, 'j'),
  K: new InputKey(75, 'k'),
  L: new InputKey(76, 'l'),
  M: new InputKey(77, 'm'),
  N: new InputKey(78, 'n'),
  O: new InputKey(79, 'o'),
  P: new InputKey(80, 'p'),
  Q: new InputKey(81, 'q'),
  R: new InputKey(82, 'r'),
  S: new InputKey(83, 's'),
  T: new InputKey(84, 't'),
  U: new InputKey(85, 'u'),
  V: new InputKey(86, 'v'),
  W: new InputKey(87, 'w'),
  X: new InputKey(88, 'x'),
  Y: new InputKey(89, 'y'),
  Z: new InputKey(90, 'z'),

  // Symbols
  Space: new InputKey(32, ' '),
  Grave: new InputKey(192, '`'),
  Period: new InputKey(190, '.'),
  Comma: new InputKey(188, ','),
  Slash: new InputKey(191, '/'),

  Semicolon: new InputKey(59, ';'),
  Quote: new InputKey(222, '\''),

  BracketLeft: new InputKey(219, '['),
  BracketRight: new InputKey(221, ']'),
  Backslash: new InputKey(220, '\\'),

  Minus: new InputKey(173, '- '),
  Equal: new InputKey(61, '='),
}

export module Input {
  export let keybinds: InputKeybind[]

  export function registerKeybind (key: InputKey, run: InputFunction, onePress: boolean = true) {
    let keybind: InputKeybind = new InputKeybind(key, run, onePress)
  }
}