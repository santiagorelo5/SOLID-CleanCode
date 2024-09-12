interface bird {
    eat():void;
}

interface FlyingBird {
    fly():number;
}

interface RunningBird{
    run():void;
}

interface SwimmerBird {
    swim():void;
}

class Tucan implements bird, FlyingBird{
    public fly(){return 100;}
    public eat(){}
}

class Humminbird implements bird, FlyingBird {
    public fly(){ return 250;}
    public eat(){}
}

class Ostrich implements bird ,RunningBird {
    public eat(){}
    public run(){}
}

class Penguin implements bird ,SwimmerBird {
    public eat(){}
    public swim(){}
}