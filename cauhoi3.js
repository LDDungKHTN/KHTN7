/* Đợt 3: câu hỏi từ đề kiểm tra thường xuyên KHTN 7 – Tuần 5 (Đề 1 và Đề 2), bài 1–4. */
(function(){
var MC=KH7Q.MC,TF=KH7Q.TF,NUM=KH7Q.NUM,X=function(q,e){q.e=e;return q};
KH7Q.add([
/* Bài 1 */
MC(1,2,'Phương pháp','Các bước: (1) Đề xuất vấn đề; (2) Lập kế hoạch kiểm tra; (3) Thực hiện kế hoạch; (4) Viết báo cáo, thảo luận; (5) Đưa ra dự đoán khoa học. Thứ tự đúng của các bước trong phương pháp tìm hiểu tự nhiên là gì?','1, 5, 2, 3, 4','1, 2, 3, 4, 5','1, 4, 2, 3, 5','1, 2, 4, 5, 3'),
/* Bài 2 – Nguyên tử */
MC(2,1,'Nguyên tử','Những hạt nào là hạt mang điện trong nguyên tử?','Electron và proton','Electron, proton và neutron','Neutron và electron','Proton và neutron'),
MC(2,1,'Nguyên tử','Những hạt nào có bên trong hạt nhân nguyên tử?','Proton và neutron','Electron, proton và neutron','Electron và proton','Neutron và electron'),
MC(2,1,'Nguyên tử','Đơn vị khối lượng nguyên tử là gì?','amu','gram','miligram','au'),
MC(2,2,'Nguyên tử','Vì sao khối lượng của hạt nhân được xem là khối lượng của nguyên tử?','Vì khối lượng của electron quá bé','Vì khối lượng của proton quá bé','Vì khối lượng của neutron quá bé','Vì nguyên tử chỉ có hạt nhân'),
MC(2,2,'Nguyên tử','Hạt nào không có trong nguyên tử hydrogen?','Neutron','Electron và proton','Proton','Electron và neutron'),
NUM(2,2,'Nguyên tử','Nguyên tử carbon (C) có 7 hạt neutron. Khối lượng của nguyên tử đó là bao nhiêu amu?',13),
NUM(2,2,'Nguyên tử','Nguyên tử oxygen (O) có 10 hạt neutron. Khối lượng của nguyên tử đó là bao nhiêu amu?',18),
/* Bài 3 – Nguyên tố hoá học */
MC(3,2,'Nguyên tử','Giá trị của điện tích hạt nhân bằng số lượng hạt nào trong hạt nhân?','Proton','Neutron','Proton và neutron','Electron'),
MC(3,1,'Nguyên tử','Kí hiệu hóa học nào sau đây viết sai?','AR','Ag','As','Al'),
MC(3,1,'Nguyên tử','Trong các kí hiệu hóa học dưới đây, kí hiệu nào viết sai?','AG','As','Al','Ar'),
MC(3,2,'Nguyên tử','Nguyên tố nitrogen là tập hợp các nguyên tử cùng loại có cùng số … là 7. Từ nào KHÔNG đúng khi điền vào dấu …?','neutron','electron','proton','điện tích hạt nhân'),
MC(3,2,'Nguyên tử','Nguyên tố nitrogen là tập hợp các nguyên tử cùng loại có cùng … proton. Số cần điền vào dấu … là bao nhiêu?','7','4','5','6'),
NUM(3,1,'Nguyên tử','Nguyên tử nitrogen (N) có bao nhiêu proton?',7),
NUM(3,1,'Nguyên tử','Nguyên tử phosphorus (P) có bao nhiêu proton?',15),
/* Bài 4 – Bảng tuần hoàn */
NUM(4,1,'Bảng tuần hoàn','Khối lượng nguyên tử của calcium (Ca) là bao nhiêu amu?',40),
NUM(4,1,'Bảng tuần hoàn','Khối lượng nguyên tử của sulfur (S) là bao nhiêu amu?',32),
TF(4,2,'Bảng tuần hoàn','Bảng tuần hoàn các nguyên tố hóa học được sắp xếp theo chiều tăng dần của khối lượng nguyên tử.',false,'Được sắp xếp theo chiều tăng dần của điện tích hạt nhân.'),
TF(4,2,'Bảng tuần hoàn','Bảng tuần hoàn các nguyên tố hóa học được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.',true),
TF(4,2,'Bảng tuần hoàn','Các nguyên tử của những nguyên tố có cùng số lớp electron thì được xếp chung một chu kì.',true),
TF(4,2,'Bảng tuần hoàn','Các nguyên tử của những nguyên tố có cùng số electron thì được xếp chung một chu kì.',false,'Cùng chu kì là cùng số lớp electron.'),
TF(4,2,'Bảng tuần hoàn','Các nguyên tử của những nguyên tố có cùng số electron thì được xếp chung một nhóm.',false,'Cùng nhóm là cùng số electron ở lớp ngoài cùng.'),
TF(4,2,'Bảng tuần hoàn','Các nguyên tử có 1 electron ở lớp ngoài cùng thì được xếp chung nhóm IA.',true),
TF(4,3,'Bảng tuần hoàn','Những nguyên tố khí hiếm đều đứng ở cuối chu kì.',true),
TF(4,3,'Bảng tuần hoàn','Những nguyên tố khí hiếm đều đứng kề cuối chu kì.',false,'Khí hiếm đứng cuối chu kì.'),
TF(4,3,'Bảng tuần hoàn','Nguyên tố kim loại chiếm tỉ lệ cao nhất trong tất cả các nguyên tố.',true),
TF(4,3,'Bảng tuần hoàn','Kim loại thường đứng kề cuối các chu kì.',false,'Kim loại thường ở đầu và giữa chu kì.'),
TF(4,3,'Bảng tuần hoàn','Sodium (Na) được xếp vào chu kì 1 vì có 1 lớp electron.',false,'Na có 3 lớp electron nên ở chu kì 3.'),
TF(4,3,'Bảng tuần hoàn','Sodium (Na) được xếp vào nhóm IA vì có 1 lớp electron.',false,'Na ở nhóm IA vì có 1 electron ở lớp ngoài cùng.'),
TF(4,3,'Bảng tuần hoàn','Oxygen có 8 electron nên được xếp vào chu kì 1 và nhóm VIA.',false,'Oxygen (2, 6) ở chu kì 2, nhóm VIA.'),
TF(4,3,'Bảng tuần hoàn','Oxygen có 8 electron nên được xếp vào chu kì 2 và nhóm VIA.',true),
TF(4,3,'Bảng tuần hoàn','Nguyên tử có cấu hình electron 2, 8, 7 được xếp vào chu kì 2, nhóm VIIA.',false,'Có 3 lớp electron nên ở chu kì 3.'),
NUM(4,3,'Bảng tuần hoàn','Nguyên tử X có cấu hình electron 2, 8, 7. X thuộc chu kì mấy?',3),
X(MC(4,3,'Bảng tuần hoàn','Nguyên tử X có cấu hình electron 2, 8, 7. X thuộc nhóm nào?','VIIA','VIA','VIIIA','IIIA'),'Có 7 electron ở lớp ngoài cùng.'),
NUM(4,3,'Bảng tuần hoàn','Nguyên tử X có cấu hình electron 2, 8. X thuộc chu kì mấy?',2),
X(MC(4,3,'Bảng tuần hoàn','Nguyên tử X có cấu hình electron 2, 8. X thuộc nhóm nào?','VIIIA','VIIA','IIA','IVA'),'Có 8 electron ở lớp ngoài cùng (khí hiếm).'),
X(MC(4,4,'Bảng tuần hoàn','Khối lượng nguyên tử của X bằng 7/8 khối lượng nguyên tử của Y, và X nặng gấp đôi nguyên tử lithium (Li = 7). Y là nguyên tố nào?','Oxygen (O)','Nitrogen (N)','Carbon (C)','Fluorine (F)'),'X = 2·7 = 14 amu nên Y = 14·8/7 = 16 amu: oxygen.'),
X(MC(4,4,'Bảng tuần hoàn','Khối lượng nguyên tử của X bằng 3/2 khối lượng nguyên tử của Y, và X nặng gấp đôi nguyên tử carbon (C = 12). Y là nguyên tố nào?','Oxygen (O)','Sulfur (S)','Magnesium (Mg)','Nitrogen (N)'),'X = 2·12 = 24 amu nên Y = 24·2/3 = 16 amu: oxygen.'),
X(MC(4,4,'Bảng tuần hoàn','Khí gây cười gồm hai nguyên tố Y và Z có tổng khối lượng nguyên tử là 30 amu, KLNT(Y) : KLNT(Z) = 7 : 8. Y và Z là những nguyên tố nào?','Nitrogen (N) và oxygen (O)','Carbon (C) và oxygen (O)','Nitrogen (N) và fluorine (F)','Carbon (C) và nitrogen (N)'),'Y = 14 amu (N), Z = 16 amu (O).'),
X(NUM(4,4,'Bảng tuần hoàn','Khí gây cười gồm hai nguyên tố Y và Z có tổng khối lượng nguyên tử là 30 amu, KLNT(Y) : KLNT(Z) = 7 : 8. Khối lượng nguyên tử của Y là bao nhiêu amu?',14),'30 chia làm 15 phần, Y chiếm 7 phần: 14 amu.'),
X(MC(4,4,'Bảng tuần hoàn','Vôi sống gồm hai nguyên tố X và Y có tổng khối lượng nguyên tử là 56 amu, KLNT(X) : KLNT(Y) = 5 : 2. X và Y là những nguyên tố nào?','Calcium (Ca) và oxygen (O)','Magnesium (Mg) và oxygen (O)','Calcium (Ca) và carbon (C)','Sodium (Na) và oxygen (O)'),'X = 40 amu (Ca), Y = 16 amu (O).'),
X(NUM(4,4,'Bảng tuần hoàn','Vôi sống gồm hai nguyên tố X và Y có tổng khối lượng nguyên tử là 56 amu, KLNT(X) : KLNT(Y) = 5 : 2. Khối lượng nguyên tử của X là bao nhiêu amu?',40),'56 chia làm 7 phần, X chiếm 5 phần: 40 amu.')
]);
})();
