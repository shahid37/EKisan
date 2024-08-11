import fetchProductData from "@/util/product/fetchProductData"

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await fetchProductData(params.productId)
    if (product) {
        return {
            title: product.name,
            openGraph: {
                images: [product.imgUrl],
            },
        }
    }
    else {
        return {
            title:"Error 404",
        }
    }
}


export default function Template({ children }) {

    return (
        <>
            {children}
        </>
    )
}
