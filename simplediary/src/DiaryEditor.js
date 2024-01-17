import React, {useRef, useState} from 'react';

const DiaryEditor = ({onCreate}) => {

  const authorInputRef = useRef();
  const contentTextRef = useRef();

  const [state, setState] = useState({author: '', content: '', emotion: ''});

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if(state.author.length < 1) {
      // focus
      authorInputRef.current.focus();
      return;
    }

    if (state.content.length < 5) {
      // focus
      contentTextRef.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);

    e.preventDefault();
    console.log(state);
    alert('일기가 저장되었습니다.');
    
    // 초기화
    setState({
      author: '',
      content: '',
      emotion: '',
    })
  } 

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input name="author" ref={authorInputRef} value={state.author} onChange={handleChangeState} />
      </div>
    
      <div>
        <textarea name="content" ref={contentTextRef} value={state.content} onChange={handleChangeState} />
      </div>

      <div>
        <select name='emotion' value={state.emotion} onChange={handleChangeState}>
          <option value='happy'>행복해요</option>
          <option value='sad'>슬퍼요</option>
          <option value='angry'>화나요</option>
          <option value='shy'>부끄러워요</option>
          <option value='soso'>그저 그래요</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
}

export default DiaryEditor;