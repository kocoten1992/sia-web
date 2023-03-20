export type ObjectData = {
  id: string
  path: string
  name: string
  health?: number
  isDirectory?: boolean
  isUploading?: boolean
  loaded?: number
  total?: number
}

export type TableColumnId =
  | 'actions'
  | 'type'
  | 'name'
  | 'size'
  | 'health'
  | 'slabs'
  | 'shards'

export const columnsMeta: Record<
  TableColumnId,
  { id: TableColumnId; label: string; sortable?: string; fixed?: boolean }
> = {
  actions: {
    id: 'actions',
    label: '',
    fixed: true,
  },
  type: {
    id: 'type',
    label: '',
    fixed: true,
  },
  name: {
    id: 'name',
    label: 'Name',
    sortable: 'Order by',
  },
  size: {
    id: 'size',
    label: 'Size',
    // sortable: 'Order by',
  },
  health: {
    id: 'health',
    label: 'Health',
  },
  slabs: {
    id: 'slabs',
    label: 'Slabs',
    // sortable: 'Order by',
  },
  shards: {
    id: 'shards',
    label: 'Shards',
    // sortable: 'Order by',
  },
}

export const columnsDefaultVisible: TableColumnId[] = [
  'type',
  'name',
  'size',
  'health',
]

export const columnsDefaultSort = 'type'
