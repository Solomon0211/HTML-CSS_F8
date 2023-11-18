// // Xoá cấc phần tử trùng nhau trong mảng
// // Input
// arr = ['a','b','c','d','a','a','c']
// // Output
// arr = ['a','b','c','d']
arr = ['a','b','c','d','a','a','c']
function loop(start, end, cb){
    if(start<end) {
        cb(start);
        return loop(start+1, end , cb);
    }
}

function solve(newArr, addIndex) {
    var isExist = false;
    loop(0,newArr.length,function(index) {
        if(newArr[index] === addIndex) {
            isExist = true;
        }
    })
    if(isExist === false) {
        newArr.push(addIndex);
    }
}

var newArr = [];
loop(0,arr.length,function(index){
    solve(newArr, arr[index])
})

loop(0, newArr.length, function(index){
    console.log(newArr[index]);
})

