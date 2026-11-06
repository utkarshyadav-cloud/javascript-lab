/*
 Name : Utkarsh Yadav
 Roll No : BCS2025381
 Assignment No : 15
 Task No : 4
*/

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Utkarsh" },
        { id: 2, name: "Arif" },
        { id: 3, name: "Lokesh" }
      ]);
    }, 100);
  });
}

async function showUsers() {
  let users = await getUsers();
  users.forEach((user) => {
    console.log(user.name);
  });
}

showUsers();