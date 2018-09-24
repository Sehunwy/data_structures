function BST() {
    this.root = null;
    this.insert = function (element) {
        //创建新节点
        var node = new Node(element,null,null);
        if(this.root==null) {
            this.root = node;
        }
        else {
            var parent = this.root;
            while (true){
                var buffer = parent;
                if(parent.element<node.element) {
                    parent = parent.right;
                    if(parent == null) {
                        buffer.right = node;
                        break;
                    }
                }
                else  {
                    parent = parent.left;
                    if(parent == null) {
                        buffer.left = node;
                        break;
                    }
                }
            }
        }
    }
}