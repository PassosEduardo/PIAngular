export default class PlayerModel{
    
    title?: string;
    subtitle?: string;
    birthDate?: Date;
    nationality?: string;
    MarketValue?: number;
    image?: string;
    position?: string;

    constructor(
        title?:string, 
        subtitle?:string,
        birthDate?: Date,
        nationality?: string,
        MarketValue?: number,
        image?: string,
        position?: string,){
            this.title = title
            this.MarketValue = MarketValue;
            this.birthDate = birthDate;
            this.subtitle = subtitle;
            this.nationality = nationality;
            this.image = image;
            this.position = position;
    }

}