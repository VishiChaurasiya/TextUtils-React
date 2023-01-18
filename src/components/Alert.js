import React from 'react';

export default function Alert(props) {
  return (
    <div style={{height: '45px'}}>
      {
        props.alert && <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{props.alert.type.replace(/^./, (c) => c.toUpperCase())}</strong>: &nbsp;{props.alert.msg}
          </div>
        </div>
      }
    </div>
  )
}