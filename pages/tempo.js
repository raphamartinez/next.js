function Tempo() {
    const date = new Date();
    const dateString = date.toGMTString();

    return(
        <div>
            {dateString} (dinâmico)
        </div>
    )
}

export default Tempo;