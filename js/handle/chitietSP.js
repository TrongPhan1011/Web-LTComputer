let urlCTSP = window.location.href;
let info = urlCTSP.substring(urlCTSP.indexOf('?') + 1);
let loai = info.substring(0,info.indexOf('&'));

let ma = info.substring(info.indexOf('=')+1);

let tenSanPham = '';
function loadChiTietSanPham(dsSanPham){
    let DOMChiTiet = document.getElementById('infoSanPham');
    let renderSanPham = dsSanPham.map(function(sp){
        let giaSP = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sp.gia);
        if(sp.maSP == ma){ 
            tenSanPham = sp.tenSP;
            return`
                <div class="col-6 p-5 pt-0">
                <div id="chiTietSP" class="carousel slide bd-img" data-bs-ride="carousel">

                
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                            <img src="${sp.urlAnh[0]}" alt="img" class="d-block" style="width:100%;height:350px">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[1]}" alt="img" class="d-block" style="width:100%;height:350px">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[2]}" alt="img" class="d-block" style="width:100%;height:350px">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[3]}" alt="img" class="d-block" style="width:100%;height:350px">
                        </div>
                    </div>

                    

                    <button class="carousel-control-prev" type="button" data-bs-target="#chiTietSP" data-bs-slide="prev">
                        <i class="fas fa-angle-left text-LT fs-1"></i>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#chiTietSP" data-bs-slide="next">
                        <i class="fas fa-angle-right text-LT fs-1"></i>
                    </button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <img src="${sp.urlAnh[0]}" alt="img"  style="width:24%" data-bs-target="#chiTietSP" data-bs-slide-to="0" class="active bd-img">
                    <img src="${sp.urlAnh[1]}" alt="img"  style="width:24%" data-bs-target="#chiTietSP" data-bs-slide-to="1" class ="bd-img">
                    <img src="${sp.urlAnh[2]}" alt="img"  style="width:24%" data-bs-target="#chiTietSP" data-bs-slide-to="2" class ="bd-img">
                    <img src="${sp.urlAnh[3]}" alt="img"  style="width:24%" data-bs-target="#chiTietSP" data-bs-slide-to="3" class ="bd-img">
  
                </div>
                
            </div>
            <div class="col-6">
                
                <h4>${sp.tenSP}</h4>                    
                <h3 class="text-danger fw-bold mt-3"> ${giaSP} đ</h3>
                <p class="text-justify LT-heigh-120">${sp.moTa}</p>
                <div class="col-3 ">
                    <h5>Số lượng:</h5>
                    <form action="#">
                        <div class="input-group">
                            <button id="btnGiam" type="button" class="input-group-text btn-danger">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input id= "txtSoLuong" type="text" class="form-control text-center p-0" value="0" readonly>
                            <button id="btnTang" type="button" class="input-group-text btn-success">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                    </form>
                
                </div>
                <button type="button" class="btn col-4   mt-4 border-warning btn-danger">Mua ngay</button>
                <button id="btnThemVaoGio" type="button" class="btn col-4  btn-LT mt-4">Thêm vào giỏ</button>
            </div>
                `
        }
    });
    DOMChiTiet.innerHTML = renderSanPham.join('');
    
}

function loadThongSoKTLapTop(dsSP){
    let domKT = document.getElementById('tblBody');
    let renderKT = dsSP.map(function(sp){
        if(sp.maSP == ma){
            return `
                <tr>
                    <td>Tên sản phẩm:</td>
                    <td>${tenSanPham}</td>                              
                </tr>
                <tr>
                    <td>CPU:</td>
                    <td>${sp.cpu}</td>                               
                </tr>
                <tr>
                    <td>RAM:</td>
                    <td>${sp.ram}</td>                               
                </tr>
                <tr>
                    <td>Màn hình:</td>
                    <td>${sp.manHinh}</td>                                
                </tr>
                <tr>
                    <td>Đồ hoạ:</td>
                    <td>${sp.doHoa}</td>                              
                </tr>
                <tr>
                    <td>Ổ cứng:</td>
                    <td>${sp.manHinh}</td>                               
                </tr>
                <tr>
                    <td>Hệ điều hành: </td>
                    <td>${sp.heDieuHanh}</td>                                
                </tr>
                <tr>
                    <td>Xuất xứ:</td>
                    <td>${sp.xuatXu}</td>                               
                </tr>
                <tr>
                    <td>Năm sản xuất:</td>
                    <td>${sp.namSX}</td>                                
                </tr>
                
            `
        }
    });
    domKT.innerHTML = renderKT.join('');
}

function loadSanPhamTuongTu(dsSanPham){
    let DOMsp = document.getElementById('sanPhamTuongTu');
    let dom ='';
    for(i=0;i<4;i++){
        let sp = dsSanPham[i];
        let giaSP = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sp.gia);
        dom += `
            <div class="col-3 pt-0 p-2 ">
                <div class="card sp" >
                    <div class="sp-img">
                        <img class="card-img-top sp-main-img" src="${sp.urlAnh[0]}" alt="Card image">
                        <img class="card-img-top sp-sub-img" src="${sp.urlAnh[0]}" alt="Card image">
                                
                    </div>
                            
                    <div class="card-body p-2">
                        <div class="sp-TenSP">
                            <a href="./chiTietSanPham.html?${loai}&maSP=${sp.maSP}" class="card-title text-center a-item" >${sp.tenSP}</a>
                        </div>
                        <h5 class="card-title text-center text-danger fw-bold mt-2 mb-2">${giaSP} đ</h5>
                                
                        <a href="./chiTietSanPham.html?${loai}&maSP=${sp.maSP}" class="d-flex justify-content-center btn btn-LT">Xem chi tiết</a>
                    </div>
                </div>
            </div>

        `
        
    }
    DOMsp.innerHTML = dom;

    
}

function loadThongSoKTPhuKien(dsSP){
    let domKT = document.getElementById('tblBody');
    let renderKT = dsSP.map(function(sp){
        if(sp.maSP == ma){
            return `
                <tr>
                    <td>Tên sản phẩm:</td>
                    <td>${tenSanPham}</td>                              
                </tr>
                <tr>
                    <td>Chất liệu:</td>
                    <td>${sp.chatLieu}</td>                               
                </tr>
                <tr>
                    <td>Tương thích:</td>
                    <td>${sp.tuongThich}</td>                               
                </tr>
                <tr>
                    <td>Xuất xứ:</td>
                    <td>${sp.xuatXu}</td>                               
                </tr>
                <tr>
                    <td>Năm sản xuất:</td>
                    <td>${sp.namSX}</td>                                
                </tr>
                
            `
        }
    });
    domKT.innerHTML = renderKT.join('');
}


let spMapCT = document.getElementById('spMapCT');
spMapCT.href = './chiTietSanPham.html?'+loai+'&maSP='+ma;

if(loai == 'laptop'){
    loadChiTietSanPham(dsLapTop);
    loadThongSoKTLapTop(dsTSKTLapTop);
    loadSanPhamTuongTu(dsLapTop);
}
else if(loai == 'phukien'){
    loadChiTietSanPham(dsPhuKien)
    loadThongSoKTPhuKien(dsTSKTPhuKien)
    loadSanPhamTuongTu(dsPhuKien);
}

function handleClickSoLuong(){
    let txtSoLuong = document.getElementById('txtSoLuong');
    let btnGiamSL = document.getElementById('btnGiam');
    let btnTangSL = document.getElementById('btnTang');
    
    btnGiamSL.onclick = function(){
        txtSoLuong.value = parseInt(txtSoLuong.value) - 1;
        if(txtSoLuong.value <0){
            txtSoLuong.value = 0;
            alert('Vui lòng nhập số lượng lớn hơn 0');
        }
    }
    btnTangSL.onclick = function(){
        txtSoLuong.value = parseInt(txtSoLuong.value) + 1;
     
    }
}
handleClickSoLuong();

function handleThemVaoGio(){
    // 'LapTop.1,1' == 'Loai,maSP,SoLuong'
    
    let btnThemVaoGio = document.getElementById('btnThemVaoGio');
    if(sessionStorage.getItem('dsMua') == null){
        sessionStorage.setItem('dsMua','');
    }
    btnThemVaoGio.onclick = function (){
        let soLuongMua = document.getElementById('txtSoLuong').value;
        let dsMua = sessionStorage.getItem('dsMua');
        dsMua = dsMua + `${loai},${ma},${soLuongMua};`;
        sessionStorage.setItem('dsMua',dsMua);
        
        let soLuongGioDaMua = sessionStorage.getItem('soLuongGio');
        soLuongGioDaMua = parseInt(soLuongGioDaMua) +parseInt(soLuongMua);
        sessionStorage.setItem('soLuongGio',soLuongGioDaMua);
        
        handleSoLuongGioHang();

    }

}
handleThemVaoGio();

function handleSoLuongGioHang(){
    let soLuongGioHang = document.getElementById('soLuongGioHang');
    if(sessionStorage.getItem('soLuongGio') == null){
        sessionStorage.setItem('soLuongGio','0');
    }
    soLuongGioHang.innerText = sessionStorage.getItem('soLuongGio');

}
handleSoLuongGioHang();




