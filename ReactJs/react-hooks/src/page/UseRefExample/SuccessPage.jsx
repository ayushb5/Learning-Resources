import { useState } from "react"
import UseRef from "./UseRef";

function SuccessPage() {
    const [goToLogin, setGoToLogin] = useState(false);

    if (goToLogin) {
        return <UseRef />
    }
    return (
        <div className='mx-10 my-4 flex flex-col items-center'>
            <h1 className='text-3xl text-green-600'>You had logged in successfully</h1>
            <br />
            <button className="btn border" onClick={() => setGoToLogin(true)}>Back to Login</button>
        </div>
    )
}

export default SuccessPage