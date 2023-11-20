var users= [
    {
        id: 1,
        name: 'Gia Hung'
    },
    {
        id: 2,
        name: 'Kieu Thinh'
    },
    {
        id: 3,
        name: 'Thuy Vi'
    },
    {
        id: 4,
        name: 'Tieu My'
    },
];

var comments = [
    {
        id:1,
        id_user: 1,
        content: 'Gia Hung said'
    },
    {
        id:2,
        id_user: 2,
        content: 'Kieu Thinh said'
    },
    {
        id:3,
        id_user: 3,
        content: 'Thuy Vi said'
    }
    // },
    // {
    //     id:4,
    //     id_user: 4,
    //     content: 'Tieu My said'
    // },
    // {
    //     id:5,
    //     id_user: 5,
    //     content: 'Gia Hung second said '
    // }

];

// Fake AIP
// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     })
// }

// function getUsersById(userIds) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             var result = users.filter(function(user) {
//                 return userIds.includes(user.id);
//             });
//             resolve(result)
//         },1000);
//     });
// }

// getComments()
//     .then(function(comments){
//         var userIds = comments.map(function(comment){
//             return comment.id_user; 
//         });

//         return getUsersById(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 };
//         });
//     })
//     .then(function(data) {
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.id_user;
//             });
//             html += `<li>${user.name} : ${comment.content}</li>`;

//         });
//         commentBlock.innerHTML = html;
//     })

// fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    });
}

function getUsersById(userIds) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            var result = users.filter(function(user) {
                return userIds.includes(user.id);
            })
            resolve(result)
        },1000);
    });
}

getComments()  
    // take user_id in comment and put in array
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.id_user;
        });
        return userIds;
    })
    // 
    .then(function(userIds) {
        return getUsersById(userIds)
        .then(function(users) {
            return {
                users: users,
                comments: comments
            }
        })

    })
    .then (function(data) {
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id = comment.id_user;
            });
            html += `<li>${user.name} : ${comment.content}</li>`
        })

        commentBlock.innerHTML = html;
    })