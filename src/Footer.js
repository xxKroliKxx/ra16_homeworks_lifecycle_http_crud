export default function Footer({callBackFunc}) {

    function onButtonClick() {
        const element = document.getElementsByClassName('notes_input')[0]
        callBackFunc(element.value)
    }

    return (
        <div className={'footer'}>
            <span className={'footer_title'}>New notes</span>
            <textarea className={'notes_input'}></textarea>
            <button onClick={onButtonClick} className={'button_create'}></button>
        </div>
    )
}