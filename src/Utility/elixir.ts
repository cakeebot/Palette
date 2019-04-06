/*
  ------------=ELIXIR LIBRARY=---------------------
  used in Palette and can be used by Palette games.
*/

export module tags {
  export interface TagHolder {
    tags: Tag[]
  }

  export function assignTag (tagName: string, obj: TagHolder): void {
    if (!array.includes(obj.tags, [tagName, 'paletteTag'])) {
      obj.tags.push([tagName, 'paletteTag'])
    }
  }

  export type Tag = [string, 'paletteTag']
}

export module types {
  export type VoidFunction = () => void
  export type RenderFunction = (progress: number) => void
  export interface Size {
    x: number
    y: number
  }
}

export module array {
  export function includes (arr: any[], obj: any): boolean {
    return (arr.indexOf(obj) != -1)
  }
}

export module logic {
  class ifRunOutput {
    successful: boolean

    public else (run: Function): any {
      let output: ifRunOutput = new ifRunOutput()

      if (!this.successful) {
        output.successful = true

        return run()
      } else {
        output.successful = false
      }

      return output
    }

    public elseIf (condition, run: Function) {
      let output: ifRunOutput = new ifRunOutput()

      if (!this.successful && condition) {
        run()
        
        output.successful = true
      } else {
        output.successful = false
      }

      return output
    }
  }

  export function ifRun (condition, run: Function) {
    let output: ifRunOutput = new ifRunOutput()

    if (condition) {
      run()

      output.successful = true
    } else {
      output.successful = false
    }

    return output
  }
}

export module loops {
  export function runEach (array: any[]): any[] {
    let outputs: any[] = []

    array.forEach(element => {
      outputs.push(element())
    });

    return outputs
  }
}