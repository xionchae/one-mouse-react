import MyHeader from './MyHeader';
import MyButton from './MyButton';
import {useNavigate} from 'react-router-dom';
import {useState, useRef, useContext} from 'react';
import EmotionItem from './EmotionItem';
import {DiaryDispatchContext} from '../App';

const getStringDate = (date) => {
  return new Date(date).toISOString().slice(0,10);
}

const emotionList = [
  {emotion_id:1, emotion_img: process.env.PUBLIC_URL + '/assets/emotion1.png', emotion_description: '완전 좋음'},
  {emotion_id:2, emotion_img: process.env.PUBLIC_URL + '/assets/emotion2.png', emotion_description: '좋음'},
  {emotion_id:3, emotion_img: process.env.PUBLIC_URL + '/assets/emotion3.png', emotion_description: '그럭저럭'},
  {emotion_id:4, emotion_img: process.env.PUBLIC_URL + '/assets/emotion4.png', emotion_description: '나쁨'},
  {emotion_id:5, emotion_img: process.env.PUBLIC_URL + '/assets/emotion5.png', emotion_description: '완전 나쁨'},
]

const DiaryEditor = () => {
  const contentRef = useRef(); // content
  const [content, setContent] = useState(""); // content
  const [emotion, setEmotion] = useState(); // emotion_id
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  }

  const {onCreate} = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(date, content, emotion); // CREATE
    navigate("/", {replace:true})
  
  }
  

  return (
    <div className="DiaryEditor">
      <MyHeader 
        head_text={"새 일기 작성하기"} 
        left_child={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1) }/>
        } />
      <div>
        <section>
          <h4>오늘은 몇일인가요?</h4>
          <div className="input_box">
            <input className="input_date" value={date} onChange={(e) => {setDate(e.target.value)}} type="date" />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className='imput_box emotion_list_wrapper'>
            {emotionList.map((item) => (
              <EmotionItem 
                key={item.emotion_id} 
                {...item} 
                onClick={handleClickEmotion}
                isSelected={item.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box textarea_wrapper" >
            <textarea className="input_textarea" 
              placeholder="일기를 작성해주세요." 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={contentRef}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton type={"default"} text={"취소하기"} onClick={() => navigate(-1) }/>
            <MyButton type={"positive"} text={"저장하기"} onClick={() => {handleSubmit()} }/>
          </div>
        </section>
      </div>
    </div>
  )
};

export default DiaryEditor;