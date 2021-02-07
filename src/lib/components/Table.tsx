import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillEyeFill } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { Wrapper } from './styles/tableStyles'

interface TableProps {
  headings: string[]
  data: Record<string, string | JSX.Element>[]
  breakOn: number
  onView?: (dataId: string) => void
  onEdit?: (dataId: string) => void
  onDelete?: (dataId: string) => void
}

const Table: React.FC<TableProps> = ({
  headings,
  data,
  breakOn,
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <Wrapper breakpoint={breakOn + 'px'}>
      <thead>
        <tr>
          {headings.map((heading) => (
            <td key={heading}>{heading}</td>
          ))}
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, ind) => (
          <tr key={ind}>
            {Object.values(item).map((tableData, i) => (
              <td key={i} data-content={headings[i]}>
                {tableData}
              </td>
            ))}
            <td data-content='Actions'>
              <BsFillEyeFill
                onClick={() => typeof item.id === 'string' && onView?.(item.id)}
              />
              <GoPencil
                onClick={() => typeof item.id === 'string' && onEdit?.(item.id)}
              />
              <AiTwotoneDelete
                onClick={() =>
                  typeof item.id === 'string' && onDelete?.(item.id)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  )
}

export default Table
