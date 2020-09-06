class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height); 
      
      World.add(World, this.body); 
    }
};  