export default function Task({id, content, callBackFunc}) {
    const _id = id

    function onButtonClick() {
        callBackFunc(_id)
    }

    return (
        <div className={'task'} data-key={id}>
            <div className={'content'}> {content} </div>
            <button onClick={onButtonClick} className={'button_delete'}>X</button>
        </div>
    )
}