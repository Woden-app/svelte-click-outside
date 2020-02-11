export default (node, event) => {
    const handleClick = e => {
        if (!(e.target === node || node.contains(e.target)))
            event()
    }

    document.body.addEventListener('click', handleClick)

    return {
        destroy() {
            document.body.removeEventListener('click', handleClick)
        }
    }
}