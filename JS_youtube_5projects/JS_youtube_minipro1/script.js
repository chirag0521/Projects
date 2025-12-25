var h5 = document.querySelector('h5')
var addFriend = document.querySelector('#add')
var flag = 0;

addFriend.addEventListener('click', function(){
if(flag === 0){
    h5.innerHTML = "Friends"
    h5.style.color = "green"
    addFriend.innerHTML = "Remove Friend "
    flag = 1
}
else{
    h5.innerHTML = "Stranger"
    h5.style.color = " rgb(247, 74, 74)"
    addFriend.innerHTML = "Add Friend"
    flag = 0
}
})

