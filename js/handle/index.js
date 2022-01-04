let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1);

function kiemTraDangNhap(){
    if(sessionStorage.getItem('trangThai')== null)
        sessionStorage.setItem('trangThai','khong');

    let blockDangNhap = document.getElementById('dangNhap-DangKy');
    let blockTaiKhoan = document.getElementById('block-TaiKhoan');
    if(sessionStorage.getItem('trangThai') == 'dangNhap'){
    
        blockDangNhap.classList.add('d-none');
        blockTaiKhoan.classList.add('me-4');
    }
    else if(sessionStorage.getItem('trangThai') == 'khong'){
        blockDangNhap.classList.remove('d-none');
        blockTaiKhoan.classList.remove('me-4');
    }
}
kiemTraDangNhap();

function handleSoLuongGioHang(){
    let soLuongGioHang = document.getElementById('soLuongGioHang');
    if(sessionStorage.getItem('soLuongGio') == null){
        sessionStorage.setItem('soLuongGio','0');
    }
    soLuongGioHang.innerText = sessionStorage.getItem('soLuongGio');

}
handleSoLuongGioHang();
