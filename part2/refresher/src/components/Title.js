const Title = ({ greeting }) => {
    return (
        <div>
            <h1 style={{ background: 'red', color: 'white' }}>
                { greeting }
            </h1>
        </div>
    )
}

export default Title;