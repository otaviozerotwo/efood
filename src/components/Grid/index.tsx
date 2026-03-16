import React from 'react'
import Restaurant from '../../models/Restaurant'
import { List } from './styles'
import Dish from '../../models/Dish'

export type Props = {
  columns?: number
  gap?: string
}

type GridItem = Dish | Restaurant

type GridProps<T extends GridItem> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  columns?: number
  gap?: string
}

const Grid = <T extends GridItem>({
  items,
  renderItem,
  columns = 2,
  gap = '80px'
}: GridProps<T>) => {
  return (
    <List columns={columns} gap={gap}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </List>
  )
}

export default Grid
