function LList() {
    this.head = new Node('head');
    this.insert = function (element) {
        //1,创建新的节点
        var node = new Node(element);
        //2,获得最后的节点
        var lastNode = this.lastNode();
        //3，和最后的节点连在一起
        lastNode.next = node;
        node.previous = lastNode;
        //新的节点就是最后的节点
        this.head.previous = node;
        node.next = this.head;
    }

    this.lastNode = function () {
        if (this.head.next == null) {
            return this.head;
        } else {
            var lastNode = this.head;
            while (lastNode.next.element != 'head') {
                lastNode = lastNode.next;
            }
            return lastNode;
        }
    }

    this.forEach = function (call) {
        call(this.head);
        if (this.head.next == null)
            return;
        var node = this.head.next;
        while (node != null && node.element != 'head') {
            call(node);
            node = node.next;
        }
    };

    this.forEachReverse = function (call) {
        if (this.head.next == null)
            return;
        var lastNode = this.head.previous;
        while (lastNode != null&&lastNode.element!='head') {
            call(lastNode);
            lastNode = lastNode.previous;
        }
    }

    this.find = function (element) {
        if(null==this.head.next)
            return null;
        var node = this.head.next;
        while ( node.element != element&& node.element != 'head') {
            node = node.next;
        }
        if(node.element=='head'){
            return null;
        }else{
            return node;
        }
    }

    this.remove = function (element) {
        //1,获得当前的节点
        var node = this.find(element);
        var previousNode = node.previous;
        var nextNode = node.next;
        previousNode.next=nextNode;
        nextNode.previous=previousNode;
    }

    this.insertAfter = function (element, after) {
        //1，找到当前的节点
        var node = this.find(after);
        if(null==node)
            return -1;
        //2,create the new node
        var newNode = new Node(element);
        //3,新节点和当前节点的后一个节点连在一起
        node.next.previous = newNode;
        newNode.next = node.next;
        //4,链接当前节点和after节点
        node.next = newNode;
        newNode.previous = node;
        return 1;
    }

    //实现advance(currElement,n) 方法，使当前节点向前移动n 个节点
    this.advance = function (currElement,n) {
        //获得当前的节点
        var buffer = this.find(currElement);
        var node = buffer;
        while (n>0) {
            node = node.previous;
            if(node.element!='head')
                n--;
        }
        if(node == buffer)
            return;
        //获得node的前一个节点
        var preNode = node.previous;
        //buffer前面的节点和buffer后面的节点连接在一起
        buffer.previous.next = buffer.next;
        buffer.next.previous = buffer.previous;
        //让preNode和node连接
        preNode.next = buffer;
        buffer.previous = preNode;
        //让node和buffer连接
        buffer.next = node;
        node.previous = buffer;

    }

    //实现back(currElement,n) 方法，使当前节点向后移动n 个节点
    this.back = function (currElement,n) {
        //获得当前的节点
        var buffer = this.find(currElement);
        var node = buffer;
        while (n>0) {
            node = node.next;
            if(node.element!='head')
                n--;
        }
        if(node == buffer)
            return;
        //获得node的后一个节点
        var nextNode = node.next;
        //buffer前面的节点和buffer后面的节点连接在一起
        buffer.previous.next = buffer.next;
        buffer.next.previous = buffer.previous;
        //让buffer和node连接
        buffer.next = nextNode;
        nextNode.previous = buffer;
        node.next = buffer;
        buffer.previous = node;
    }

    this.kill = function() {
        var node = this.head;
        var index = 1;
        while(node.next.next!=node){
            index++;
            node = node.next;
            if(index==3){
                this.remove(node.element);
                index = 0;
            }
        }
    }

}