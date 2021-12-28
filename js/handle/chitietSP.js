let urlCTSP = window.location.href;
let info = urlCTSP.substring(urlCTSP.indexOf('?') + 1);
let loai = info.substring(0,info.indexOf('&'));

let ma = info.substring(info.indexOf('=')+1);

function loadChiTietSanPham(dsSanPham){
    let DOMChiTiet = document.getElementById('infoSanPham');
    let renderSanPham = dsSanPham.map(function(sp){
        let giaSP = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sp.gia);
        if(sp.maSP == ma)
            return`
                <div class="col-6 p-5 pt-0">
                <div id="chiTietSP" class="carousel slide" data-bs-ride="carousel">

                
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${sp.urlAnh[0]}" alt="img" class="d-block" style="width:100%">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[1]}" alt="img" class="d-block" style="width:100%">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[2]}" alt="img" class="d-block" style="width:100%">
                        </div>
                        <div class="carousel-item">
                            <img src="${sp.urlAnh[3]}" alt="img" class="d-block" style="width:100%">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#chiTietSP" data-bs-slide="prev">
                        <i class="fas fa-angle-left text-LT fs-1"></i>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#chiTietSP" data-bs-slide="next">
                        <i class="fas fa-angle-right text-LT fs-1"></i>
                    </button>
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
                            <input type="text" class="form-control text-center" value="0">
                            <button type="button" class="input-group-text btn-success">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                    </form>
                
                </div>
                <button type="button" class="btn col-4 btn-LT  mt-4">Mua ngay</button>
                <button type="button" class="btn col-3 btn-LT mt-4">Thêm vào giỏ</button>
            </div>
                `
    });
    DOMChiTiet.innerHTML = renderSanPham.join('');
    
}

let spMapCT = document.getElementById('spMapCT');
spMapCT.href = './chiTietSanPham.html?'+loai+'&maSP='+ma;

if(loai == 'laptop'){
    loadChiTietSanPham(dsLapTop);
    
}
else if(loai == 'phukien'){
    loadChiTietSanPham(dsPhuKien)
    
}

