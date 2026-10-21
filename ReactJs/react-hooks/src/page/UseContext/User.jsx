import { use, useContext } from "react"
import { UserContext } from "./UserContext"

function User() {
    // const user = useContext(UserContext);
    // note useContext not allowed conditionally example giving error 
    // React Hook "useContext" is called conditionally. 
    // React Hooks must be called in the exact same order in every component render.
    // const condition = true;
    // if (condition) {
    //     const user = useContext(UserContext);
    // }

    // Here we use - use API to solve using context conditionally
    const condition = true;
    let user;
    if (condition) {
        user = use(UserContext);
    }

    return (
        <div className="m-4 p-3 flex flex-col justify-center items-center border border-gray-400 shadow-md">
            <h1 className="text-center text-2xl font-semibold">
                User Details
            </h1>
            <div className="flex flex-col my-4 gap-2">
                <span>User name: {user.name}</span>
                <span>User age: {user.age}</span>
                <span>User country: {user.country}</span>
            </div>
        </div>
    )
}

export default User