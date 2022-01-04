const btnDangNhap = document.getElementById('btnDangNhap');
const pwUser = document.getElementById('matKhauUser');
const emailUser = document.getElementById('emailUser');
const spEmailDangNhap = document.getElementById('spEmailDangNhap');




if(sessionStorage.getItem('trangThai')== null)
    sessionStorage.setItem('trangThai','khong');


function kiemTraValEmail(){
   
    if(emailUser.value == ''){
        emailUser.classList.remove('is-valid');
        emailUser.classList.add('is-invalid');
        return false;
    }
    emailUser.classList.remove('is-invalid');
    emailUser.classList.add('is-valid');
    return true;
}

function kiemTraValMatKhau(){
    
    if(pwUser.value == ''){
        pwUser.classList.remove('is-valid');
        pwUser.classList.add('is-invalid');
        return false;
    }
    pwUser.classList.remove('is-invalid');
    pwUser.classList.add('is-valid');
    return true;
}
emailUser.onblur =  kiemTraValEmail;
pwUser.onblur =  kiemTraValMatKhau;

function handleDangNhap(){
    if(kiemTraValEmail() && kiemTraValMatKhau()){
        for(let i =0; i< dsTaiKhoan.length;i++){
            let pass = document.getElementById('matKhauUser').value;
            let mail = document.getElementById('emailUser').value;
        
            if(mail == dsTaiKhoan[i].email && pass == dsTaiKhoan[i].matKhau){
                sessionStorage.setItem('trangThai','dangNhap');
                location.assign('./index.html');

                return true;
            }
            

        }
        
    }
    console.log("tb");
    return false;
   

}

btnDangNhap.onclick = handleDangNhap;

