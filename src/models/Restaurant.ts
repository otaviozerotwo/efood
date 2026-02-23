class Restaurant {
  id: number
  image: string
  infos: string[]
  title: string
  rating: number
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    rating: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
    this.description = description
  }
}

export default Restaurant
