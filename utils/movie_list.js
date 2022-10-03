class ListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
        this.sort={
            attribute:"ratings",
            type:"asd"
        }
    }

    insertNode(data){
        let newNode = new ListNode(data)
        if(this.head==null){
            this.head = newNode
            this.size++;
        } else {
            let temp = this.head;
            while(temp.next!=null){
                temp=temp.next;
            }   
            temp.next = newNode     
            this.size++;   
        }
        return newNode;
    }

    insertAtBegining(data){
        let newNode =new ListNode(data)
        newNode.next=this.head;
        this.head = newNode;
    }

    insertAtIndex(data, idx){
        if(this.size >= idx && idx > 0){
            let i=1;
            let temp = this.head;
            let prevs = null;
            while(i<idx && temp.next!=null){ 
                prevs=temp;                   
                temp=temp.next;
                i++;
            }
            if(prevs==null){
                let newNode =new ListNode(data)
                newNode.next=temp;
                this.head=newNode;
            } else {
                let newNode =new ListNode(data)
                newNode.next=temp;
                prevs.next=newNode;
            }
        } else {
            console.log("You have only 1 - "+this.size+" elements!")
        }
    }

    updateAtIndex(idx, data){
        if(this.size >= idx && idx > 0){
            let i=1;
            let temp = this.head;
            while(i<idx && temp.next!=null){
                temp=temp.next;
                i++;
            }
            temp.data=data;
        } else {
            console.log("You have only 1 - "+this.size+" elements!")
        }
    }

    findMid(nodes){
        let slow = nodes;
        let fast = nodes.next;
        while(fast !=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        } 
        return slow
    }

    findSortAttributeMin(L, R){
        let result = false;
        if(this.sort.type=="asd"){
            if(this.sort.attribute=="ratings"){
                if(L.data.ratings < R.data.ratings){
                    result=true;
                }
            } 
            if(this.sort.attribute=="name"){
                if(L.data.name < R.data.name){
                    result=true;
                }
            }
        } 
        if(this.sort.type=="dsd") {
            if(this.sort.attribute=="ratings"){
                if(L.data.ratings > R.data.ratings){
                    result=true;
                }
            } 
            if(this.sort.attribute=="name"){
                if(L.data.name > R.data.name){
                    result=true;
                }
            }
        }
        return result;
    }

    merge(L, R){
        if(L===null){
            return R
        }
        if(R===null){
            return L
        }
        let node;
        if(this.findSortAttributeMin(L, R)){
            node = L;
            node.next = this.merge(L.next, R)
        } else {
            node = R;
            node.next = this.merge(L, R.next)
        }
        return node;
    }

    mergeSort(nodes){
        if(nodes===null || nodes.next ===null){
            return nodes;
        }
        let L = nodes;
        let mid = this.findMid(nodes)
        let R = mid.next;
        mid.next=null;
        L = this.mergeSort(L)
        R = this.mergeSort(R)
        return this.merge(L, R);
    }

    mergeSortRun(attribute, type){      
        if(attribute!==null && attribute!==undefined && type !==null && type !== undefined){
            this.sort.attribute=attribute;
            this.sort.type=type;
        }
        this.head = this.mergeSort(this.head)
    }

    deleteAtIndex(idx){
        if(this.size >= idx && idx > 0){
            let i=1;
            let temp = this.head;
            let prevs = null;
            while(i<idx && temp.next!=null){ 
                prevs=temp;                   
                temp=temp.next;
                i++;
            }
            if(prevs==null){
                this.head=temp.next;
            } else {
                prevs.next=temp.next;
            }
        } else {
            console.log("You have only 1 - "+this.size+" elements!")
        }
    }

    display(){
        if(this.head==null){
            console.log("Empty list!!")
            return;
        }
        let temp = this.head;
        const list = []
        while(temp.next!=null){
            list.push(temp.data);
            temp=temp.next;
        }
        list.push(temp.data);
        return list;
    }

}


module.exports = LinkedList;