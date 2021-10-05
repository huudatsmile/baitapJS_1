/**
 * Khối 1:
 *  + Nhập số có 2 ký số
 * Khối 2:
 *  B1: Tạo biến và gán giá trị cho biến(soHaiChuSo)
 *  B2: Chia lấy phần nguyên để lấy số ở hàng chục, chia lấy phần dư để lấy số ở hàng đơn vị. Rồi sau đó lấy 2 số cộng lại để ra kết quả 
 *          hangDonVi = Math.floor(haiChuSo % 10)
 *          hangChuc = Math.floor(haiChuSo / 10)
 *  B3: Ra kết quả 
 * Khối 3: 
 *  + Xuất kết quả tổng 2 chữ số 
 */
var haiChuSoELE = document.getElementById("soHaiChuSo").value;
console.log(haiChuSoELE);

function tinhTong(){
    var haiChuSo = document.getElementById("soHaiChuSo").value;
    console.log(haiChuSo);
    var hangDonVi = Math.floor(haiChuSo % 10);
    console.log(hangDonVi);
    var hangChuc = Math.floor(haiChuSo / 10)
    console.log(hangChuc);
    var tongHaiChuSo = Number(hangChuc) + Number(hangDonVi);
    document.getElementById("txtTongHaiChuSo").innerHTML = "Tổng 2 ký số là: " + tongHaiChuSo;
}
document.getElementById("btnTongHaiChuSo").onclick = tinhTong;