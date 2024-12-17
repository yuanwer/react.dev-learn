// React 组件是返回标签的函数
function Button() {
    return (
        <button>I'm a button</button>
    )
}

// 组件的嵌套
export default function App() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            {/*组件必须大写开头，普通的html标签必须小写*/}
            <Button></Button>
        </div>
    )
}

// jsx 标签必须关闭，比如 <br/> 而不是 <br>
// 不能返回多个根标签，要么是 <div></div>，要么是<></>
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>
                Hello,<br/>
                How are you?
            </p>
        </>
    )
} 