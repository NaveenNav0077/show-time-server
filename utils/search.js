class TrieNode{
    constructor(){
        this.nodes = new Array(26);
        for(let i=0;i<26;i++){
            this.nodes[i]=null;
        }
        this.data=null;
    }
}

class Tries{
    constructor(){
        this.rootNode = new TrieNode();
    }

    addKey(key, data){
        let node = this.rootNode;
        for(let i=0;i<key.length;i++){
            let idx = key.charCodeAt(i)-97;
            if(node.nodes[idx]==null){
                node.nodes[idx]=new TrieNode();
                node=node.nodes[idx];
            } else {
                node=node.nodes[idx];
            }
        }
        if( node.data == null ){
            node.data = [data];
        } else {
            node.data.push(data)
        }        
        //console.log(key+" added sucessfully")
    }

    searchKey(key){
        let node = this.rootNode;
        for(let i=0;i<key.length;i++){
            let idx = key.charCodeAt(i)-97;
            if(node.nodes[idx]!=null){
                node=node.nodes[idx];
            } else {
                break;
            }
        }
        return node.data;
    }
}

module.exports = Tries;