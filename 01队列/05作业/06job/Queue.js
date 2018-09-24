function Queue(){
    this.dataStore = [];
    //进队列，从尾部添加数据
    this.enqueue=function (element) {
        this.dataStore.push(element);
    }
    //进队列，从头部添加数据
    this.enHeadqueue=function (element) {
        this.dataStore.unshift(element);
    }
    //从队列头部删除数据，并且获得这个数据
    this.dequeue=function () {
        return this.dataStore.shift();
    }
    //从队列尾部删除数据，并且获得这个数据
    this.deEndqueue=function () {
        return this.dataStore.pop();
    }

    //获得队列最前面的数据
    this.front=function(){
        return this.dataStore[0];
    }
    //获得队列最后面的数据
    this.back=function () {
        return this.dataStore[this.dataStore.length-1];
    }
    //依次返回当前队列的数据
    this.toString=function () {
        return this.dataStore.toString();
    }
    //判断当前队列是否为空
    this.empty=function () {
        if(this.dataStore.length==0){
            return true;
        }
        else{
            return false;
        }
    }
    //变量当前队列的数据
    this.forEach=function (call) {
        var length = this.dataStore.length;
        for(var i=0;i<length;i++){
            call(this.dataStore[i],i);
        }
    }
    this.clear = function () {
        delete  this.dataStore;
        this.dataStore = [];
    }
}