function whatTowear(temperature){    
    if (temperature >= 20) {
        return "You have to wear T-shirt and short or may be jeans if you want.";
    }
    else if (temperature >= 10) {
        return "Don't forget to take summer jacket with you.";
    }
    else if (temperature >= 0) {
        return "You have to wear jacket.";
    }
    else if (temperature <= -1) {
        return "Its too cold outside, put your winter stuff on.";
    } else {
        return;
    }
}

console.log(whatTowear(-20));

