function BST(){
    this.root = null;    // the root attribute will be assigned to a node later
}
function Node(val){
    this.value = val;   // the value attribute will be assigned based on user input when a node is instantiated
    this.left = null;   // the left attribute will be assigned to a node later
    this.right = null;  // the right attribute will be assigned to a node later
}

BST.prototype.insert = function(val) {
    if (this.root == null) {
        this.root = val;
    }
    else if (this.root !== null){
            if (val <= this.root) {
                this.right = val; 
            }
            else { (this.left = val);
            }     
    }   
}

