let newFriends =[]
let addFriends = document.querySelector('[addFriends]')
 addFriends.addEventListener('click',()=> {
    addFriends.push({
        firstName: document.querySelector('[firstName]').value,
        lastName: document.querySelector('[firstName]').value
    })
    console.log(friends);
 })
 









