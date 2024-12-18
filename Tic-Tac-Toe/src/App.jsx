import './App.css';
import Square from './Square';
import { useState } from 'react';

// Game 组件：游戏的主组件，负责管理游戏状态和历史记录
export default function Game() {
  // history 存储游戏的所有历史状态，初始状态为一个空棋盘（9个null值的数组）
  const [history, setHistory] = useState([Array(9).fill(null)])
  // currentMove 记录当前所在的步数
  const [currentMove, setCurrentMove] = useState(0)
  // 根据当前步数判断下一步是 X 还是 O（偶数步为X，奇数步为O）
  const xIsNext = currentMove % 2 === 0
  // 获取当前棋盘状态
  const currentSquares = history[currentMove]

  // 处理每次落子后的状态更新
  function handlePlay(nextSquares) {
    // 创建新的历史记录，包含当前步数之前的所有记录和新的棋盘状态
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    // 更新当前步数为最新一步
    setCurrentMove(nextHistory.length - 1)
  }

  // 跳转到历史记录中的某一步
  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  // 生成历史记录列表
  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = '跳转到第 ' + move + ' 步'
    } else {
      description = '回到游戏开始'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// Board 组件：棋盘组件，负责渲染棋盘和处理点击事件
function Board({ xIsNext, squares, onPlay }) {

  // 处理方格点击事件
  function handleClick(i) {
    // 如果该位置已有棋子或游戏已有胜者，则直接返回
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    // 创建新的棋盘状态
    const nextSquares = squares.slice()
    // 根据当前玩家（X/O）在点击位置放置对应的棋子
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  // 判断是否有胜者
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = '获胜者: ' + winner
  } else {
    status = '下一个玩家: ' + (xIsNext ? 'X' : 'O')
  }

  // 渲染棋盘界面
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

// 计算获胜者的函数
function calculateWinner(squares) {
  // 定义所有可能获胜的线条组合
  const lines = [
    [0, 1, 2], // 第一行
    [3, 4, 5], // 第二行
    [6, 7, 8], // 第三行
    [0, 3, 6], // 第一列
    [1, 4, 7], // 第二列
    [2, 5, 8], // 第三列
    [0, 4, 8], // 主对角线
    [2, 4, 6]  // 副对角线
  ];
  // 遍历所有可能的获胜组合
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // 检查是否有三个相同的符号（X或O）连成一线
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // 如果没有获胜者，返回null
  return null;
}