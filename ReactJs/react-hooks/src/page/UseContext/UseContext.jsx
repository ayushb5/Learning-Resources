import User from "./User"
import UserProvider from "./UserContext"

function UseContext() {
    return (
        <UserProvider>
            <User />
        </UserProvider>
    )
}

export default UseContext