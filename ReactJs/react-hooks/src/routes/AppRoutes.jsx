import { Route, Routes } from "react-router-dom"
import UseEffect from "../page/UseEffectExample/ContactBook/UseEffect"
import Products from "../page/UseEffectExample/Products/Products"
import UseRef from "../page/UseRefExample/UseRef"
import ForwardRef from "../page/UseRefExample/ForwardRef/ForwardRef"
import UseId from "../page/UseId/UseId"
import UseContext from "../page/UseContext/UseContext"
import Counter from "../page/CustomHook/Counter"
import UseReducer from "../page/UseReducer/UseReducer"
import ReactMemo from "../page/Memo/ReactMemo"
import UseMemo from "../page/UseMemo/UseMemo"
import UseMemoWithObject from "../page/UseMemoWithObject/UseMemo"
import UseCallback from "../page/UseCallback/UseCallback"
function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<UseEffect />} /> */}
            {/* <Route path="/" element={<Counter />} /> */}
            {/* <Route path="/" element={<Products />} /> */}
            {/* <Route path="/" element={<UseRef />} /> */}
            {/* <Route path="/" element={<ForwardRef />} /> */}
            {/* <Route path="/" element={<UseId />} /> */}
            {/* <Route path="/" element={<UseContext />} /> */}
            {/* <Route path="/" element={<Counter />} /> */}
            {/* <Route path="/" element={<UseReducer/>}/> */}
            {/* <Route path="/" element={<ReactMemo />} /> */}
            {/* <Route path="/" element={<UseMemo />} />  */}
            {/* <Route path="/" element={<UseMemoWithObject />} /> */}
            <Route path="/" element={<UseCallback />} />
        </Routes>
    )
}

export default AppRoutes