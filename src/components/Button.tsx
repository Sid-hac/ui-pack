import * as React from "react"
import { ReactNode } from "react"


type Propstype = {
    children: ReactNode
}


const Button = ({ children }: Propstype) => {
    return (
        <button style={
            {
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }
        }>
            {children}
        </button>
    )
}

export {Button}