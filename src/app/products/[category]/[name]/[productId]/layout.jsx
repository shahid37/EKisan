import fetchProductData from "@/util/product/fetchProductData"

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await fetchProductData(params.productId)
    return {
        title: product.name,
        openGraph: {
            images: [product.imgUrl],
        },
    }
}


export default function Template({ children }) {

    return (
        <>
            {children}
        </>
    )
}
