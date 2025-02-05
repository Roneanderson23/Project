class Efood {
  title: string
  paragraph: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    image: string,
    infos: string[],
    paragraph: string
  ) {
    this.id = id
    this.paragraph = paragraph
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Efood
