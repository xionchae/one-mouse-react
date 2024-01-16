const DiaryItem = ({ author, content, created_date, emotion, id }) => {
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
    </div>
  )
}

DiaryItem.defaultProps = {
  diary: {},
}

export default DiaryItem;