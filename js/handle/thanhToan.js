var numFormat = Intl.NumberFormat();
var thanhTien = 0;

function handleSoLuongGioHang(){
    let soLuongGioHang = document.getElementById('soLuongGioHang');
    if(sessionStorage.getItem('soLuongGio') == null){
        sessionStorage.setItem('soLuongGio','0');
    }
    soLuongGioHang.innerText = sessionStorage.getItem('soLuongGio');

}
handleSoLuongGioHang();

function render1SP(dsSanPham,loaiSPMua,maSPMua,soLuongMua) {
   
    for(let sp of dsSanPham){
        if(sp.maSP == maSPMua){
            
            
            let giaSP = numFormat.format(sp.gia);
            let tongTien = numFormat.format(soLuongMua * sp.gia);
            thanhTien = thanhTien + (soLuongMua * sp.gia);
            return`                                   
                <td>
                                                
                    <p  class="fw-bold ">${sp.tenSP}</p>
                    
                </td>
                <td >
                    <p>${giaSP}đ</p> 
                </td>
                <td class="text-center">${soLuongMua}</td>
                <td>
                    <p class="fw-bold">${tongTien}đ</p>
                </td>
               
            `
        }
           
    }
    return '';
}



function renderDSSanPham(){
    let dataDanhSach = sessionStorage.getItem('dsMua').trim();
    let arrayDS = dataDanhSach.split(' ');
    

    for(let i = 0;i<arrayDS.length;i++){
        if(arrayDS[i] != ''){
            let sp = arrayDS[i];
            let tbodyGioHang = document.getElementById('tbodyGioHang');
            let arraySP = sp.split(',');    // 1 sản phẩm theo dạng mảng
            let loaiSPMua = arraySP[0];
            let maSPMua = arraySP[1];
            let soLuongMua = arraySP[2];
        
            let nodeTR = document.createElement('tr')
            nodeTR.setAttribute('id','sp-'+loaiSPMua+'-'+maSPMua);

            let childTextSP;
            if(loaiSPMua == 'laptop'){      // nếu loại là laptop thì render ra laptop và ngược lại
                
                childTextSP = render1SP(dsLapTop,loaiSPMua,maSPMua,soLuongMua);
  
            }
            else if(loaiSPMua == 'phukien'){
                
                childTextSP = render1SP(dsPhuKien,loaiSPMua,maSPMua,soLuongMua);

            }

            if(childTextSP != '')
                    nodeTR.innerHTML = childTextSP;

                tbodyGioHang.appendChild(nodeTR);
        }
        
       
    }


}
renderDSSanPham();


let tongThanhTien = document.getElementById('tong-ThanhTien');
let tinhThanhTien = document.getElementById('thanhTien');

tongThanhTien.innerHTML = numFormat.format(thanhTien) +'đ';
tinhThanhTien.innerHTML = numFormat.format(thanhTien) +'đ';

let btnDatHang = document.getElementById('btnDatHang');
btnDatHang.onclick = function(){
    sessionStorage.setItem('dsMua',' ');
    sessionStorage.setItem('soLuongGio','0');

}