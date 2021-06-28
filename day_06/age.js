const calculateAge = (date) => {
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);

    return age.getFullYear() - 1970;
}

console.log(calculateAge(new Date(1996, 11, 4)));