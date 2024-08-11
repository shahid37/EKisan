import capitalize from "@/util/name/capitalize"

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Products in ${capitalize(params.district)} | eKisan Darshan`,
        description: `Take a look on Products in ${capitalize(params.district)} on eKisan Darshan`,
        openGraph: {
            images: ['/public/android-chrome-192x192.png'],
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
