function useLightTheme() {
    document.body.style.setProperty('--cor-escura', '#212529')
    document.body.style.setProperty('--cor-branca', '#f1f5f9')
    document.body.style.setProperty('--cor-borda', '#212529')
    document.body.style.setProperty('--borda', '1px solid')
}

function useDarkTheme() {
    document.body.style.setProperty('--cor-escura', '#f1f5f9')
    document.body.style.setProperty('--cor-branca', '#212529')
    document.body.style.setProperty('--cor-borda', '#f1f5f9')
    document.body.style.setProperty('--borda', '2px solid #212529')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
