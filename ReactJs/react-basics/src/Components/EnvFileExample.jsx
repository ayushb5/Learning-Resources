import { useEffect } from "react"

function EnvFileExample() {
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const response = await fetch(import.meta.env.VITE_API);
        const data = await response.json();
        console.log(data[0].body);
    }
    return (
        <div>EnvFileExample</div>
    )
}

export default EnvFileExample