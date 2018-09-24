function BST() {
    this.root = null;
    this.insert = function (element) {
        //创建新的节点
        var node = new Node(element,null,null,null);
        if(this.root == null) {
            this.root = node;
        }
        else {
            //设置父节点
            var parent = this.root;
            while (true) {
                var buffer = parent;
                if(node.element>parent.element) {
                    parent = parent.right;
                    if(parent == null) {
                        node.parent = buffer;
                        buffer.right = node;
                        break;
                    }
                }
                else {
                    parent = parent.left;
                    if(parent == null) {
                        node.parent = buffer;
                        buffer.left = node;
                        break;
                    }
                }
            }

        }
    }

    this.inOrder = function (node) {
        if(node!=null){
            this.inOrder(node.left);
            console.log(node.show(node));
            this.inOrder(node.right);
        }
    }

    this.preOrder = function (node) {
        if(node!=null){
            console.log(node.show(node));
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    this.postOrder = function (node) {
        if(node!=null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show(node));
        }
    }

    this.find = function (element) {
        var node = this.root;
        while (true) {
            if(node == null)
                return node;
            if(node.element == element)
                return node;
            else if(node.element>element){
                node = node.left
            }
            else {
                node = node.right;
            }
        }
    }

    this.getMin = function (element) {
        var node = this.find(element);
        while (node.left!=null) {
            node = node.left;
        }
        return node;
    }

    this.getMax = function (element) {
        var node = this.find(element);
        while (node.right!=null) {
            node = node.right;
        }
        return node;
    }

}