let todoList=[
{
  item:'Buy Milk',
  dueDate:'4/10/2023'
},
{
  item:'Go to College',
  dueDate:'4/10/2023'
}
];

displayItems();

function addTodo(){
  let inputElement =document.querySelector('#todo-input');
  let dataElement =document.querySelector('#todo-date');

  let todoItem=inputElement.value;
  let todoDate=dataElement.value;
  todoList.push({item: todoItem,dueDate:todoDate});
  inputElement.value='';
  dataElement.value='';

  displayItems();
}

  function displayItems(){
    let containerElement=document.querySelector('.todo-container');

    let newHtml='';


    // displayElemet.innerText=''; // does not reapeat item second time 
    for(let i=0;i<todoList.length;i++){
      // let item=todoList[i].item;
      // let dueDate=todoList[i].dueDate;
      let {item,dueDate}=todoList[i];

      newHtml +=`
      <span> ${item}</span>
      <span> ${dueDate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i},1);
      displayItems();">Delete</button>
      `;

    // displayElement.innerText = displayElemet.innerText + "\n" + todoList[i];  //To dislpay the item 
    }
    containerElement.innerHTML=newHtml;
  }
