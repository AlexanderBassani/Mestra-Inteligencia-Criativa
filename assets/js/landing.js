document.getElementById('PRIVACYPOLICYCHECK').addEventListener('click', (e) => {
    console.log(e.target)
    e.target.checked ? document.getElementById('sendMailBtn').disabled = false : document.getElementById('sendMailBtn').disabled = true
    console.log(this)
})