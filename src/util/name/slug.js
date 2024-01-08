const slug = (str) => {
    var slug = str
        .toLowerCase()
        .replace("&", "and")
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        
    return slug
}
export default slug