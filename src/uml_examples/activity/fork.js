/*
** A simple fork and join example
**
** Fabricio G. M. de Carvalho, DSc.
**
*/



function task1(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('task 1 resolved! id: ' + id.toString());
      }, 2000);
    });
  }

  function task2(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('task 2 resolved! id:' + id.toString());
      }, 3000);
    });
  }

  async function f1(id){
    let result = await task1(id);
    console.log(result);
  }

async function f2(id){
    let result = await task2(id);
    console.log(result);
}  


/* The followint asynchronous function calls correspond
** to a forked tasks with no join.
*/

f2(1);
f2(2);
f1(3);
f1(4);

/* The following call to method all synchronizes all 4 tasks.
** because of it, the printed id is done in order, differently
** from the previous case.
*/
Promise.all([task2(5), task1(6), task2(7), task1(8)]).then((values) => {
  console.log(values);
});