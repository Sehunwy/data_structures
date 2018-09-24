function Node(element,left,right,parent) {
    this.element = element;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.show = function () {
        return this.element;
    }
}