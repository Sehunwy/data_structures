function Deque() {
    this.dataStore = [];

    //进队列，从尾部添加数据
    this.enqueue = function (data) {
        var length = this.length();
        this.dataStore[length] = data;
    }

    //进队列，从头部添加数据
    this.enqueuehead = function (data) {
        var length = this.length();
        for(var i=length;i>=1;i--) {
            this.dataStore[i] = this.dataStore[i-1];
        }
        this.dataStore[0] = data;
    }

    //从队列头部删除数据，并且获得这个数据
    this.dequeue=function () {
        var length = this.length();
        var front = this.dataStore[0];
        for(var i=1;i<length;i++) {
            this.dataStore[i-1] = this.dataStore[i];
        }
        this.dataStore[length-1] = null;
        this.dataStore.length--;
        return front;
    }

    //从队列尾部删除数据，并且获得这个数据
    this.dequeueback=function () {
        var length = this.length();
        var back = this.dataStore[length-1];
        this.dataStore[length-1] = null;
        this.dataStore.length--;
        return back;
    }

    //依次返回当前队列的数据
    this.toString=function () {
        return this.dataStore.toString();
    }

    //获得队列最前面的数据
    this.front=function(){
        return this.dataStore[0];
    }

    //获得队列最后面的数据
    this.back=function () {
        return this.dataStore[this.dataStore.length-1];
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

    //获取队列的长度
    this.length = function () {
        return this.dataStore.length;
    }

    //遍历队列
    this.forEach = function (call) {
        //获得队列的长度
        var length = this.length();
        for(var i=0;i<length;i++) {
            call(this.dataStore[i]);
        }
    }

    this.clear = function () {
        delete  this.dataStore;
        this.dataStore = [];
    }
}