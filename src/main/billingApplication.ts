interface productInterface{
  quantity:number,
  item:string,
  amount:number
  type:string
  newAmount?:number | 0
}

const nonTaxableItem=[
  "pills",
  "book",
  "food",
  "medicines"
]

export class billingApplication {
    product:productInterface[]
    totalTax:number
    totalAmount:number
  
    constructor(product:productInterface[]) {
      this.product=product
      this.totalTax=0
      this.totalAmount=0
    }

    percentValue(percent:number,amount:number):number{
      return amount*percent/100
    }

    taxCalculation(type:string,amount:number):number{
        switch(type){
          case "import duty":
            return this.percentValue(5,amount)
          case "basic tax":
            return this.percentValue(10,amount)
          case "basic and imported":
            return this.percentValue(15,amount)
          default :
            return 0
        }
    }

    calculateValueWithTax(){
      return(
        this.product.map((items:productInterface)=>{
          let value = nonTaxableItem.filter(s => s.includes(items.item))
          if(!value.length && items.type=="imported"){
              items.newAmount = this.taxCalculation("basic and imported",items.amount)
          }
          else if(!value.length && items.type=="imported"){
            items.newAmount = this.taxCalculation("import duty",items.amount)
          }
          else if(!value.length){
            items.newAmount = this.taxCalculation("basic tax",items.amount)  
          }
          else{
              items.newAmount = 0
          }
        })
      )
    }

    returnItem(){
      this.product.map((items:productInterface)=>{
        let newAmount= items.newAmount! + items.amount
        console.log(items.quantity+" "+items.item+" at "+newAmount)
        this.totalTax=this.totalTax+items.newAmount!
        this.totalAmount=this.totalAmount + newAmount
      })
      this.product.push()
    }
    generateBill(){
      this.returnItem()
      console.log("Total Tax",Math.round(this.totalTax*2)/2)
      console.log("Total Amount",this.totalAmount)
    }

    disp():void { 
        this.calculateValueWithTax()
        this.generateBill()
        return
     }  
}