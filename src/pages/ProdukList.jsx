import produkData from "../Products.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {produkData.map((produk) => (
                <div key={produk.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{produk.title}</h2>
                    <p className="text-gray-600">{produk.price}</p>

                    {produk.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}

                </div>
            ))}
        </div>
    )
}




