// JavaScript File

function myfunction10() {
    let base_a;
    let base_b;
    let size_height;
    let areatrapezoid;
    base_a = document.getElementById("a").value;
    base_a = +base_a;
    base_b = document.getElementById("b").value;
    base_b = +base_b;
    size_height = document.getElementById("height").value;
    areatrapezoid = ((base_a+base_b)*size_height)/2;
    alert('The trapezoid area is:' + areatrapezoid);
    
}
document.getElementById("areatraps").addEventListener("click", myfunction10);


