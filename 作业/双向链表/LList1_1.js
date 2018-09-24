function LList() {
    this.head=new Node('head');
    this.insert=function (element) {
        //1,创建新的节点
        var node =  new Node(element);
        //2,获得最后的节点
        var lastNode = this.lastNode();
        //3，和最后的节点连在一起
        lastNode.next=node;
        node.previous=lastNode;
    }

    this.lastNode=function () {
        var lastNode = this.head;
        while(lastNode.next!=null){
            lastNode = lastNode.next;
        }
        return lastNode;
    }

    this.forEach=function (call) {
        var node = this.head;
        while(node!=null){
            call(node);
            node=node.next;
        }
    };

    this.forEachReverse=function (call) {
        var lastNode = this.lastNode();
        while(lastNode!=null){
            call(lastNode);
            lastNode= lastNode.previous;
        }
    }

    this.find=function (element) {
        var node = this.head;
        while(node!=null&&node.element!=element){
            node=node.next;
        }
        return node;
    }

    this.remove=function (element) {
        //1,获得当前的节点
        var node = this.find(element);
        //2,获得当前节点的前一个节点
        var preNode = node.previous;
        //3,获得当前节点的后一个节点
        var nextNode= node.next;
        //4，链接节点
        preNode.next=nextNode;


        if(nextNode!=null){
            preNode = nextNode.previous;
        }
    }

    this.insertAfter=function (element,after) {
        //1，找到当前的节点
        var node =this.find(after);
        //2,create the new node
        var newNode = new Node(element);
        //3,新节点和当前节点的后一个节点连在一起
        if(node.next!=null)
            node.next.previous=newNode;
        newNode.next=node.next;
        //4,链接当前节点和after节点
        node.next = newNode;
        newNode.previous=node;
    }

    this.insertBefore = function (element,before) {
        //获得当前节点
        var node = this.find(before);
        if(node == null)
            return;
        //创建一个新的节点
        var newNode = new Node(element);
        //获得当前节点的前一个节点
        //使before节点前面的节点和当前新的节点连接
        var preNode = node.previous;
        preNode.next = newNode;
        newNode.previous = preNode;
        //新节点和before节点连接
        node.previous = newNode;
        newNode.next = node;

    }

    //实现advance(currElement,n) 方法，使当前节点向前移动n 个节点
    this.advance = function (currElement,n) {
        //获得当前的节点
        var node = this.find(currElement);
        //获得当前节点的前一个节点
        var preNode = node.previous;
        var buffer = preNode;
        //获得当前节点的后一个节点
        var nextNode = node.next;
        while(preNode!=this.head&&n>0) {
            n--;
            preNode = preNode.previous;
        }
        if(node.previous == preNode) {
            return;
        }
        else  {
            var preNext = preNode.next;
            preNode.next = node;
            node.previous = preNode;
            node.next = preNext;
            preNext.previous = node;
            buffer.next = nextNode;
            if(nextNode!=null)
                nextNode.previous = buffer;
        }
    }

    //实现back(currElement,n) 方法，使当前节点向后移动n 个节点
    this.back = function (currElement,n) {
        //获得当前节点
        var node = this.find(currElement);
        //获得当前节点的前一个节点
        var preNode = node.previous;
        //获得当前节点的后一个节点
        var nextNode = node.next;
        var lastNode = node;
        while(lastNode.next!=null&&n>0){
            n--;
            lastNode = lastNode.next;
        }
        if(lastNode==node) {
            return;
        }
        else {
            //获得lastNode的后一个节点
            var nextlastNode = lastNode.next;
            if(lastNode!=null){
                lastNode.next = node;
                node.previous = lastNode;
                node.next = nextlastNode;
                if(nextlastNode!=null)
                    nextlastNode.previous = node;
                preNode.next = nextNode;
                nextNode.previous = preNode;
            }
        }
    }
}
