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