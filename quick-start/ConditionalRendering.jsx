// 条件渲染
function Register() {
    return (
        <div>Register</div>
    )
}

function Login() {
    return (
        <div>Login</div>
    )
}

// 使用if条件渲染
function IndexPage() {
    let content = null
    let hasUser = false

    if (hasUser) {
        content = <Login/>
    } else {
        content = <Register/>
    }

    return (
        <div>
            {content}
        </div>
    )
}

// 使用条件运算符
function IndexPage2() {
    let hasUser = false

    return (
        <div>
            {hasUser ? <Login/> : <Register/>}
        </div>
    )
}

// 使用 && 语法（当不需要else时）
function IndexPage3() {
    let hasUser = false

    return (
        <div>
            {hasUser && <Login/>}
        </div>
    )
}