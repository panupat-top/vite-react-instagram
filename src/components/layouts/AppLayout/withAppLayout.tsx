import React from 'react'

export function withAppLayout(Component: React.FC<any>) {
  function Hoc() {
    const componentProps = {}

    return <Component {...componentProps} />
  }

  return Hoc
}
