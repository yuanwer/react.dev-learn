// 使用className设置标签的css类名
function Avatar() {
    return (
        <img className="avatar" src="/avatar.png" alt="avatar"/>
    )
}

// jsx中的对象 {{}}。外层 {} 表示内部的是js代码，内部的 {}，是一个js对象
function Profile() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }

    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}
