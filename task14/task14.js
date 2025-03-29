let a=(prompt("nhap a"));
let b=(prompt("nhap b"));
let c=(prompt("nhap c"));
function number()
{
    if(a>b&&a>c)
    {
        console.log("a là số lớn nhất ");
    }
    else if(b>a&&b>c)
    {
        console.log("b là số lớn nhất");
    }
    else if(c>b&&c>a)
    {
        console.log("c là số lớn nhất");
    }
}
number();