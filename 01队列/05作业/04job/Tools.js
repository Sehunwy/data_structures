//4,按照个位排序
function SortingOne(queues, numbers) {

    //1，遍历数据
    numbers.forEach(function (number) {
        var index = number % 10;
        queues[index].enqueue(number);
    })

    numbers = [];

    //遍历队列
    queues.forEach(function (queue) {
        if (!queue.empty()) {
            //console.log(queue.toString());
            queue.forEach(function (num, index) {
                //把队列里面的数据取出，放到数组里面
                numbers.push(num);
            })
        }
    })
    return numbers;
}


function SortingTen(queues, numbers) {
    //1,遍历数组里面的数据
    numbers.forEach(function (number) {
        var index = Math.floor(number / 10);
        queues[index].enqueue(number);
    });
    //2,数组清空
    numbers=[];
    //3,遍历队列
    queues.forEach(function (queue) {
        //4遍历每个队列的时候，再次判断当前队列是否为空
        if(!queue.empty()){
            //5,对当前的队列进行遍历
            queue.forEach(function (number,index) {
                //6，把队列里面取得的每个数据添加到数组里面
                numbers.push(number);
            })
        }
    })
    return numbers;
}