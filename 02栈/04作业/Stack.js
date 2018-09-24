function Stack() {
    this.dataStore=[];
    this.push=function (element) {
        this.dataStore[this.dataStore.length]=element;
    }

    this.pop=function(){
        if(this.dataStore.length<1)
            return null;
        //取得最后的数据
        var buffer = this.dataStore[this.dataStore.length-1];
        //把最后的数据置空
        this.dataStore[this.dataStore.length-1]=null;
        //改变数组的长度
        this.dataStore.length--;
        //返回数据
        return buffer;
    }

    this.peek=function () {

        //获得数组的长度
        var length = this.dataStore.length;

        return this.dataStore[length-1];
    }

    this.length = function () {
        return this.dataStore.length;
    }

    this.clear=function () {
        delete this.dataStore;
        this.dataStore=[];
    }

    this.forEach=function (call) {
        //1,获得数组的长度
        var length = this.dataStore.length;
        //2,遍历数据
        for(var i=length-1;i>=0;i--){
            // var item= this.dataStore[i];
            call(this.dataStore[i]);
        }
    }

}