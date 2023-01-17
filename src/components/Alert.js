import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{position: 'absolute', right: '0'}}>
        <strong>{props.alert.type.replace(/^./, (c) => c.toUpperCase())}</strong>: &nbsp;{props.alert.msg}
      </div>
    </div>
  )
}