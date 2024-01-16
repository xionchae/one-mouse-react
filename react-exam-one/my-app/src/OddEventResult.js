const OddEventResult = ({ count }) => {
  console.log(count);
    return (
        <>
            <h2>홀수 / 짝수</h2>
            <h3>{count % 2 === 0 ? '짝수' : '홀수'}</h3>
        </>
    )
}

export default OddEventResult;