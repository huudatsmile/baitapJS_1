/**
 * Khối 1:
 *  + Nhập số tiền USD
 * Khối 2:
 *  B1: Tạo biến và nhập giá trị cho biến(tienUSD), const TI_GIA = 23500
 *  B2: Tính giaTri = tienUSD * 23500
 *  B3: Xuất giá trị chuyển đổi USD sang VND
 * Khối 3:
 *  + Chuyển đổi tiền USD sang VND
 */
const TI_GIA = 23500;
 var soTienUSDELE = document.getElementById("nhapTienUSD");
 console.log(soTienUSDELE);
 var soTienUSDVal = soTienUSDELE.value;
 console.log(soTienUSDVal);

 function doiTienUSD(){
    var tienUSD = document.getElementById("nhapTienUSD").value;
    console.log(tienUSD);
    var giaTri = TI_GIA * tienUSD;
    console.log(giaTri);
    document.getElementById("xuatTienVND").innerHTML = "Quy đổi tiền từ USD sang VND: "+ new Intl.NumberFormat('vn-VN').format(giaTri) + " VND";
 }

 document.getElementById("doiTienVND").onclick = doiTienUSD;