export const student = (score : number) : string => {

    if(score < 0){
        return "Level shall be Invalid"
    }

    if(score < 50){
        return "Level shall be Failed"
    }
    if(score < 65){
        return "Level shall be Passed"
    }
    if(score < 75){
        return "Level shall be Good"
    }
    if(score < 85){
        return "Level shall be V.Good"
    }
    if(score < 100){
        return "Level shall be Excellent"
    }

    return "Level shall be In"
}