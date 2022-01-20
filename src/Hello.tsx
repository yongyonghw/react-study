

// @ts-ignore
function Hello(props:any) {
    return (
        <div style={{ color: props.color }}>
            { props.isSpecial&& <b>*</b> }
            안녕하세요 {props.name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;