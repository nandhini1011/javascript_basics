function display_numbers(start_num,end_num){ 
    const num_array = []; 
    let i;
    for(i=start_num;i<=end_num;i++){
        num_array.push(i);
    }
    return num_array;
}


function odd_numbers(start_num,end_num){
    const num_array = []; 
    let i;
    for(i=start_num;i<=end_num;i++){
        if(i%2!=0){
            num_array.push(i);
        }
    }
    return num_array;
}


function even_numbers(start_num,end_num){
    const num_array = []; 
    let i;
    for(i=start_num;i<=end_num;i++){
        if(i%2==0){
            num_array.push(i);
        }
    }
    return num_array;
}

function prime_numbers(start_num,end_num){
    const num_array = []; 
    let count=0;
    let i,j ;
    for(j=start_num;j<=end_num;j++)
    {
        for( i=1;i<=j;i++){
            if(j%i==0){
                count++;
            }
        }
        if(count==2){
            num_array.push(j);
        }
        count=0;
    }
    return num_array;
}

document.getElementById("numbers").innerHTML = display_numbers(1,100);
console.log(display_numbers(1,100));
document.getElementById("odd_numbers").innerHTML = odd_numbers(1,100);
console.log(odd_numbers(1,100));
document.getElementById("even_numbers").innerHTML = even_numbers(1,100);
console.log(even_numbers(1,100));
document.getElementById("prime_numbers").innerHTML = prime_numbers(1,100);
console.log(prime_numbers(1,100));

const userStart = Number(prompt("Enter start number for the functions"));
const userEnd = Number(prompt("Enter end number for the functions"));

document.getElementById("custom_numbers").innerHTML = display_numbers(userStart,userEnd);
console.log(display_numbers(userStart,userEnd));
document.getElementById("custom_odd_numbers").innerHTML = odd_numbers(userStart,userEnd);
console.log(odd_numbers(userStart,userEnd));
document.getElementById("custom_even_numbers").innerHTML = even_numbers(userStart,userEnd);
console.log(even_numbers(userStart,userEnd));
document.getElementById("custom_prime_numbers").innerHTML = prime_numbers(userStart,userEnd);
console.log(prime_numbers(userStart,userEnd));

