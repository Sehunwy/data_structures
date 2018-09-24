function Set() {
    this.dataStore = [];
    this.head=new Node('head');
    this.add = function (data) {
        var node = new Node(data);
        var lastNode = this.lastNode();
        var head = this.head;
        var headnext = head.next;

        if(headnext == null){
            lastNode.next=node;
            node.previous=lastNode;
            return true;
        }
        else {
            while(head.next!=null) {
                if(head.next.element==data)
                    break;
                head = head.next;
            }
            if(head == lastNode) {
                lastNode.next=node;
                node.previous=lastNode;
                return true;
            }

        }
        return false;
    }

    this.lastNode=function () {
        var lastNode = this.head;
        while(lastNode.next!=null){
            lastNode = lastNode.next;
        }
        return lastNode;
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
        if(element=='head')
            return false;
        //2,获得当前节点的前一个节点
        var preNode = node.previous;
        //3,获得当前节点的后一个节点
        var nextNode= node.next;
        //4，链接节点
        preNode.next=nextNode;
        if(nextNode!=null){
            preNode = nextNode.previous;
        }
        return true;
    }


    this.forEach=function (call) {
        var node = this.head;
        while(node!=null){
            call(node);
            node=node.next;
        }
    }
}
