export default function Header({callBackFunc}) {

    function onButtonClick() {
        callBackFunc()
    }

    return (
        <div className={'header'}>
            <span className={'header_title'}>Notes</span>
            <button onClick={onButtonClick} className={'button_update'}></button>
        </div>
    )
}