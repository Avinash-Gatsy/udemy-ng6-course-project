export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    // constructor() built-in fn which will be executed when yu call an instance of this class
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
