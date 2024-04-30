let lists = document.querySelectorAll('.list'), right = document.querySelector('#right'),
    left = document.querySelector('#left')
lists.forEach((list, index) => {
    list.addEventListener('dragstart', (e) => {
        let selected = e.target
        right.addEventListener('dragover', (e) => {
            e.preventDefault()
        })
        right.addEventListener('drop', (e) => {
            right.appendChild(selected)
            selected = null
        })
        left.addEventListener('dragover', (e) => {
            e.preventDefault()
        })
        left.addEventListener('drop', (e) => {
            left.appendChild(selected)
            selected = null
        })
    })
})