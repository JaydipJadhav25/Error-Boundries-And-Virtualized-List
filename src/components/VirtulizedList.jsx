import { Virtuoso } from 'react-virtuoso'
import { useMemo } from 'react'

export default function VirtulizedList() {

  const users = useMemo(() => {

    return Array.from({ length: 100000 }, (_, index) => ({
      name: `User ${index}`,
      // random-sized items
      size: Math.floor(Math.random() * 40) + 70,
      description: `Description for user ${index}`
    }))
  }, [])
console.log("done" , users)
  return (
    <Virtuoso
      style={{ height: '100%' }}
      data={users}
      itemContent={(_, user) => (
        <div
          style={{
            padding: '0.5rem',
            height: `${user.size}px`,
            borderBottom: `1px solid var(--border)`,
            backgroundColor : "orange"
          }}
        >
          <p><strong>{user.name}</strong></p>
          <div>{user.description}</div>
        </div>
      )}
    />
  )
}

