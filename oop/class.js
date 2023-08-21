class Instractor{
    name;
    designator = 'web course student'
    team = 'team learner'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    startMeeting(time){
        console.log(`meeting will sart at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const tawshif = new Instractor('tawshif', 'chittagong');
console.log(tawshif);
tawshif.startMeeting('10:20');
tawshif.createQuiz('12');
