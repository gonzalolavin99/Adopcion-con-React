import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = ({backgroundColor, textoBadge }) => {
  return (
    <Badge bg={backgroundColor}>{textoBadge}</Badge>
  )
}

export default Tags