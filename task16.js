function tinhTienTaxi(km) {
    let total = 0;

    if (km <= 0) {
        return "Số km không hợp lệ!";
    }

    if (km <= 1) {
        total = km * 10000;
    } else if (km <= 10) {
        total = 10000 + (km - 1) * 9000;
    } else {
        total = 10000 + 9 * 9000 + (km - 10) * 8000;
    }


    return `Tổng tiền taxi: ${total.toLocaleString()} VND`;
}

console.log(tinhTienTaxi(5));  
console.log(tinhTienTaxi(15)); 
console.log(tinhTienTaxi(35)); 
