//*  Dependency Inversion Principle

//*     tightly coupled (BAD)  => we have created a dependency on a specific request implementation

// class InventoryRequester {
//   constructor() {
//     this.REQ_METHOD = ["HTTP"];
//   }
//   requestItem(item) {
//     // ...
//   }
// }

// class InventoryTracker {
//   constructor(items) {
//     this.items = items;

//     this.requester = new InventoryRequester();
//   }
//   requestItem() {
//     this.items.forEach((item) => {
//       this.requester.requestItem(item);
//     });
//   }
// }

// const inventoryTracker = new InventoryTracker(["apples", "bananas"]);
// inventoryTracker.requestItem();

//*     loosely coupled  (GOOD)

class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHOD = ["HTTP"];
  }

  requestItem(item) {
    // ...
    console.log("item :>> ", item);
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHOD = ["WS"];
  }

  requestItem(item) {
    // ...
    console.log("item :>> ", item);
  }
}

const inventoryTracker = new InventoryTracker(
  ["apples", "bananas"],
  new InventoryRequesterV2()
);
inventoryTracker.requestItems();
