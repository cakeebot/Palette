/*
  ------------=ELIXIR LIBRARY=---------------------
  used in Palette and can be used by Palette games.
*/

export module types {
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
  export function runEach (array: any[]) {
    let outputs: any[] = []

    array.forEach(element => {
      outputs.push(element())
    });
  }
}