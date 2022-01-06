

var numFormat = Intl.NumberFormat();

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
            
            return`                                   
                <td >
                    <div class="row">
                        <button id="xoaSP-${loaiSPMua}-${sp.maSP}" type="button" class="btn align-middle col-1 text-LT-link " >
                            <i  class="far fa-times-circle  h4 times"></i>
                        </button>
                        <div class="col-3 ">
                            <img src="${sp.urlAnh[0]}" class="bd-img" width="100%" alt="sp">
                        </div>
                        <div class="col-8 d-flex align-items-center fw-bold">
                            <p class="m-0">${sp.tenSP}</p>
                        </div>
                    </div>
                </td>
                <td id="maSP-${loaiSPMua}-${sp.maSP}" class="fw-bold">${sp.maSP}</td>
        
                <td  class="align-middle text-danger">
                    <p id="giaSP-${loaiSPMua}-${sp.maSP}" class = "m-0" >${giaSP}đ</p> 
                </td>
                <td class="align-middle">
                    <form action="#">
                        <div class="input-group">
                            <button type="button" id="btnGiam-${loaiSPMua}-${sp.maSP}" class="d-flex justify-content-center input-group-text btn-danger ">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input id="soLuong-${loaiSPMua}-${sp.maSP}" type="text"  class=" form-control text-center p-0"  value="${soLuongMua}">
                            <button type="button" id="btnTang-${loaiSPMua}-${sp.maSP}" class=" d-flex justify-content-center input-group-text btn-success">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                    </form>
                </td>
               
            `
        }

           
    }
    return '';
}

function handleClickSoLuong(loaiSPMua, maSPMua,arraySP,viTri){
    let txtItemSoLuong = document.getElementById('soLuong-'+loaiSPMua+'-'+maSPMua);
    let btnItemGiam = document.getElementById('btnGiam-'+loaiSPMua+'-'+maSPMua);
    let btnItemTang = document.getElementById('btnTang-'+loaiSPMua+'-'+maSPMua);
    
    btnItemGiam.onclick = function(){
        txtItemSoLuong.value = parseInt(txtItemSoLuong.value) - 1;
        if(txtItemSoLuong.value <=0){
            txtItemSoLuong.value = 1;
            alert('Vui lòng nhập số lượng lớn hơn 0');
        }
        arraySP[2] = txtItemSoLuong.value;
        let stringSP = arraySP.join(',');
        dsSPCapNhat[viTri] = stringSP;
        
        let stringDSCapNhat = dsSPCapNhat.join(' ');
        sessionStorage.setItem('dsMua',stringDSCapNhat);
        

    }
    btnItemTang.onclick = function(){
        txtItemSoLuong.value = parseInt(txtItemSoLuong.value) + 1;
        arraySP[2] = txtItemSoLuong.value;

        let stringSP = arraySP.join(',');
        dsSPCapNhat[viTri] = stringSP;

        let stringDSCapNhat = dsSPCapNhat.join(' ');
        sessionStorage.setItem('dsMua',stringDSCapNhat);
    }

  
}

var dsSPCapNhat =  sessionStorage.getItem('dsMua').trim().split(' ');

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

            if(loaiSPMua == 'laptop'){      // nếu loại là laptop thì render ra laptop và ngược lại
                
                let childTextSP = render1SP(dsLapTop,loaiSPMua,maSPMua,soLuongMua);
                if(childTextSP != '')
                    nodeTR.innerHTML = childTextSP;

                tbodyGioHang.appendChild(nodeTR);
                
            }
            else if(loaiSPMua == 'phukien'){
                
                let childTextSP = render1SP(dsPhuKien,loaiSPMua,maSPMua,soLuongMua);
                if(childTextSP != '')
                    nodeTR.innerHTML = childTextSP;

                tbodyGioHang.appendChild(nodeTR);
            }
            
            handleClickSoLuong(loaiSPMua,maSPMua,arraySP,i);
            handleXoaSP(loaiSPMua,maSPMua,i);

        }
        
       
    }


}
renderDSSanPham();


function handleXoaSP(loaiSPMua, maSPMua,viTri){
    let btnXoaSP = document.getElementById('xoaSP-'+loaiSPMua+'-'+maSPMua);
    let trSanPham = document.getElementById('sp-'+loaiSPMua+'-'+maSPMua);
    
    btnXoaSP.onclick = function(){
        trSanPham.remove();
        dsSPCapNhat[viTri] ='';
        let stringDSCapNhat = dsSPCapNhat.join(' ');

        sessionStorage.setItem('dsMua',stringDSCapNhat);
        let soLuongGio = parseInt(sessionStorage.getItem('soLuongGio'))-1;  // trong session
        sessionStorage.setItem('soLuongGio',soLuongGio);

        document.getElementById('soLuongGioHang').innerHTML = soLuongGio+''
    }
    
}



