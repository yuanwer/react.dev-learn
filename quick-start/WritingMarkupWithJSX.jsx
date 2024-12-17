// 动态设置图片的 src 以及其他属性
function Image() {
    const img = {
        src: 'https://avatars1.githubusercontent.com/u/55?v=4',
        alt: 'avatar'
    }

    return (
        <img src={img.src} alt={img.alt}/>
    )
}