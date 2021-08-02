import { billingApplication } from "./main/billingApplication"

const productList1=[{
  quantity:1,
  item:"book",
  amount:124.99,
  type:""
},{
  quantity:1,
  item:"music CD",
  amount:149.99,
  type:""
},
{
  quantity:1,
  item:"chocolate",
  amount:40.85,
  type:""
}]

const productList2=[{
  quantity:1,
  item:"box of chocolates",
  amount:100.00,
  type:"imported"
},{
  quantity:1,
  item:"bottle of perfume",
  amount:470.50,
  type:"imported"
}]

const productList3=[{
  quantity:1,
  item:"bottle of perfume",
  amount:270.99 ,
  type:"imported"
},{
  quantity:1,
  item:"bottle of perfume",
  amount:180.99,
  type:""
},
{
  quantity:1,
  item:"packet of headache pills",
  amount:19.75 ,
  type:""
},{
  quantity:1,
  item:"chocolates",
  amount:210.25,
  type:"imported"
}]

const shoppingList1 = new billingApplication(productList1)
console.log(shoppingList1.disp())
const shoppingList2 = new billingApplication(productList2)
console.log(shoppingList2.disp())
const shoppingList3 = new billingApplication(productList3)
console.log(shoppingList3.disp())