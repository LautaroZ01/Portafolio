import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className='px-2 container mx-auto min-h-[90vh] flex'>
            {children}
        </div>
    )
}
