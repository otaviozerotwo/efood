import React from 'react'
import { List } from './styles'
import Restaurant from '../../models/Restaurant'
import Dish from '../../models/Dish'

export type Props = {
  columns?: number
  gap?: string
}

export type GridItem = Restaurant | Dish

export type GridProps<T extends GridItem> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  columns?: number
  gap?: string
  keyExtractor?: (item: T) => string | number
}

const Grid = <T extends GridItem>({
  items,
  renderItem,
  columns = 2,
  gap = '80px',
  keyExtractor
}: GridProps<T>) => {
  return (
    <List columns={columns} gap={gap}>
      {items.map((item) => (
        <li key={keyExtractor ? keyExtractor(item) : item.id}>
          {renderItem(item)}
        </li>
      ))}
    </List>
  )
}

export default Grid
