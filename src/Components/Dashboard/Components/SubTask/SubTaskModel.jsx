import React from 'react'
import SubTaskModelBox from './SubTaskModelBox'

function SubTaskModel({onClose, onCreate}) {
  return (
    <div>

    <SubTaskModelBox onClose={onClose}onCreate={onCreate}/>
    </div>
  )
}

export default SubTaskModel