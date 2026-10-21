import { forwardRef, useId } from "react"

const AfterReact19 = ({ label, ref }) => {
    const id = useId();
    return (
        <div className="mx-10 my-4 flex flex-col gap-1 w-100">
            <label htmlFor={id}>{label}</label>
            <input className="border px-2 py-0.5" type="text" ref={ref} />
        </div>
    )
}
export default AfterReact19