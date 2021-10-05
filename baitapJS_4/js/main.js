/**
 * Khối 1:
 *  + Nhập chiều dài và chiều rộng hình chữ nhật
 * Khối 2:
 *  B1: Tạo biến và gán giá trị cho biến(chieuDai, chieuRong, dienTich, chuVi)
 *  B2: Tính dienTich và chuVi
 *       dienTich = dienTich = chieuDai * chieuRong;
 *       chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
 *  B3: Xuất kết quả diện tích và chu vi
 * Khối 3:
 *  + Xuất kết quả diện tịch hình chữ nhật và chu vi hình chữ nhật
 */


 var chieuDaiELE = document.getElementById("chieuDai").value;
 console.log(chieuDaiELE);
 var chieuRongELE = document.getElementById("chieuRong").value;
 console.log(chieuRongELE);

 function tinhHCN(){
    var chieuDaiHCN = document.getElementById("chieuDai").value;
    var chieuRongHCN = document.getElementById("chieuRong").value;
    console.log(chieuDaiHCN,chieuRongHCN);
    var dienTich = chieuDaiHCN * chieuRongHCN;
    console.log(dienTich);
    var chuVi = (Number(chieuDaiHCN) + Number(chieuRongHCN)) * 2;
    console.log(chuVi);
    document.getElementById("dienTichChuVi").innerHTML = "Diện tích hình chữ nhật là: "+ dienTich + "; Chu vi hình chữ nhật là: "+ chuVi;

 }
 document.getElementById("tinhDTCV").onclick = tinhHCN;