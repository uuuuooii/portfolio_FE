'use client'

import { useState } from "react"

const useInput = (defaultValue: string) => {
    const [inputValue, setInputVal] = useState(defaultValue ?? "")

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(event.target.value)
    }

    return {
        inputValue,
        onChange,
    }
}

export default useInput