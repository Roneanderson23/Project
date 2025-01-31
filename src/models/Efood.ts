class Efood {
  title: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    image: string,
    infos: string[],
    description: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Efood
