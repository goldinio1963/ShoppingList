
function checklist(){
    let ul = document.querySelector('ul');
    ul.addEventListener( 'click', ( event ) => {
        if(event.target.matches('.check')){
            let li = event.target.parentElement.parentElement;
            if(event.target.parentElement.parentElement.className == 'addedItem'){
                li.classList.add('elemntCheck');
                li.classList.remove('addedItem');
            }
            else {
                li.classList.remove('elemntCheck');
                li.classList.add('addedItem');
            }
        }
        if(event.target.matches('.delete')){
            event.target.parentElement.parentElement.remove();
        }
    });
}

function addElement(){
    let addButton = document.querySelector( '.addItem' );
    let item = document.querySelector('.item');

    addButton.addEventListener( 'click', ( event ) => {
      event.preventDefault();

        let ul = document.querySelector('ul');
        if(!item.value == ""){
            ul.innerHTML +=
            `
                <li class="addedItem">
                    ${item.value}
                    <div class="itemButtons">
                        <button type="button" class="check">
                            check
                        </button>
                        <button type="button" class="delete">
                            delete
                        </button>
                    </div>
                </li>
            `;
            item.value = "";
        };
    });
}
  
  
function init(){
    addElement();
    checklist();
}
  
init();