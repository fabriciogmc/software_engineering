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


f2(1);
f2(2);
f1(3);
f1(4);