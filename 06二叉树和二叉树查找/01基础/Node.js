function Node(element,left,right) {
    this.element = element;
    this.left = left;
    this.right = right;
    this.show = function () {
        return this.element;
    };
}
