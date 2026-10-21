import style from "../components/style/Tree.module.css"

function TreeCard({ item }) {
    return (
        <div>
            <li className="card">
                <img src={item.src} alt={item.name} height={200} width={"30%"} />
                <h2 className={style["text-color-brown"]}>Tree name: {item.name}</h2>
                <p>Description: {item.desc}</p>
                <h3>Sanskrit name: {item.sanskritName}</h3>
            </li>
        </div>
    )
}

export default TreeCard