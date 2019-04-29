import { Config } from '../config'

export module configTools {
  export function deleteShape(index): void {
    if (Config.engineSettings.doDeletedObjects) {
      Config.deletedObjects.push(Config.objects[index]);
      Config.objects.splice(index);
    } else {
      Config.objects.splice(index)
    }
  }
}
