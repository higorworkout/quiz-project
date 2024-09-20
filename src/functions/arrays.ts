export function shuffle(elements: any[]): any[] {
  return elements
        .map(valor => ({ valor, aleatorio: Math.random()}))
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
        .map(obj => obj.valor)
}