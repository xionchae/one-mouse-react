import React, { useState, useRef, useEffect } from 'react';

const DiaryItem = ({ 
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit
}) => {

  useEffect(() => {
    console.log(`${id} 번째 DiaryItem이 렌더링 됨`);
  });

  const [isEdit, setIsEdit] = useState(false);  // 수정모드인지 아닌지를 나타내는 상태

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);


  const handleRemove = () => {
    if(window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
    }
  }

  const contentArea = useRef();

  const handleEdit = () => {
    if(localContent.length <= 5) { 
      contentArea.current.focus();
      return; 
    }
    if(window.confirm(`정말 ${id}번째 내용을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  }

  const handleQuitEdit = () => {
    setLocalContent(content);
    toggleIsEdit();
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정상태 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleDateString()}</span>
      </div>
      <div className="content">
        
        {isEdit ? (
          <>
          <textarea ref={contentArea} value={localContent} onChange={(e) => setLocalContent(e.target.value)} />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>        
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>        
        </>
      )}
    </div>
  )
}
 
DiaryItem.defaultProps = {
  diary: {},
}

export default React.memo(DiaryItem);