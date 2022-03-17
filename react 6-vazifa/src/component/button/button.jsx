import './button.css'


function Button({username='Tweet',variant='btn__second'}){



    return(
        <>
        <button className={`btn ${variant}`}>{username}</button>
        </>
    )
}
export default Button;