let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1);



function loadSanPham(dsSanPham){
    let DOMsp = document.getElementById('sanPham');
    let renderSanPham = dsSanPham.map(function(sp){
        
        let giaSP = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sp.gia);

        return `
            <div class="col-3 pt-0 p-2 ">
                <div class="card sp" >
                    <div class="sp-img">
                        <img class="card-img-top sp-main-img" src="${sp.urlAnh[0]}" alt="Card image">
                        <img class="card-img-top sp-sub-img" src="${sp.urlAnh[0]}" alt="Card image">
                                
                    </div>
                            
                    <div class="card-body p-2">
                        <div class="sp-TenSP">
                            <a href="#" class="card-title text-center a-item " >${sp.tenSP}</a>
                        </div>
                        <h5 class="card-title text-center text-danger fw-bold mt-2 mb-2">${giaSP} đ</h5>
                                
                        <a href="#" class="d-flex justify-content-center btn btn-LT">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `
    });
    DOMsp.innerHTML = renderSanPham.join('');
}

if(key == 'laptop'){
    loadSanPham(dsLapTop);
}



