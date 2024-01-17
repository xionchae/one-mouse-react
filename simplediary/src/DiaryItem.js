

const DiaryItem = ({ author, content, created_date, emotion, id, onDelete }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정상태 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleDateString()}</span>
      </div>
      <div className="content">내용 : {content}</div>
      <button onClick={() => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
          onDelete(id);
        }
      }}>삭제</button>
    </div>
  )
}
 
DiaryItem.defaultProps = {
  diary: {},
}

export default DiaryItem;