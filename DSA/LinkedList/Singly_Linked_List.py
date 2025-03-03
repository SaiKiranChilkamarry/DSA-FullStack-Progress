class Node :
    def __init__(self,data):
        self.data=data
        self.next=None
class SinglyLinkedList:
    def __init__(self):
        self.head=None
    def insertionAtStart(self,key):
        newNode=Node(key)
        if self.head:
            newNode.next=self.head
            self.head=newNode
            print("element insert at start of the Linked List\n")
            self.display()
            return
        self.head=newNode
        print("element inserted at start in an empty Linked list\n")
        self.display()
    def insertionAtPosition(self,key,position):
        newNode=Node(key)
        if position==0:
            newNode.next=self.head
            self.head=newNode
            print("element inserted at position ",0,"\n")
            self.display()
            return
        
        count=0
        temp=self.head
        while temp and count<position-1:
            temp=temp.next
            count+=1
        if temp is None:
            print("position out of range\n")
        else:
            newNode.next=temp.next
            temp.next=newNode
            print(int(input(f"Enter the value to insert at position {position}\n")))
            self.display()
    def insertionAtEnd(self,key):
        newNode=Node(key)
        if self.head==None:
            self.head=newNode
            print("element inserted at end in empty Linked List\n")
            self.display()
            return
        temp=self.head
        while temp.next is not None:
            temp=temp.next
        temp.next=newNode
        print("element inserted at end\n")
        self.display()
    def deletionAtStart(self):
        if self.head is None:
            print("Linked List is empty\n")
        elif self.head.next is None:
            self.head=None
            print("Linked List underflow\n")
        else:
            self.head=self.head.next
            self.display()
    def deletionAtPosition(self,position):
        if self.head is None:
            print("LinkedList is empty\n")
        elif position==0:
            self.head=self.head.next
            if self.head is None:
                print("Linked List is empty\n")
            else:
                self.display()
        else:
            count=0
            temp=self.head
            while temp and count<position-1 :
                temp=temp.next
                count += 1

            if temp is None or temp.next is None:  
                print("Index out of range\n")
                return

            temp.next = temp.next.next
            self.display()
    def deletionAtEnd(self):
        if self.head is None:
            print("Linked List is empty\n")
        elif self.head.next is None:
            self.head=None
            print("Linked List underflow\n")
        else:
            temp=self.head
            while temp.next.next is not None:
                temp=temp.next
            temp.next=None
            self.display()
            
                
    def display(self):
        if self.head==None:
            print("LinkedList is empty\n") 
        else:
            temp=self.head
            while temp:
                print(temp.data," --> ",end="")
                temp=temp.next
L=SinglyLinkedList()
def switchCase(option):
    if option==1:
        key=int(input("enter value to insert at start\n"))
        L.insertionAtStart(key)
    elif option==2:
        position = int(input("enter the position to insert the value\n"))
        key=int(input(f"Enter the value to insert at position {position}\n"))
        L.insertionAtPosition(key,position)
    elif option==3:
        key=int(input("enter value to insert at end\n"))
        L.insertionAtEnd(key)
    elif option==4:
        L.deletionAtStart()
    elif option==5:
        position = int(input("enter the position to delete the element\n"))
        L.deletionAtPosition(position)
    elif option==6:
        L.deletionAtEnd()
    
    elif option==7:
        L.display()
    else:
        print("enter valid option\n")


while True:
    option=int(input("\nselect the operation you want to perform\n1:insertionAtStart\n2:insertionAtPosition\n3:insertionAtEnd\n4:deletionAtStart\n5:deletionAtPosition\n6:deletionAtEnd\n7:display\n8:exit\n"))
    if option==8:
        break
    else:
        switchCase(option)
    