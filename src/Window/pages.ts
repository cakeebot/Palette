import { MainWindow } from './createWindow';
import { isUndefined } from 'util';

export module page {
  export function load (path: string): void {
    MainWindow.loadFile(path)
  }

  export function setTitle (title: string): void {

  }
}

export module MainDocument {
  function ifDocumentExists (run: Function): void {
    if (!isUndefined(document)) {
      run()
    }
  }

  export module addTo {
    export function head (elements: string[]): void {
      ifDocumentExists(()=>
        elements.forEach((element)=>{
          document.head.insertAdjacentHTML('beforeend', element)
        })
      )
    }
    export function body (elements: string[]): void {
      ifDocumentExists(()=>
        elements.forEach((element)=>{
          document.body.insertAdjacentHTML('beforeend', element)
        })
      )
    }

    export module element { 
      export function ID (id: string, elements: string[]): void {
        ifDocumentExists(()=>
          elements.forEach((element)=>{
            document.getElementById(id).insertAdjacentHTML('beforeend', element)
          })
        )
      }
      export function Class (Class: string, elements: string[]): void {
        ifDocumentExists(()=>
          elements.forEach((element)=>{
            const classMembers = document.getElementsByClassName(Class)

            let i: number
            for (i < classMembers.length; i++;) {
              classMembers[i].insertAdjacentHTML('beforeend', element)
            }
          })
        )
      }
    }
  }
}