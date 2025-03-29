function groupBy(users, key) {
    return users.reduce((result, user) => {
        let groupKey = user[key]; 
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(user);
        return result;
    }, {});
}
let user=
[ 
    { name:"Tu",age:18,city:"Thạch Khôi"},
    { name:"Mai Lynhh Ngu",age:18,city:"Hải Dương"},
    { name: "Bình",age:19,city:"Nghệ An"},
    { name: "Trường",age:19,city:"Hải Dương"}
];
console.log(groupBy(user,"city"));