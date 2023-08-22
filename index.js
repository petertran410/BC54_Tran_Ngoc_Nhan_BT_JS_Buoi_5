// Chương trình kiểm tra kết quả tuyển sinh
function kiemTraTuyenSinh() {
  const diemChuan = parseFloat(document.getElementById('diemChuan').value);
  const diemMon1 = parseFloat(document.getElementById('diemMon1').value);
  const diemMon2 = parseFloat(document.getElementById('diemMon2').value);
  const diemMon3 = parseFloat(document.getElementById('diemMon3').value);
  const khuVuc = document.getElementById('khuVuc').value;
  const doiTuong = parseInt(document.getElementById('doiTuong').value);

  const diemUuTienKV = {
    'A': 2,
    'B': 1,
    'C': 0.5,
    'X': 0
  };

  const diemUuTienDT = {
    1: 2.5,
    2: 1.5,
    3: 1,
    0: 0
  };

  const diemUuTien = diemUuTienKV[khuVuc] + diemUuTienDT[doiTuong];
  const diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  let ketQua = '';

  if (diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0 && diemTongKet >= diemChuan) {
    ketQua = `Thí sinh đậu với tổng điểm ${diemTongKet}`;
  } else {
    ketQua = `Thí sinh rớt với tổng điểm ${diemTongKet}`;
  }

  document.getElementById('ketQuaTuyenSinh').innerHTML = ketQua;
}


// Chương trình tính tiền điện
function tinhTienDien() {
  const tenKhachHang = document.getElementById('tenKhachHang').value;
  const soKW = parseFloat(document.getElementById('soKW').value);

  var tienTra = 0;

  if (soKW <= 50) {
    tienTra = soKW * 500;
  } else if (soKW <= 100) {
    tienTra = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 150) {
    tienTra = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else {
    tienTra = 50 * 500 + 50 * 650 + 50 * 850 + (soKW - 150) * 1100;
  }

  const ketQua = `Tên khách hàng: ${tenKhachHang}<br>Số KW tiêu thụ: ${soKW}<br>Tiền trả: ${tienTra} đ`;

  document.getElementById('ketQuaTienDien').innerHTML = ketQua;
}


// Chương trình tính thuế thu nhập cá nhân
function tinhThue() {
  const hoTen = document.getElementById('hoTen').value;
  const tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
  const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

  let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;

  let thue = 0;
  if (thuNhapChiuThue <= 60) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
  } else {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
  }

  const ketQua = `Họ tên: ${hoTen}<br>Tổng thu nhập năm: ${tongThuNhap} triệu VND<br>Số người phụ thuộc: ${soNguoiPhuThuoc}<br>Thuế thu nhập cá nhân: ${thue.toFixed(2)} triệu VND`;

  document.getElementById('ketQuaThue').innerHTML = ketQua;
}


// Chương trình tính tiền cáp
function toggleFields() {
  const customerType = document.getElementById("customerType").value;
  const connectionsField = document.getElementById("connectionsField");

  if (customerType === "business") {
    connectionsField.style.display = "block";
  } else {
    connectionsField.style.display = "none";
  }
}

function calculateBill() {
  const customerType = document.getElementById("customerType").value;
  const connections = parseFloat(document.getElementById("connections").value);
  const premiumChannels = parseFloat(document.getElementById("premiumChannels").value);
  const customerID = document.getElementById("customerID").value;

  let baseFee = 0;
  let basicServiceFee = 0;
  let premiumChannelFee = 0;

  if (customerType === "business") {
    baseFee = 15;
    basicServiceFee = 75 + Math.max(0, connections - 10) * 5;
    premiumChannelFee = 50 * premiumChannels;
  } else {
    baseFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelFee = 7.5 * premiumChannels;
  }

  const billAmount = baseFee + basicServiceFee + premiumChannelFee;

  const resultElement = document.getElementById("billResult");
  resultElement.textContent = `Customer ID: ${customerID}\nTotal Bill: $${billAmount.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const customerType = document.getElementById("customerType").value;
  const connectionsField = document.getElementById("connectionsField");

  if (customerType === "residential") {
    connectionsField.style.display = "none";
  }
});