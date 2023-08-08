  let countEl = document.getElementById('count-el');
  let count = 0;

  function incCount() {
      count += 1 ;
      countEl.innerHTML = count; 
  }

  console.log(count)
  let saveEl = document.getElementById('save-el')

  function save() {
     let entry =  count + ' - ';
     saveEl.innerHTML += entry;
     count = 0;
     countEl.innerHTML = count;
  }


    
