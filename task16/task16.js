let km =(prompt("nhap so km"))
let Tongtien ;
function Taxi(km)
{
    if(km<=1)
    {
        Tongtien=10000;
    }
    else if (km<=10)
    {
        Tongtien=10000+(km-1)*8000
    }
    else 
    {
        Tongtien=10000+9*8000+(km-10)*6000
    }
    return Tongtien;
}
console.log( Taxi(km) );