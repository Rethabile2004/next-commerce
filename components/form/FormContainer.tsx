'use client'

import { actionFunction } from "@/utils/types"
import { useActionState, useEffect } from "react"
import { useFormState } from "react-dom"
import { useSonner, toast } from "sonner"

const initialState: { message: string } = {
    message: ''
}
const FormContainer = ({ action, children }: { action: actionFunction, children: React.ReactNode }) => {
    const [state, formAction] = useActionState(action, initialState)
    useEffect(() => {
        if (state.message) {
            toast.success(state.message)
        }
    }, [state])
    return (
        <form action={formAction}>{children}</form>
    )
}

export default FormContainer