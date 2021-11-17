const questionOne = function questionOne(arr){
    var arr1 = [];
    var object = {};

    function prime(num){
        if(num < 2){
            return false;
        }
        for(let i = 2; i < num; i++){
            if (num % i == 0){
                return false;
            }
        }
        return true;
    }

    if(arr == null){
        return {};
    }

    for (let i = 0; i < arr.length; i++) {
            arr1[i] = Math.abs(arr[i] * arr[i] - 7);
            let key = arr1[i];
            keyvalue = prime(key);
            object[arr1[i]] = keyvalue;
    }
    return object;
}

const questionTwo = function questionTwo(arr) {
    return Array.from(new Set(arr))
}

const questionThree = function questionThree(arr) {
    var arr1 = Array.from(new Set(arr))
    var arr2 = [];
    var object = {};

    if(arr1.length < 2 || arr1 == null)
        return {};

    for(var i = 0; i < arr1.length; i++){
        var a = arr1[i].split('');
        a.sort();
        var key = a.join('');
        if(object[key] == null){
            var value = [];
            value.push(i);
            object[key] = value;
        }else{
            object[key].push(i);
        }
    }

    for(var j in object){
        if(object[j].length > 1){
            for(var i = 0; i < object[j].length;  i++){
                arr2.push(arr1[object[j][i]]);
            }
        }
    }

    if(arr2.length == 0){
        return {}
    }
    
    for(var i = 0; i < arr2.length; i++){
        return {[arr2[0].split('').sort().join('')]:arr2};
    } 
}


const questionFour = function questionFour(num1, num2, num3) {
    var num = 0, sum = 0;
    function factorial(num){
        if(num < 1){
            return 1;
        }else{
            return num * arguments.callee(num - 1);
        }
    }
    num = factorial(num1) + factorial(num2) + factorial(num3);
    sum = num1 + num2 + num3;

return Math.floor(num / (sum/3));
}

module.exports = {
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}