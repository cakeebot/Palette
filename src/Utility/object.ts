import { tags, array } from "./elixir";


export class PaletteBasicObject implements tags.TagHolder {
  tags: tags.Tag[]

  protected index: number
  protected exists: boolean

  public hasTag (tagName: string) {
    return array.includes(this.tags, [tagName, 'paletteTag'])
  }

  public addTag (tagName: string) {
    tags.assignTag(tagName, this)
  }
}