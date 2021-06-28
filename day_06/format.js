// 01 - Format //

const format = (blablabla) => {
    let date = new Date();
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    console.log(`${day}/0${month}/${year}`);
}

format();



