
const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_description, 
  onClick,
  isSelected
}) => {
  return (
    <div 
      className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : "EmotionItem_off"].join(' ')} 
      onClick={(e) => onClick(emotion_id)}
    >
      <img src={emotion_img} alt={emotion_description} />
      <div>{emotion_description}</div>
    </div>
  )
}

export default EmotionItem;