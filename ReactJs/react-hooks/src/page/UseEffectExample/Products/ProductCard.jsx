
function ProductCard({ product }) {
    return (
        <div className="border border-gray-300 shadow-md rounded-lg p-3 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="h-40">
                <img src={product.thumbnail} className="h-full w-full object-contain" alt="" />
            </div>
            <h3 className="my-2 text-md font-semibold">{product.title}</h3>
            {/* badge */}
            <span className="px-2 py-0.5 rounded-2xl border bg-green-800 text-white">{product.category}</span>
        </div>
    )
}

export default ProductCard