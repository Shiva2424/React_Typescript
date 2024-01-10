export function add(a: number,b:number = 0) {
    return a+b;
}

export function forEachFunc(items: string[], callback: Function) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

//module.exports = {add,forEachFunc}