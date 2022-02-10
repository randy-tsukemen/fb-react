import React from 'react'

interface Props {
  Icon: React.FC<React.ComponentProps<'svg'>>
}

const HeaderIcon = ({ Icon }: Props) => {
  return (
    <div>
      <Icon className="h-6 text-gray-600" />
    </div>
  )
}

export default HeaderIcon
