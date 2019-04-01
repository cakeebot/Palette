import { Shape } from "./Objects/shape";

module Config {
  export let objects: Shape[] = []
  export let deletedObjects: Shape[] = []

  export let gravity: number[] = []

  module engineSettings {
    export let doDeletedObjects: boolean = true // Save deleted objects to deletedObjects[]
  }
}

export default Config