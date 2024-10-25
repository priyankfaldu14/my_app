export const imageZoomIn=(url)=>{
    document.documentElement.style.setProperty("--imageUrl",`url(${url})`)
    document.documentElement.style.setProperty("--image-display",`flex`)
    
}
export const imageZoomOut=()=>{
    document.documentElement.style.setProperty("--image-display",`none`)
    
}