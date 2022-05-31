import React from 'react'
import { Button } from './Button'
import { Diamond } from './Diamond'
import { Divider } from './Divider'

export const BigButton = ({ className, children, ...rest }: any) => {
    return (
        <Button className={`${className} flex w-full px-4 py-4`} {...rest}>
            <Diamond width={15} height={15} />
            <Divider />
            <div className="px-2 -mt-1">{children}</div>
            <Divider />
            <Diamond width={15} height={15} />
        </Button>
    )
}
