export class Product {
    constructor(
        public id: number, // deleted '?' 
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number 
    ) {}
}