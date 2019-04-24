export class App {
  items = App.createItems();
  
  static createItems() {
    let items = [];
    for (let i=0; i<200; i++) {
      items.push({ id: `${i}`, value: `Test ${i*i}`});
    }
    return items;
  }
}
