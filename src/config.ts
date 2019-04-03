import { Shape } from "./Objects/shape";

export module Palette {
  export let renderProgress: number = 0

  export module Render {
    export let lastRender: number = 0
  }
}

export module Config {
  export let objects: Shape[] = []
  export let deletedObjects: Shape[] = []

  export let gravity: number[] = []

  export module engineSettings {
    export let doDeletedObjects: boolean = true // Save deleted objects to deletedObjects[]
  }
}