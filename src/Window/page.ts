function ifDocumentExists (run: Function): void {
  if (!document == undefined) {
    run()
  }
}

export class Page {
  path: string

  // Add to Documents
  readonly addTo = {
    head: function (elements: string[]): void {
      ifDocumentExists(()=>
        elements.forEach((element)=>{
          document.head.insertAdjacentHTML('beforeend', element)
        })
      )
    },
    body: function (elements: string[]): void {
      ifDocumentExists(()=>
        elements.forEach((element)=>{
          document.body.insertAdjacentHTML('beforeend', element)
        })
      )
    },

    element: { 
      ID: function (id: string, elements: string[]): void {
        ifDocumentExists(()=>
          elements.forEach((element)=>{
            document.getElementById(id).insertAdjacentHTML('beforeend', element)
          })
        )
      },
      Class: function (Class: string, elements: string[]): void {
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