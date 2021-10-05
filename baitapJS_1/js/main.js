/** Phân tích bài toán tính lương nhân viên:
 * Khối 1:
 *  + Nhập tiền lương 1 ngày của nhân viên và số ngày làm việc của nhân viên đó
 * Khối 2:
 *  B1: Tạo biến và gán giá trị cho biến (luong, tienLuongMotNgay, soNgayLam)
 *  B2: Tính lương cho nhân viên:
 *       luong = tienLuongMotNgay * soNgayLam
 *  B3: Xuất ra kết quả
 * Khối 3:
 *  + Tiền lương của nhân viên
 */
var luongMotNgayELE = document.getElementById("luongMotNgay");
console.log(luongMotNgayELE);
var luongMotNgayVal = luongMotNgayELE.value;
console.log(luongMotNgayVal);

var soNgayLamELE = document.getElementById("soNgayLam");
console.log(soNgayLamELE);
var soNgayLamVal = soNgayLamELE.value;
console.log(soNgayLamVal);

function tinhLuong(){
    var number1 = document.getElementById("luongMotNgay").value;
    var number2 = document.getElementById("soNgayLam").value;
    console.log(number1,number2);
    var Multi = number1 * number2;
    console.log(Multi);
    document.getElementById("txtLuong").innerHTML = "Tiền lương của nhân viên là: "+ Multi;
}

document.getElementById("btnLuong").onclick = tinhLuong;
