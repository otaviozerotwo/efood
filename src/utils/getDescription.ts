const getDescription = (description: string) => {
  if (description.length > 252) {
    return description.slice(0, 249) + '...'
  }

  return description
}

export default getDescription
