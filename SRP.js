
// *single responsibility principle


// !wrong practice

//     class Invoice {
//    constructor(name, amount, date) {
//      this.name = name;
//      this.amount = amount;
//     this.date = date;
//  }
//    calculate() {
//    this.render(`Your invoice is ${this.amount}`);
//   }
// }

// * after modification

class Invoice {
  constructor(name, amount, date) {
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.invoiceRender =new InvoiceRender()
  }

  calculate() {
    this.invoiceRender.render(`Your invoice is ${this.amount}`);
  }
}

class InvoiceRender{
    render(invoice){
        console.log(invoice);
    }
}
