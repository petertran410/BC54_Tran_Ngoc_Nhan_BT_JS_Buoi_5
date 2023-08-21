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

  if (diemTongKet >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
    ketQua = `Thí sinh đậu với tổng điểm ${diemTongKet}`;
  } else {
    ketQua = `Thí sinh rớt với tổng điểm ${diemTongKet}`;
  }

  document.getElementById('ketQua').innerHTML = ketQua;
}