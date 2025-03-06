const shareButton=document.getElementById('share');

shareButton.addEventListener('click',()=>{
    const shareOptions=document.getElementById('share-options')
    console.log(shareOptions)
    shareOptions.classList.toggle('active')
})