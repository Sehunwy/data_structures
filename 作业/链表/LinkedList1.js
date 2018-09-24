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
        //把preNode节点和新节点连到一起
        preNode.next=node;
    }


    //使当前节点向前移动n 个节点
    this.advance = function (currElement,n) {
        let currNode = this.find(currElement);
        let node = new Node(currNode.element);
        let previous = this.findPrevious(currNode.element);
        while(n>0){
            if(previous!=this.head) {
                node = currNode;
                var nodeNext =node.next;
                var previousP = this.findPrevious(previous.element);
                n--;
                previous.next = previous;
                previousP.next = node;
                node.next = previous;
                previous.next = nodeNext;
                previous = this.findPrevious(node.element);
            }
            else {
                n=0;
            }
        }
    }

    //使当前节点向后移动n 个节点
    this.back = function (currElement,n) {
        let currNode = this.find(currElement);
        let node = new Node(currNode.element);
        let nextNode = currNode.next;
        let last = this.findLast();
        while(n>0){
            var currPre = this.findPrevious(node.element);
            if(node==last) {
                n=0;
            }
            else {
                var nextNNode = nextNode.next;
                node.next = node;
                currPre.next = nextNode;
                currPre.next.next = node;
                if(nextNNode!=null){
                    node.next = nextNNode;
                    n--;
                    nextNode = node.next;
                }
                else {
                    node.next = null;
                    n=0;
                }



            }


        }
    }
}
