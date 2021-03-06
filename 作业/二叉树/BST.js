function BST() {
    this.root = null;
    this.insert = function (element) {
        //1， 创建新节点
        var node = new Node(element, null, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            //设置父节点
            var parent = this.root;
            while (true) {
                var buffer = parent;
                if (node.element > parent.element) {
                    //和根节点的右边节点进行比较
                    parent = parent.right;
                    if (parent == null) {
                        node.parent = buffer;
                        buffer.right = node;
                        break;
                    }
                } else {
                    //和根节点的左边节点进行比较
                    parent = parent.left;
                    if (parent == null) {
                        node.parent = buffer;
                        buffer.left = node;
                        break;
                    }
                }
            }
        }
    }

    this.find = function (element) {
        var node = this.root;
        while (true) {
            if (node == null)
                return node;
            if (node.element == element) {
                return node;
            } else if (element < node.element) {
                node = node.left;
            } else if (element > node.element) {
                node = node.right;
            }
        }
    }

    this.getMin = function (element) {
        var node = this.find(element);
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    this.getMax = function (element) {
        var node = this.find(element);
        while (node.right != null) {
            node = node.right;
        }
        return node;
    }

    this.remove = function (element) {
        var node = this.find(element);
        if (node == null)
            return;
        if (node.parent == null) {
            if (node.right != null) {
                this.root = node.right;
                this.root.parent = null;
                var minNode = this.getMin(node.right.element);
                minNode.left = node.left;
                node.left.parent = minNode;
            } else {
                this.root = node.left;
                this.root.parent = null;
            }
        }else{
            var parent = node.parent;
            if(node.element>parent.element){
                if(node.right!=null){
                    var minNode = this.getMin(node.right.element);
                    minNode.left=node.left;
                    node.left.parent=minNode;
                    parent.right=node.right;
                    node.right.parent=parent;
                }else{
                    parent.right=node.left;
                    if(node.left!=null)
                        node.left.parent=parent;
                }
            }else{
                if(node.right!=null){
                    var minNode = this.getMin(node.right.element);
                    minNode.left=node.left;
                    node.left.parent=minNode;
                    parent.left=node.right;
                    node.right.parent=parent;
                }else{
                    parent.left=node.left;
                    if(node.left!=null)
                        node.left.parent=parent;
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

    this.preOrder = function(node) {
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

}