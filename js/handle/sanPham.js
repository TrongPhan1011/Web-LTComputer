let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1);
var dsLoaiSP = ['Tất cả']; 
let dsSanPhamTam ;
var numFormat = Intl.NumberFormat();

function handleSoLuongGioHang(){
    let soLuongGioHang = document.getElementById('soLuongGioHang');
    if(sessionStorage.getItem('soLuongGio') == null){
        sessionStorage.setItem('soLuongGio','0');
    }
    soLuongGioHang.innerText = sessionStorage.getItem('soLuongGio');

}
handleSoLuongGioHang();

function loadSanPham(dsSanPham){
    let DOMsp = document.getElementById('sanPham');
    let renderSanPham = dsSanPham.map(function(sp){
        if(sp!=null){ 
            let giaSP = numFormat.format(sp.gia);

            return `
                <div class="col-3 pt-0 p-2 ">
                    <div class="card sp" >
                        <div class="sp-img">
                            <img class="card-img-top sp-main-img" src="${sp.urlAnh[0]}" alt="Card image">
                            <img class="card-img-top sp-sub-img" src="${sp.urlAnh[0]}" alt="Card image">
                                    
                        </div>
                                
                        <div class="card-body p-2">
                            <div class="sp-TenSP">
                                <a href="./chiTietSanPham.html?${key}&maSP=${sp.maSP}" class="card-title text-center a-item" >${sp.tenSP}</a>
                            </div>
                            <h5 class="card-title text-center text-danger fw-bold mt-2 mb-2">${giaSP} đ</h5>   
                            <a href="./chiTietSanPham.html?${key}&maSP=${sp.maSP}" class="d-flex justify-content-center btn btn-LT">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            `
        }
        
    });
    DOMsp.innerHTML = renderSanPham.join('');
}

function loadDanhMuc(dsSanPham){
    let danhMuc = document.getElementById('danhMuc');
    
    let id = 0;
    let renderDanhMuc = dsSanPham.map(function (sp){
        if(!dsLoaiSP.includes(sp.loaiSP)){
            dsLoaiSP.push(sp.loaiSP);
            id++;
            return `
                <li id ="itemLoaiSP-${id}" class="list-group-item li-item">${sp.loaiSP}</li>
            `
        }
    
    });

    danhMuc.innerHTML = renderDanhMuc.join('');
    
}

function loadOptLoaiSP() {
    let optLoaiSP = document.getElementById('optLoaiSP');
    let i =-1;
    let renderOptLoaiSP = dsLoaiSP.map(function (loaiSP){
        i++;
        return `
        <option value="${i}">${loaiSP}</option>
        `;
    });
    optLoaiSP.innerHTML = renderOptLoaiSP.join('');
}


function handleDanhMuc(dsSanPham){
    for(let i = 1; i< dsLoaiSP.length;i++){
        let clickDanhMuc = document.getElementById('itemLoaiSP-'+i);
        let dsTheoDanhMuc = [];
        clickDanhMuc.onclick = function (){
            dsTheoDanhMuc =  dsSanPham.map(function (sp){
                if(sp.loaiSP == clickDanhMuc.textContent){
                    return sp;
                }
                else return null;

            })
            loadSanPham(dsTheoDanhMuc);
            
            dsSanPhamTam = dsTheoDanhMuc;
           
        }
    }
    
}


function handleSapXep(dsSanPham){
    let selectSapXep = document.getElementById('SapXep');
    let dsSapXep = [];
    let dsTemp = dsSanPham;
    selectSapXep.onchange = function (){
        let choose = selectSapXep.value;
        
        if(choose == 1){
            dsSapXep = dsTemp.sort(function(sp1,sp2){
                return sp1.gia - sp2.gia;
            });
        }
        else if(choose == 2){
            dsSapXep = dsTemp.sort(function(sp1,sp2){
                return sp2.gia - sp1.gia;
            });
        }
        if(choose == 0){
            dsSapXep = dsSanPham;  
        }
        loadSanPham(dsSapXep);
    }
}



function renderSP(){
    let spMap = document.getElementById('spMap');
    spMap.href = './sanPham.html?'+key;

    if(key == 'laptop'){
        
        loadSanPham(dsLapTop);
        spMap.innerText = 'Laptop/';
        loadDanhMuc(dsLapTop);
        loadOptLoaiSP(dsLapTop);
        handleDanhMuc(dsLapTop);
        handleSapXep(dsLapTop)
       
    }
    else if(key == 'phukien'){
        loadSanPham(dsPhuKien)
        spMap.innerText = 'Phụ kiện/'
        loadDanhMuc(dsPhuKien);
        loadOptLoaiSP(dsPhuKien);
        handleDanhMuc(dsPhuKien);
        handleSapXep(dsPhuKien);
    }   
}
renderSP();









