import { Shape } from '../Objects/shape'
import { PaletteWorld } from './../Game/world'

export module Palette {
  export let mainWorld: PaletteWorld
}

export module Config {
  export let objects: Shape[] = []
  export let deletedObjects: Shape[] = []

  export let gravity: number[] = []

  export module engineSettings {
    export let doDeletedObjects: boolean = true // Save deleted objects to deletedObjects[]
  }
}