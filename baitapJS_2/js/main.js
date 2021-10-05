/**
 * Phân tích bài 2: Tính giá trị trung bình
 * Khối 1:
 *  + Nhập giá trị 5 số để tính giá trị trung bình
 * Khối 2:
 *  B1: Tạo biến và gán giá trị cho biến (soThu1, soThu2, soThu3, soThu4, soThu5, trungBinh)
 *  B2: Tính giá trị trung bình 5 số:
 *      trungBinh = (Number(soThu1) + Number(soThu2) + Number(soThu3) + Number(soThu4) + Number(soThu5))/5 
 *  B3: Hiển thị kết quả 
 * Khối 3:
 *  + Giá trị trung bình của 5 số
 */ 

 var soThu1ELE = document.getElementById("soThu1");
 console.log(soThu1ELE);
 var soThu1Val = soThu1ELE.value;
 console.log(soThu1Val);
 
 var soThu2ELE = document.getElementById("soThu2");
 console.log(soThu2ELE);
 var soThu2Val = soThu2ELE.value;
 console.log(soThu2Val);

 var soThu3ELE = document.getElementById("soThu3");
console.log(soThu3ELE);
var soThu3Val = soThu3ELE.value;
console.log(soThu3Val);

var soThu4ELE = document.getElementById("soThu4");
console.log(soThu4ELE);
var soThu4Val = soThu4ELE.value;
console.log(soThu4Val);

var soThu5ELE = document.getElementById("soThu5");
console.log(soThu5ELE);
var soThu5Val = soThu5ELE.value;
console.log(soThu5Val);

function trungBinh(){
    var number1 = document.getElementById("soThu1").value;
    var number2 = document.getElementById("soThu2").value;
    var number3 = document.getElementById("soThu3").value;
    var number4 = document.getElementById("soThu4").value;
    var number5 = document.getElementById("soThu5").value;
    console.log(number1,number2,number3,number4,number5);
    var trungBinh = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5))/5 ;
    console.log(trungBinh);
    document.getElementById("txttrungBinh").innerHTML = "Giá trị trung bình là: "+ trungBinh;
}

document.getElementById("btntrungBinh").onclick = trungBinh;