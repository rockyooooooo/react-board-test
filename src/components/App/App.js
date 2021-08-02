import { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BASE_URL = 'https://student-json-api.lidemy.me/comments'

const Loading = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #333a;
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Page = styled.div`
  width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #333;
`

const MessageForm = styled.form`
  margin-top: 1rem;
`

const MessageNickname = styled.input`
  border: 1px solid #333;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-size: 1.25rem;
`

const MessageTextarea = styled.textarea`
  width: 99%;
  height: 5rem;
  resize: vertical;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.25rem;
`

const SubmitButton = styled.button`
display: block;
width: 100%;
margin-top: 0.5rem;
padding: 0.5rem;
border: none;
border-radius: 0.5rem;
`

const MessageList = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #3335;
  border-radius: 0.5rem;
`

const MessageContainer = styled.div`
  padding: 1rem 0.5rem;
`

const MessageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #3335;
`

const MessageAuthor = styled.div``

const MessageTime = styled.div``

const MessageBody = styled.div`
  margin-top: 0.5rem;
`

const ErrorMessage = styled.h2`
  color: #f009;
`

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  )
}

Message.propTypes = {
  author: PropTypes.string,
  time: PropTypes.string,
  children: PropTypes.node
}

function App() {
  const [messages, setMessages] = useState(null)
  const [messageApiError, setMessageApiError] = useState(null)
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')
  const [postMessageError, setPostMessageError] = useState(null)
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false)

  const handleInputChange = (e) => setNickname(e.target.value)
  const handleTextareaChange = (e) => setContent(e.target.value)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isLoadingPostMessage) return
    setIsLoadingPostMessage(true)
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nickname: nickname,
        body: content
      })
    })
    .then(res => res.json())
    .then(data => {
      setIsLoadingPostMessage(false)
      if (data.ok === 0) return setPostMessageError(data.message)
      setNickname('')
      setContent('')
      fetchMessages()
    })
    .catch((err) => {
      setIsLoadingPostMessage(false)
      setPostMessageError(err.toString())
    })
  }
  const handleInputFocus = () => setPostMessageError(null)

  // App render 完才 fetch
  useEffect(() => fetchMessages(), [])

  const fetchMessages = () => {
    fetch(`${BASE_URL}?_sort=createdAt&_order=desc`)
    .then((res) => res.json())
    .then((data) => setMessages(data))
    .catch((err) => setMessageApiError(err.toString()))
  }

  return (
    <Page>
      {/* 沒有留言或正在送出留言時顯示 Loading */}
      {(!messages ||  isLoadingPostMessage) && <Loading>Loading...</Loading>}
      <Title>簡易留言板啦別要求太多</Title>
      <MessageForm onSubmit={handleFormSubmit}>
        <MessageNickname value={nickname} onChange={handleInputChange} onFocus={handleInputFocus} placeholder='nickname' />
        <MessageTextarea value={content} onChange={handleTextareaChange} onFocus={handleInputFocus} placeholder='content' />
        <SubmitButton>送出</SubmitButton>
      </MessageForm>
      {/* 有 Error 的話顯示 ErrorMessage */}
      {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>}
      {messageApiError && <ErrorMessage>Something went wrong: {messageApiError}</ErrorMessage>}
      {/* 有資料才顯示 MessageList */}
      {messages && (
        <MessageList>
          {/* 沒有留言的話顯示 No messages */}
          {messages.length === 0 && <p>No messages.</p>}
          {/* 有留言才顯示留言 */}
          {messages.map((message) => {
            return (
              <Message key={message.id} author={message.nickname} time={new Date(message.createdAt).toLocaleString()}>
                {message.body}
              </Message>
            )
          })}
        </MessageList>
      )}
    </Page>
  );
}

export default App;
