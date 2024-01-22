const MyHeader = ({head_text, right_child, left_child}) => {
  return (
    <header>
      <div className="head_btn_left">{left_child}</div>
      <div className="head_text">{head_text}</div>
      <div className="head_btn_right">{right_child}</div>
    </header>
  )
}

export default MyHeader;