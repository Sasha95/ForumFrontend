import React, { Component } from 'react'
import PostsItem from './PostItem'

const posts = [
  {
    header:
      'Игрушечный фронтенд для LLVM, написанный на Rust: Руководство для начинающих',
    body:
      'В настоящее время я работаю над компилятором, который написан на Rust, и порождает LLVM IR. LLVM API выглядит немного пугающе для новичков, и по нему не так много руководств (и все они на C++, поэтому не вполне очевидно, как сделать то же самое на Rust). Я бы хотел, чтобы кто-то протянул мне руку помощи, когда я начинал всё это, и эта статья является тем, что я хотел бы показать самому себе в то время.',
    author: 'I am',
    id: 1
  },
  {
    header:
      'Много, быстро, распределенно: как выбирать In-Memory Data Grid решение',
    body:
      'Ещё не так давно решение накапливать информацию, а уже после её обрабатывать, казалось логичным, а появившиеся языки запросов к хранилищам информации выглядели отличным решением: каждая стадия процесса работы с информацией была выделенной и достаточно хорошо контролируемой. Но времена меняются, и сегодня всё чаще бизнес заявляет о желании обрабатывать информацию не «вчерашнюю», а текущую, в буквальном смысле иметь «обработку в онлайне», причём по отношению к информации достаточно больших объёмов. И здесь, хотим мы этого или нет, мы вынуждены искать новые инструменты.',
    author: 'I am1',
    id: 2
  }
]

const a = ({ id, header, author, body }) => (
  <PostsItem key={id} header={header} body={body} author={author} />
)

const posts2 = posts.map(a)

const PostsList = props => (
  <div className="container">
    <ul className="list-group">{posts2}</ul>
  </div>
)

export default PostsList
