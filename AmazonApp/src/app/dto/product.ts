export class Product {

    constructor(public id:number,public sku:string,public name:string,
        public description:string,public unitPrice:number,
        public imageUrl:string,public active:boolean,public unitsInStock:number,
        public dateCreated:Date,public lastUpdated:Date)
        {
            this.id=id;
            this.sku=sku;
            this.name=name;
            this.description=description;
            this.unitPrice=unitPrice;
            this.imageUrl=imageUrl;
            this.active=active;
            this.unitsInStock=unitsInStock;
            this.dateCreated=dateCreated;
            this.lastUpdated=lastUpdated;
            
            
            
            
        }
}

