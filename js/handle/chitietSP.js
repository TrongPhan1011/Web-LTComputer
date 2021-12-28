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
                            <button type="button" class="input-group-text btn-danger">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="text" class="form-control text-center p-0" value="0">
                            <button type="button" class="input-group-text btn-success">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                    </form>
                
                </div>
                <button type="button" class="btn col-4   mt-4 border-warning btn-danger">Mua ngay</button>
                <button type="button" class="btn col-4  btn-LT mt-4">Thêm vào giỏ</button>
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
}
else if(loai == 'phukien'){
    loadChiTietSanPham(dsPhuKien)
    loadThongSoKTPhuKien(dsTSKTPhuKien)
}

