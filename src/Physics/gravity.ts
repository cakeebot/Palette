import { Config } from '../config';
import { Shape } from '../Objects/shape';

export function doAllGravity (): void {
  for (const currentObj of Config.objects) {
    if (currentObj.doSelfGravity) {
      
    }
  }
}

export function doSelfGravity (self: Shape): void {
  if (self.doSelfGravity) {
    
  } else {
    console.log("Can't do gravity; doSelfGravity is disabled"); 
  }
}
