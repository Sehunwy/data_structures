function LList() {
    this.head = new Node("head");
    this.insert=function (data) {
        //1,创建新的节点
        var buffer = new Node(data);
        //2,获得最后的节点
        var last = this.findLast();
        //3,把最后节点的next指向新节点
        last.next=buffer;
    }
    //1 2 3
    this.findLast=function () {
        var buffer= this.head;
        while(buffer.next!=null){
            buffer=buffer.next;
        }
        return buffer;
    }
    this.forEach=function (call) {
        var buffer= this.head;
        while(buffer!=null){
            call(buffer);
            buffer=buffer.next;
        }
    }

    this.find=function (data) {
        var buffer= this.head;
        while(buffer!=null){
            if(buffer.element==data){
                return buffer;
            }
            buffer=buffer.next;
        }
        return buffer;
    }

    this.findPrevious=function (data) {
        var buffer= this.head;
        var node=null;
        while(buffer!=null&&buffer.next!=null){
            if(buffer.next.element==data){
                node=buffer;
                return node;
            }
            buffer=buffer.next;
        }
        return node;
    }

    this.remove=function (data) {
        let nextNode =this.find(data).next;
        let preNode = this.findPrevious(data);
        if(nextNode!=null)
            preNode.next=nextNode;
    }

    this.insertAfter=function (element,after) {
        //1,创建当前的节点
        let node = new Node(element);
        //2，获得after节点
        let afterNode= this.find(after);
        //3, afterNode的后面节点和当前节点链接在一起
        node.next=afterNode.next;
        //4，把当前节点连在afterNode节点后面
        afterNode.next=node;
    }
    this.insertBefore=function (element,before) {
        //创建当前的节点
        let node = new Node(element);
        //获得before节点的前一个节点
        let preNode= this.findPrevious(before);
        //把before节点连到新节点的后面
         node.next=preNode.next;
        // //把preNode节点和新节点连到一起
         preNode.next=node;
    }


    //使当前节点向前移动n 个节点
    this.advance = function (currElement,n) {
        //找到当前的节点
        var CurrentNode = this.find(currElement);
        //获得当前节点的前一个节点
        var buffer = this.findPrevious(currElement);
        var preNode = buffer;
        while (preNode.element!='head'&&n>0){
            //获得前一个节点的前一个节点
            preNode = this.findPrevious(preNode.element);
            n--;
        }
        buffer.next = CurrentNode.next;
        CurrentNode.next = preNode.next;
        preNode.next = CurrentNode;

    }

    //使当前节点向后移动n 个节点
    this.back = function (currElement,n) {
        //找到当前的节点
        var CurrentNode = this.find(currElement);
        //假设当前的节点为最后的节点
        var lastNode = CurrentNode;
        //在n>0的条件下，下一个节点为空的时候停下来
        while (lastNode.next!=null&&n>0){
            //获得当前节点的后一个节点
            lastNode = lastNode.next;
            n--;
        }
        //当前的节点节点（CurrentNode）和lastNode相对，说明CurrentNode就是最后一个节点
        if(lastNode == CurrentNode) {
            return;
        }

        //当前节点的前一个节点和当前节点的后一个节点连接在一起
        var CurrentPre = this.findPrevious(currElement);
        CurrentPre.next = CurrentNode.next;
        //把当前节点连接在lastNode节点后面
        CurrentNode.next = lastNode.next;
        lastNode.next = CurrentNode;
    }
}
