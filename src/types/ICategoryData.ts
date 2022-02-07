export default interface ISubcategoryData{ 
    name: string;
    name_encoded: string
}

export default interface ICategoryData{
    name: string,
    name_encoded: string,
    subcategories: ISubcategoryData
}