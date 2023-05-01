import React, { ReactNode } from 'react'

interface myProps {
    children?: ReactNode
}


export const Layout = ({ children }: myProps): JSX.Element => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}
