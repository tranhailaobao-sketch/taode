import type { TopicNode } from './types';

export const MATH_CURRICULUM: TopicNode[] = [
  {
    id: 'K10',
    name: 'KHỐI 10',
    children: [
      {
        id: 'K10C1',
        name: 'Chương 1: Mệnh đề và tập hợp',
        children: [
          {
            id: 'K10C1B1',
            name: 'Bài 1. Mệnh đề',
            children: [
              { id: 'TO10.C01.B01.D01', name: 'Mệnh đề' },
              { id: 'TO10.C01.B01.D02', name: 'Mệnh đề phủ định' },
              { id: 'TO10.C01.B01.D03', name: 'Mệnh đề kéo theo, mệnh đề tương đương' },
              { id: 'TO10.C01.B01.D04', name: 'Kí hiệu tồn tại, với mọi' },
            ]
          },
          {
            id: 'K10C1B2',
            name: 'Bài 2. Tập hợp và các phép toán trên tập hợp',
            children: [
              { id: 'TO10.C01.B02.D01', name: 'Tập hợp và phần tử' },
              { id: 'TO10.C01.B02.D02', name: 'Các phép toán trên tập hợp' },
              { id: 'TO10.C01.B02.D03', name: 'Các tập hợp con của tập số thực' },
              { id: 'TO10.C01.B02.D04', name: 'Các phép toán trên tập hợp số thực' },
              { id: 'TO10.C01.B02.F01', name: 'Bài toán thực tế về tập hợp' },
            ]
          }
        ]
      },
      {
        id: 'K10C2',
        name: 'Chương 2: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
        children: [
            {
                id: 'K10C2B3',
                name: 'Bài 3. Bất phương trình bậc nhất 2 ẩn',
                children: [
                    { id: 'TO10.C02.B03.D01', name: 'Khái niệm bất phương trình bậc nhất hai ẩn (Nhận biết)' },
                    { id: 'TO10.C02.B03.D02', name: 'Nghiệm của bất phương trình bậc nhất 2 ẩn' },
                    { id: 'TO10.C02.B03.D03', name: 'Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn' },
                ]
            },
            {
                id: 'K10C2B4',
                name: 'Bài 4. Hệ bất phương trình bậc nhất 2 ẩn',
                children: [
                    { id: 'TO10.C02.B04.D01', name: 'Khái niệm hệ bất phương trình bậc nhất hai ẩn (Nhận biết)' },
                    { id: 'TO10.C02.B04.D02', name: 'Nghiệm của hệ bất phương trình bậc nhất 2 ẩn' },
                    { id: 'TO10.C02.B04.D03', name: 'Bài toán thực tế (Bài toán tối ưu)' },
                ]
            }
        ]
      },
      {
        id: 'K10C3',
        name: 'Chương 3: Hệ thức lượng trong tam giác',
        children: [
            {
                id: 'K10C3B5',
                name: 'Bài 5. Giá trị lượng giác của một góc từ 0 đến 180',
                children: [
                    { id: 'TO10.C03.B05.D01', name: 'Định nghĩa giá trị lượng giác' },
                    { id: 'TO10.C03.B05.D02', name: 'Giá trị lượng giác của góc (Cho 1 GTLG tính GTLG khác)' },
                    { id: 'TO10.C03.B05.D03', name: 'Quan hệ giữa các giá trị lượng giác của hai góc bù nhau, phụ nhau' },
                    { id: 'TO10.C03.B05.D04', name: 'Biết 1 giá trị lượng giác tính giá trị của biểu thức' },
                    { id: 'TO10.C03.B05.D05', name: 'Bài toán thực tế' },
                ]
            },
            {
                id: 'K10C3B6',
                name: 'Bài 6. Hệ thức lượng trong tam giác',
                children: [
                    { id: 'TO10.C03.B06.D01', name: 'Lý thuyết định lý côsin' },
                    { id: 'TO10.C03.B06.D02', name: 'Bài toán về định lý côsin' },
                    { id: 'TO10.C03.B06.D03', name: 'Lý thuyết định lý sin' },
                    { id: 'TO10.C03.B06.D04', name: 'Bài toán về định lí sin' },
                    { id: 'TO10.C03.B06.D05', name: 'Lý thuyết công thức diện tích tam giác' },
                    { id: 'TO10.C03.B06.D06', name: 'Bài toán về tính diện tích' },
                    { id: 'TO10.C03.B06.D07', name: 'Chứng minh đẳng thức lượng giác' },
                    { id: 'TO10.C03.B06.D08', name: 'Nhận dạng tam giác từ đẳng thức lượng giác' },
                    { id: 'TO10.C03.B06.D09', name: 'Bài toán thực tế' },
                ]
            }
        ]
      },
      {
        id: 'K10C4',
        name: 'Chương 4: Vectơ',
        children: [
            {
                id: 'K10C4B7',
                name: 'Bài 7. Các khái niệm mở đầu',
                children: [
                    { id: 'TO10.C04.B07.D01', name: 'Khái niệm vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B07.D02', name: 'Độ dài vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B07.D03', name: 'Hai vectơ cùng phương (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B07.D04', name: 'Hai vectơ bằng nhau (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B07.D05', name: 'Chứng minh các đẳng thức vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B07.D06', name: 'Bài toán thực tế liên quan đến tính độ dài vectơ' },
                ]
            },
            {
                id: 'K10C4B8',
                name: 'Bài 8. Tổng và hiệu của hai vectơ',
                children: [
                    { id: 'TO10.C04.B08.D01', name: 'Lý thuyết các quy tắc cộng, quy tắc trừ và tính chất (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B08.D02', name: 'Quy tắc cộng (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B08.D03', name: 'Quy tắc trừ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B08.D04', name: 'Sử dụng các quy tắc vectơ vào chứng minh đẳng thức (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B08.D05', name: 'Bài toán thực tế liên quan đến tổng hợp lực' },
                ]
            },
            {
                id: 'K10C4B9',
                name: 'Bài 9. Tích của một vectơ với một số',
                children: [
                    { id: 'TO10.C04.B09.D01', name: 'Lý thuyết tích một số với vectơ, tính chất (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B09.D02', name: 'Biểu diễn vectơ này qua một hoặc hai vectơ khác (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B09.D03', name: 'Tính độ dài vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B09.D04', name: 'Chứng minh đẳng thức vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B09.D05', name: 'Bài toán thực tế (Không sử dụng toạ độ)' },
                ]
            },
            {
                id: 'K10C4B10',
                name: 'Bài 10. Vectơ trong mặt phẳng toạ độ',
                children: [
                    { id: 'TO10.C04.B10.D01', name: 'Định nghĩa toạ độ vectơ' },
                    { id: 'TO10.C04.B10.D02', name: 'Định nghĩa toạ độ điểm' },
                    { id: 'TO10.C04.B10.D03', name: 'Độ dài vectơ' },
                    { id: 'TO10.C04.B10.D04', name: 'Biểu thức toạ độ các phép toán' },
                    { id: 'TO10.C04.B10.D05', name: 'Bài toán thực tế toạ độ điểm và toạ độ vectơ' },
                    { id: 'TO10.C04.B10.D06', name: 'Bài toán thực tế sử dụng toạ độ hoá trong hình học phẳng' },
                ]
            },
            {
                id: 'K10C4B11',
                name: 'Bài 11. Tích vô hướng của hai vectơ',
                children: [
                    { id: 'TO10.C04.B11.D01', name: 'Góc giữa hai vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B11.D02', name: 'Tích vô hướng của hai vectơ (Không sử dụng toạ độ)' },
                    { id: 'TO10.C04.B11.D03', name: 'Biểu thức toạ độ của tích vô hướng' },
                    { id: 'TO10.C04.B11.D04', name: 'Tính góc giữa hai vectơ có toạ độ' },
                    { id: 'TO10.C04.B11.D05', name: 'Bài toán thực tế về tích vô hướng của hai vectơ' },
                ]
            }
        ]
      },
      {
        id: 'K10C5',
        name: 'Chương 5: Các số đặc trưng của mẫu số liệu không ghép nhóm',
        children: [
            {
                id: 'K10C5B12',
                name: 'Bài 12. Số gần đúng và sai số',
                children: [
                    { id: 'TO10.C05.B12.D01', name: 'Số gần đúng' },
                    { id: 'TO10.C05.B12.D02', name: 'Sai số tuyệt đối' },
                    { id: 'TO10.C05.B12.D03', name: 'Sai số tương đối' },
                    { id: 'TO10.C05.B12.D04', name: 'Làm tròn số' },
                ]
            },
            {
                id: 'K10C5B13',
                name: 'Bài 13. Các số đặc trưng đo xu thế trung tâm',
                children: [
                    { id: 'TO10.C05.B13.D01', name: 'Số trung bình của mẫu số liệu không ghép nhóm' },
                    { id: 'TO10.C05.B13.D02', name: 'Số trung vị của mẫu số liệu không ghép nhóm' },
                    { id: 'TO10.C05.B13.D03', name: 'Tứ phân vị của mẫu số liệu không ghép nhóm' },
                    { id: 'TO10.C05.B13.D04', name: 'Mốt của mẫu số liệu không ghép nhóm' },
                ]
            },
            {
                id: 'K10C5B14',
                name: 'Bài 14. Các số đặc trưng đo độ phân tán',
                children: [
                    { id: 'TO10.C05.B14.D01', name: 'Khoảng biến thiên' },
                    { id: 'TO10.C05.B14.D02', name: 'Khoảng tứ phân vị' },
                    { id: 'TO10.C05.B14.D03', name: 'Phương sai – Độ lệch chuẩn' },
                ]
            }
        ]
      },
      {
        id: 'K10C6',
        name: 'Chương 6: Hàm số, đồ thị và ứng dụng',
        children: [
            {
                id: 'K10C6B15',
                name: 'Bài 15. Hàm số',
                children: [
                    { id: 'TO10.C06.B15.D01', name: 'Tìm giá trị của hàm số, biết hàm số cho bởi công thức, hoặc cho bằng bảng' },
                    { id: 'TO10.C06.B15.D02', name: 'Tập xác định của hàm số' },
                    { id: 'TO10.C06.B15.D03', name: 'Điểm thuộc đồ thị hàm số' },
                    { id: 'TO10.C06.B15.D04', name: 'Bài toán thực tế đưa về lập hàm số và tính giá trị theo yêu cầu' },
                ]
            },
            {
                id: 'K10C6B16',
                name: 'Bài 16. Hàm số bậc hai',
                children: [
                    { id: 'TO10.C06.B16.D01', name: 'Nhận biết hàm số bậc hai' },
                    { id: 'TO10.C06.B16.D02', name: 'Thiết lập bảng giá trị của hàm số bậc hai' },
                    { id: 'TO10.C06.B16.D03', name: 'Xác định trục đối xứng, toạ độ đỉnh của Parabol' },
                    { id: 'TO10.C06.B16.D04', name: 'Điểm thuộc, không thuộc đồ thị Parabol' },
                    { id: 'TO10.C06.B16.D05', name: 'Sự biến thiên của hàm số bậc hai' },
                    { id: 'TO10.C06.B16.D06', name: 'Tìm GTLN, GTNN của hàm số bậc hai' },
                    { id: 'TO10.C06.B16.F01', name: 'Xác định Parabol khi biết các yếu tố' },
                    { id: 'TO10.C06.B16.E01', name: 'Bài toán thực tế về hàm số bậc hai' },
                ]
            },
            {
                id: 'K10C6B17',
                name: 'Bài 17. Dấu của tam thức bậc hai',
                children: [
                    { id: 'TO10.C06.B17.D01', name: 'Khái niệm tam thức bậc hai' },
                    { id: 'TO10.C06.B17.D02', name: 'Tìm khoảng để tam thức bậc hai nhận giá trị dương, giá trị âm' },
                    { id: 'TO10.C06.B17.D03', name: 'Giải bất phương trình bậc hai' },
                    { id: 'TO10.C06.B17.D04', name: 'Bài toán thực tế liên quan đến dấu tam thức bậc hai' },
                ]
            },
            {
                id: 'K10C6B18',
                name: 'Bài 18. Phương trình quy về phương trình bậc hai',
                children: [
                    { id: 'TO10.C06.B18.D01', name: 'Nghiệm của phương trình quy về phương trình bậc hai' },
                    { id: 'TO10.C06.B18.D02', name: 'Giải phương trình quy về phương trình bậc hai' },
                    { id: 'TO10.C06.B18.F01', name: 'Bài toán thực tế liên quan đến phương trình quy về phương trình bậc hai' },
                ]
            }
        ]
      },
      {
        id: 'K10C7',
        name: 'Chương 7: Phương pháp tọa độ trong mặt phẳng',
        children: [
            {
                id: 'K10C7B19',
                name: 'Bài 19. Phương trình đường thẳng',
                children: [
                    { id: 'TO10.C07.B19.D01', name: 'Tìm vectơ pháp tuyến của đường thẳng' },
                    { id: 'TO10.C07.B19.D02', name: 'Tìm vectơ chỉ phương của đường thẳng' },
                    { id: 'TO10.C07.B19.D03', name: 'Điểm thuộc đường thẳng' },
                    { id: 'TO10.C07.B19.D04', name: 'PTTQ của đường thẳng' },
                    { id: 'TO10.C07.B19.D05', name: 'PTTS của đường thẳng' },
                    { id: 'TO10.C07.B19.D06', name: 'Bài toán thực tế liên quan đến phương trình đường thẳng' },
                ]
            },
            {
                id: 'K10C7B20',
                name: 'Bài 20. Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách',
                children: [
                    { id: 'TO10.C07.B20.D01', name: 'Vị trí tương đối giữa hai đường thẳng' },
                    { id: 'TO10.C07.B20.D02', name: 'Góc giữa hai đường thẳng' },
                    { id: 'TO10.C07.B20.D03', name: 'Khoảng cách' },
                    { id: 'TO10.C07.B20.D04', name: 'Bài toán thực tế góc, khoảng cách' },
                ]
            },
            {
                id: 'K10C7B21',
                name: 'Bài 21. Phương trình đường tròn trong mặt phẳng toạ độ',
                children: [
                    { id: 'TO10.C07.B21.D01', name: 'Nhận dạng phương trình đường tròn' },
                    { id: 'TO10.C07.B21.D02', name: 'Tìm tâm và bán kính đường tròn' },
                    { id: 'TO10.C07.B21.D03', name: 'Viết phương trình đường tròn' },
                    { id: 'TO10.C07.B21.D04', name: 'Phương trình tiếp tuyến của đường tròn' },
                    { id: 'TO10.C07.B21.D05', name: 'Bài toán thực tế liên quan đến phương trình đường tròn' },
                ]
            },
            {
                id: 'K10C7B22',
                name: 'Bài 22. Ba đường cô-nic',
                children: [
                    { id: 'TO10.C07.B22.D01', name: 'Xác định tiêu cự, trục lớn, trục bé của elip' },
                    { id: 'TO10.C07.B22.D02', name: 'Xác định toạ độ đỉnh, toạ độ tiêu điểm của Elip' },
                    { id: 'TO10.C07.B22.D03', name: 'Xác định a, b, c khi biết phương trình chính tắc của Elip' },
                    { id: 'TO10.C07.B22.D04', name: 'Viết phương trình đường Elip' },
                    { id: 'TO10.C07.B22.D05', name: 'Xác định a, b, c khi biết phương trình chính tắc của Hyperbol' },
                    { id: 'TO10.C07.B22.D06', name: 'Viết phương trình đường Hyperbol' },
                    { id: 'TO10.C07.B22.D07', name: 'Xác định p hoặc đường chuẩn của Parabol khi biết phương trình chính tắc của Parabol' },
                    { id: 'TO10.C07.B22.D08', name: 'Viết phương trình đường Parabol' },
                    { id: 'TO10.C07.B22.D09', name: 'Bài toán thực tế liên quan đến ba đường cô-nic' },
                ]
            }
        ]
      },
      {
        id: 'K10C8',
        name: 'Chương 8: Đại số tổ hợp',
        children: [
            {
                id: 'K10C8B23',
                name: 'Bài 23. Quy tắc đếm',
                children: [
                    { id: 'TO10.C08.B23.D01', name: 'Quy tắc cộng' },
                    { id: 'TO10.C08.B23.D02', name: 'Quy tắc nhân' },
                    { id: 'TO10.C08.B23.D03', name: 'Sử dụng kết hợp quy tắc cộng và quy tắc nhân' },
                    { id: 'TO10.C08.B23.D04', name: 'Bài toán thực tế về quy tắc đếm' },
                ]
            },
            {
                id: 'K10C8B24',
                name: 'Bài 24. Hoán vị, chỉnh hợp và tổ hợp',
                children: [
                    { id: 'TO10.C08.B24.D01', name: 'Công thức hoán vị-chỉnh hợp-tổ hợp' },
                    { id: 'TO10.C08.B24.D02', name: 'Hoán vị' },
                    { id: 'TO10.C08.B24.D03', name: 'Chỉnh hợp' },
                    { id: 'TO10.C08.B24.D04', name: 'Tổ hợp' },
                    { id: 'TO10.C08.B24.D05', name: 'Bài toán kết hợp hoán vị-chỉnh hợp-tổ hợp' },
                    { id: 'TO10.C08.B24.F01', name: 'Bài toán thực tế hoán vị, tổ hợp, chỉnh hợp' },
                ]
            },
            {
                id: 'K10C8B25',
                name: 'Bài 25. Nhị thức Newton',
                children: [
                    { id: 'TO10.C08.B25.D01', name: 'Khai triển nhị thức Newton n=4' },
                    { id: 'TO10.C08.B25.D02', name: 'Khai triển nhị thức Newton n=5' },
                    { id: 'TO10.C08.B25.D03', name: 'Tìm hệ số trong khai triển nhị thức Newton n=4 hoặc n=5' },
                ]
            }
        ]
      },
      {
        id: 'K10C9',
        name: 'Chương 9: Tính xác suất theo định nghĩa cổ điển',
        children: [
             {
                id: 'K10C9B26',
                name: 'Bài 26. Biến cố và định nghĩa cổ điển của xác suất',
                children: [
                    { id: 'TO10.C09.B26.D01', name: 'Biến cố' },
                    { id: 'TO10.C09.B26.D02', name: 'Định nghĩa cổ điển của xác suất' },
                ]
            },
            {
                id: 'K10C9B27',
                name: 'Bài 27. Thực hành tính xác suất theo định nghĩa cổ điển',
                children: [
                    { id: 'TO10.C09.B27.D01', name: 'Tính xác suất bằng tổ hợp' },
                    { id: 'TO10.C09.B27.D02', name: 'Tính xác suất bằng phương pháp sơ đồ cây' },
                ]
            }
        ]
      },
    ]
  },
  {
    id: 'K11',
    name: 'KHỐI 11',
    children: [
      {
        id: 'K11C1',
        name: 'Chương 1: Hàm số lượng giác và phương trình lượng giác',
        children: [
          {
            id: 'K11C1B1',
            name: 'Bài 1. Giá trị lượng giác của góc lượng giác',
            children: [
              { id: 'TO11.C01.B01.D01', name: 'Đổi đơn vị đo cung, góc lượng giác' },
              { id: 'TO11.C01.B01.D02', name: 'Mối liên hệ giữa l, R và cung lượng giác' },
              { id: 'TO11.C01.B01.D03', name: 'Xét dấu của giá trị lượng giác' },
              { id: 'TO11.C01.B01.D04', name: 'Tính giá trị lượng giác của các cung đặc biệt' },
              { id: 'TO11.C01.B01.D05', name: 'Biết 1 giá trị lượng giác tính giá trị còn lại' },
              { id: 'TO11.C01.B01.D06', name: 'Biết 1 giá trị lượng giác tính giá trị của biểu thức' },
              { id: 'TO11.C01.B01.D07', name: 'Công thức Chasles' },
              { id: 'TO11.C01.B01.E01', name: 'Bài toán thực tế liên quan đến giá trị lượng giác' },
            ]
          },
          {
            id: 'K11C1B2',
            name: 'Bài 2. Công thức lượng giác',
            children: [
              { id: 'TO11.C01.B02.D01', name: 'Lý thuyết công thức lượng giác' },
              { id: 'TO11.C01.B02.D02', name: 'Công thức cộng' },
              { id: 'TO11.C01.B02.D03', name: 'Công thức nhân đôi' },
            ]
          },
          {
            id: 'K11C1B3',
            name: 'Bài 3. Hàm số lượng giác',
            children: [
              { id: 'TO11.C01.B03.D01', name: 'Tính chẵn lẻ của hàm số' },
              { id: 'TO11.C01.B03.D02', name: 'Tính tuần hoàn của đồ thị hàm số' },
              { id: 'TO11.C01.B03.D03', name: 'Tìm tập xác định của hàm số' },
              { id: 'TO11.C01.B03.D04', name: 'Tìm GTLN và GTNN của hàm số lượng giác' },
              { id: 'TO11.C01.B03.E01', name: 'Các bài toán liên quan thực tế hàm số lượng giác' },
            ]
          },
          {
            id: 'K11C1B4',
            name: 'Bài 4. Phương trình lượng giác',
            children: [
              { id: 'TO11.C01.B04.D01', name: 'Công thức nghiệm phương trình lượng giác' },
              { id: 'TO11.C01.B04.D02', name: 'Phương trình lượng giác cơ bản' },
              { id: 'TO11.C01.B04.D03', name: 'Phương trình lượng giác cung là tổng biểu thức' },
            ]
          }
        ]
      },
      {
        id: 'K11C2',
        name: 'Chương 2: Dãy số. Cấp số cộng và cấp số nhân',
        children: [
          {
            id: 'K11C2B5',
            name: 'Bài 5. Dãy số',
            children: [
              { id: 'TO11.C02.B05.D01', name: 'Dãy số hữu hạn, dãy số vô hạn' },
              { id: 'TO11.C02.B05.D02', name: 'Tìm số hạng tổng quát của dãy số' },
              { id: 'TO11.C02.B05.D03', name: 'Viết 5 số hạng đầu của dãy số' },
              { id: 'TO11.C02.B05.D04', name: 'Tìm số hạng thứ n của dãy số' },
              { id: 'TO11.C02.B05.D05', name: 'Tính tăng giảm của dãy số' },
              { id: 'TO11.C02.B05.D06', name: 'Dãy số bị chặn' },
            ]
          },
          {
            id: 'K11C2B6',
            name: 'Bài 6. Cấp số cộng',
            children: [
              { id: 'TO11.C02.B06.D01', name: 'Xác định dãy số là cấp số cộng' },
              { id: 'TO11.C02.B06.D02', name: 'Tìm số hạng thứ n của cấp số cộng' },
              { id: 'TO11.C02.B06.D03', name: 'Tìm công sai d của cấp số cộng' },
              { id: 'TO11.C02.B06.D04', name: 'Tính tổng n số hạng đầu của cấp số cộng' },
              { id: 'TO11.C02.B06.D05', name: 'Tìm n của cấp số cộng biết số hạng tổng quát' },
              { id: 'TO11.C02.B06.D06', name: 'Tìm n của cấp số cộng biết tổng n số hạng đầu' },
              { id: 'TO11.C02.B06.D07', name: 'Tìm n khi biết Sn và một số yếu tố khác' },
              { id: 'TO11.C02.B06.D08', name: 'Các bài toán thực tế liên quan đến cấp số cộng' },
            ]
          },
          {
            id: 'K11C2B7',
            name: 'Bài 7. Cấp số nhân',
            children: [
              { id: 'TO11.C02.B07.D01', name: 'Xác định dãy số là cấp số nhân' },
              { id: 'TO11.C02.B07.D02', name: 'Tìm số hạng thứ n của cấp số nhân' },
              { id: 'TO11.C02.B07.D03', name: 'Tìm công bội q của cấp số nhân' },
              { id: 'TO11.C02.B07.D04', name: 'Tính tổng n số hạng đầu của cấp số nhân' },
              { id: 'TO11.C02.B07.D05', name: 'Tìm n biết số hạng tổng quát của cấp số nhân' },
              { id: 'TO11.C02.B07.D06', name: 'Tìm n biết tổng n số hạng đầu của cấp số nhân' },
              { id: 'TO11.C02.B07.E01', name: 'Bài toán thực tế liên quan đến cấp số nhân' },
            ]
          }
        ]
      },
      {
        id: 'K11C3',
        name: 'Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm',
        children: [
          {
            id: 'K11C3B8',
            name: 'Bài 8. Mẫu số liệu ghép nhóm',
            children: [
              { id: 'TO11.C03.B08.D01', name: 'Tìm tần số tích lũy của mẫu số liệu ghép nhóm' },
              { id: 'TO11.C03.B08.D02', name: 'Chuyển được mẫu số liệu không ghép nhóm về mẫu số liệu ghép nhóm' },
            ]
          },
          {
            id: 'K11C3B9',
            name: 'Bài 9. Các số đặc trưng đo xu thế trung tâm',
            children: [
              { id: 'TO11.C03.B09.D01', name: 'Tính được số trung bình cộng của mẫu số liệu ghép nhóm' },
              { id: 'TO11.C03.B09.D02', name: 'Tìm được số trung vị của mẫu số liệu ghép nhóm' },
              { id: 'TO11.C03.B09.D03', name: 'Tìm được tứ vị của mẫu số liệu ghép nhóm' },
              { id: 'TO11.C03.B09.D04', name: 'Tìm được mốt của mẫu số liệu ghép nhóm' },
            ]
          }
        ]
      },
      {
        id: 'K11C4',
        name: 'Chương 4: Quan hệ song song trong không gian',
        children: [
          {
            id: 'K11C4B10',
            name: 'Bài 10. Đường thẳng và mặt phẳng trong không gian',
            children: [
              { id: 'TO11.C04.B10.D01', name: 'Các quan hệ liên thuộc cơ bản giữa điểm, đường, mặt phẳng không có toạ độ' },
              { id: 'TO11.C04.B10.D02', name: 'Xác định giao tuyến của hai mặt phẳng' },
              { id: 'TO11.C04.B10.D03', name: 'Xác định giao điểm của đường thẳng với mặt phẳng' },
              { id: 'TO11.C04.B10.D04', name: 'Chứng minh ba điểm thẳng hàng' },
            ]
          },
          {
            id: 'K11C4B11',
            name: 'Bài 11. Hai đường thẳng song song',
            children: [
              { id: 'TO11.C04.B11.D01', name: 'Vị trí tương đối của hai đường thẳng trong không gian' },
              { id: 'TO11.C04.B11.D02', name: 'Lý thuyết về tính chất hai đường thẳng song song' },
              { id: 'TO11.C04.B11.D03', name: 'Bài toán chứng minh hai đường thẳng song song' },
              { id: 'TO11.C04.B11.D04', name: 'Bài toán xác định giao tuyến của hai mặt phẳng' },
            ]
          },
          {
            id: 'K11C4B12',
            name: 'Bài 12. Đường thẳng và mặt phẳng song song',
            children: [
              { id: 'TO11.C04.B12.D01', name: 'Vị trí tương đối giữa đường thẳng và mặt phẳng' },
              { id: 'TO11.C04.B12.D02', name: 'Điều kiện để đường thẳng song song với mặt phẳng' },
              { id: 'TO11.C04.B12.D03', name: 'Tính chất đường thẳng và mặt phẳng song song' },
              { id: 'TO11.C04.B12.D04', name: 'Xác định giao tuyến của hai mặt phẳng' },
              { id: 'TO11.C04.B12.D05', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C4B13',
            name: 'Bài 13. Hai mặt phẳng song song',
            children: [
              { id: 'TO11.C04.B13.D01', name: 'Vị trí tương đối giữa hai mặt phẳng' },
              { id: 'TO11.C04.B13.D02', name: 'Tính chất hai mặt phẳng song song' },
              { id: 'TO11.C04.B13.D03', name: 'Hình lăng trụ và hình hộp' },
              { id: 'TO11.C04.B13.D04', name: 'Bài toán chứng minh hai mặt phẳng song song' },
              { id: 'TO11.C04.B13.D05', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C4B14',
            name: 'Bài 14. Phép chiếu song song',
            children: [
              { id: 'TO11.C04.B14.D01', name: 'Khái niệm, tính chất phép chiếu song song' },
            ]
          }
        ]
      },
      {
        id: 'K11C5',
        name: 'Chương 5: Giới hạn. Hàm số liên tục',
        children: [
          {
            id: 'K11C5B15',
            name: 'Bài 15. Giới hạn của dãy số',
            children: [
              { id: 'TO11.C05.B15.D01', name: 'Giới hạn hữu hạn của dãy số dạng phân thức bậc tử bằng bậc mẫu' },
              { id: 'TO11.C05.B15.D02', name: 'Giới hạn hữu hạn của dãy số dạng phân thức chứa căn' },
              { id: 'TO11.C05.B15.D03', name: 'Giới hạn hữu hạn của dãy số bằng cách nhân lượng liên hợp' },
              { id: 'TO11.C05.B15.D04', name: 'Giới hạn vô cực của dãy số' },
              { id: 'TO11.C05.B15.D05', name: 'Tổng cấp số nhân lùi vô hạn' },
              { id: 'TO11.C05.B15.D06', name: 'Tìm giới hạn có chứa tham số' },
              { id: 'TO11.C05.B15.D07', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C5B16',
            name: 'Bài 16. Giới hạn của hàm số',
            children: [
              { id: 'TO11.C05.B16.D01', name: 'Giới hạn hữu hạn của hàm số tại một điểm bằng cách thế trực tiếp' },
              { id: 'TO11.C05.B16.D02', name: 'Giới hạn hữu hạn của hàm số dạng 0/0 (phân tích đa thức)' },
              { id: 'TO11.C05.B16.D03', name: 'Giới hạn hữu hạn của hàm số dạng 0/0 (nhân lượng liên hợp)' },
              { id: 'TO11.C05.B16.D04', name: 'Giới hạn hữu hạn của hàm số tại vô cực' },
              { id: 'TO11.C05.B16.D05', name: 'Giới hạn vô cực của hàm số' },
              { id: 'TO11.C05.B16.D06', name: 'Tìm giới hạn của hàm số có chứa tham số' },
            ]
          },
          {
            id: 'K11C5B17',
            name: 'Bài 17. Hàm số liên tục',
            children: [
              { id: 'TO11.C05.B17.D01', name: 'Hàm số liên tục tại một điểm' },
              { id: 'TO11.C05.B17.D02', name: 'Hàm số liên tục trên khoảng, đoạn' },
              { id: 'TO11.C05.B17.D03', name: 'Một số tính chất cơ bản' },
              { id: 'TO11.C05.B17.D04', name: 'Tìm tham số m để hàm số liên tục' },
            ]
          }
        ]
      },
      {
        id: 'K11C6',
        name: 'Chương 6: Hàm số mũ và hàm số lôgarit',
        children: [
          {
            id: 'K11C6B18',
            name: 'Bài 18. Luỹ thừa với số mũ thực',
            children: [
              { id: 'TO11.C06.B18.D01', name: 'Lý thuyết luỹ thừa' },
              { id: 'TO11.C06.B18.D02', name: 'Tính giá trị lũy thừa, căn bậc n' },
              { id: 'TO11.C06.B18.D03', name: 'Thực hiện phép tính lũy thừa' },
              { id: 'TO11.C06.B18.D04', name: 'Đưa biểu thức về lũy thừa hữu tỷ' },
              { id: 'TO11.C06.B18.T01', name: 'Rút gọn biểu thức' },
            ]
          },
          {
            id: 'K11C6B19',
            name: 'Bài 19. Lôgarit',
            children: [
              { id: 'TO11.C06.B19.D01', name: 'Lý thuyết lôgarit' },
              { id: 'TO11.C06.B19.D02', name: 'Tính chất của lôgarit' },
              { id: 'TO11.C06.B19.D03', name: 'Tính giá trị biểu thức lôgarit' },
              { id: 'TO11.C06.B19.D04', name: 'Rút gọn biểu thức lôgarit' },
              { id: 'TO11.C06.B19.D05', name: 'Phân tích lôgarit này theo lôgarit khác' },
              { id: 'TO11.C06.B19.E01', name: 'Biểu thị lôgarit qua hai lôgarit khác' },
              { id: 'TO11.C06.B19.T01', name: 'Bài toán thực tế liên quan đến sử dụng lôgarit' },
            ]
          },
          {
            id: 'K11C6B20',
            name: 'Bài 20. Hàm số mũ và hàm số lôgarit',
            children: [
              { id: 'TO11.C06.B20.D01', name: 'Hàm số mũ' },
              { id: 'TO11.C06.B20.D02', name: 'Hàm số lôgarit' },
              { id: 'TO11.C06.B20.D03', name: 'Tập xác định của hàm số lôgarit' },
              { id: 'TO11.C06.B20.E01', name: 'Bài toán thực tế sử dụng hàm số mũ, hàm số lôgarit, bài toán lãi kép' },
            ]
          },
          {
            id: 'K11C6B21',
            name: 'Bài 21. Phương trình, bất phương trình mũ và lôgarit',
            children: [
              { id: 'TO11.C06.B21.D01', name: 'Phương trình mũ' },
              { id: 'TO11.C06.B21.D02', name: 'Phương trình lôgarit' },
              { id: 'TO11.C06.B21.D03', name: 'Bất phương trình mũ' },
              { id: 'TO11.C06.B21.D04', name: 'Bất phương trình lôgarit' },
            ]
          }
        ]
      },
      {
        id: 'K11C7',
        name: 'Chương 7: Quan hệ vuông góc trong không gian',
        children: [
          {
            id: 'K11C7B22',
            name: 'Bài 22. Hai đường thẳng vuông góc',
            children: [
              { id: 'TO11.C07.B22.D01', name: 'Góc giữa hai đường thẳng (không có toạ độ)' },
              { id: 'TO11.C07.B22.D02', name: 'Hai đường thẳng vuông góc (không có toạ độ)' },
            ]
          },
          {
            id: 'K11C7B23',
            name: 'Bài 23. Đường thẳng vuông góc với mặt phẳng',
            children: [
              { id: 'TO11.C07.B23.D01', name: 'Khái niệm, tính chất đường thẳng vuông góc với mặt phẳng' },
              { id: 'TO11.C07.B23.D02', name: 'Chứng minh đường thẳng vuông góc với mặt phẳng' },
              { id: 'TO11.C07.B23.D03', name: 'Chứng minh hai đường thẳng vuông góc' },
              { id: 'TO11.C07.B23.D04', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C7B24',
            name: 'Bài 24. Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng',
            children: [
              { id: 'TO11.C07.B24.D01', name: 'Phép chiếu vuông góc' },
              { id: 'TO11.C07.B24.D02', name: 'Xác định góc giữa đường thẳng và mặt phẳng' },
              { id: 'TO11.C07.B24.D03', name: 'Tính góc giữa đường thẳng và mặt phẳng' },
              { id: 'TO11.C07.B24.D04', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C7B25',
            name: 'Bài 25. Hai mặt phẳng vuông góc',
            children: [
              { id: 'TO11.C07.B25.D01', name: 'Lý thuyết hai mặt phẳng vuông, góc nhị diện' },
              { id: 'TO11.C07.B25.D02', name: 'Xác định góc giữa hai mặt phẳng' },
              { id: 'TO11.C07.B25.D03', name: 'Xác định góc nhị diện và góc phẳng nhị diện' },
              { id: 'TO11.C07.B25.D04', name: 'Chứng minh hai mặt phẳng vuông góc' },
              { id: 'TO11.C07.B25.D05', name: 'Tính góc giữa hai mặt phẳng, tính góc nhị diện' },
              { id: 'TO11.C07.B25.D06', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K11C7B26',
            name: 'Bài 26. Khoảng cách',
            children: [
              { id: 'TO11.C07.B26.D01', name: 'Tính khoảng cách từ một điểm đến một đường thẳng' },
              { id: 'TO11.C07.B26.D02', name: 'Tính khoảng cách từ điểm đến mặt phẳng (có sẵn đường vuông góc)' },
              { id: 'TO11.C07.B26.D03', name: 'Tính khoảng cách từ điểm đến mặt phẳng (kẻ đường vuông góc)' },
              { id: 'TO11.C07.B26.D04', name: 'Tính khoảng cách điểm đến mặt phẳng (sử dụng tứ diện vuông)' },
              { id: 'TO11.C07.B26.D05', name: 'Tính khoảng cách giữa đường thẳng và mặt phẳng song song' },
              { id: 'TO11.C07.B26.D06', name: 'Tính khoảng cách giữa hai đường thẳng chéo nhau (dựng đường vuông góc chung)' },
              { id: 'TO11.C07.B26.D07', name: 'Tính khoảng cách giữa hai đường thẳng chéo nhau (sử dụng nhận xét)' },
            ]
          },
          {
            id: 'K11C7B27',
            name: 'Bài 27. Thể tích',
            children: [
              { id: 'TO11.C07.B27.D01', name: 'Tính thể tích khối chóp, lăng trụ biết diện tích đáy và chiều cao' },
              { id: 'TO11.C07.B27.D02', name: 'Tính thể tích khối chóp có đáy là tam giác đều, cạnh bên vuông góc với đáy' },
              { id: 'TO11.C07.B27.D03', name: 'Tính thể tích khối chóp có đáy là tam giác vuông, cạnh bên vuông góc với đáy' },
              { id: 'TO11.C07.B27.D04', name: 'Tính thể tích khối chóp có đáy là hình vuông, cạnh bên vuông góc với đáy' },
              { id: 'TO11.C07.B27.D05', name: 'Tính thể tích khối chóp có đáy là hình chữ nhật, cạnh bên vuông góc với đáy' },
              { id: 'TO11.C07.B27.D06', name: 'Tính thể tích khối chóp đều' },
              { id: 'TO11.C07.B27.D07', name: 'Tính thể tích khối lăng trụ đều' },
              { id: 'TO11.C07.B27.D08', name: 'Tính thể tích khối lăng trụ đứng' },
              { id: 'TO11.C07.B27.D09', name: 'Tính thể tích khối lăng trụ xiên' },
            ]
          }
        ]
      },
      {
        id: 'K11C8',
        name: 'Chương 8: Các quy tắc tính xác suất',
        children: [
          {
            id: 'K11C8B28',
            name: 'Bài 28. Biến cố hợp, biến cố giao, biến cố độc lập',
            children: [
              { id: 'TO11.C08.B28.D01', name: 'Biến cố hợp' },
              { id: 'TO11.C08.B28.D02', name: 'Biến cố giao' },
              { id: 'TO11.C08.B28.D03', name: 'Biến cố độc lập' },
            ]
          },
          {
            id: 'K11C8B29',
            name: 'Bài 29. Công thức cộng xác suất',
            children: [
              { id: 'TO11.C08.B29.D01', name: 'Công thức cộng xác suất hai biến cố' },
            ]
          },
          {
            id: 'K11C8B30',
            name: 'Bài 30. Công thức nhân xác suất cho hai biến cố độc lập',
            children: [
              { id: 'TO11.C08.B30.D01', name: 'Công thức nhân xác suất của hai biến cố độc lập' },
            ]
          }
        ]
      },
      {
        id: 'K11C9',
        name: 'Chương 9: Đạo hàm',
        children: [
          {
            id: 'K11C9B31',
            name: 'Bài 31. Định nghĩa và ý nghĩa của đạo hàm',
            children: [
              { id: 'TO11.C09.B31.D01', name: 'Khái niệm đạo hàm' },
              { id: 'TO11.C09.B31.D02', name: 'Tính hệ số góc tiếp tuyến của đồ thị tại 1 điểm' },
              { id: 'TO11.C09.B31.D03', name: 'Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm biết hoành độ x0' },
              { id: 'TO11.C09.B31.D04', name: 'Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm biết tung độ y0' },
              { id: 'TO11.C09.B31.D05', name: 'Viết phương trình tiếp tuyến của đồ thị hàm số biết hệ số góc' },
              { id: 'TO11.C09.B31.D06', name: 'Bài toán thực tế liên quan đến đạo hàm' },
            ]
          },
          {
            id: 'K11C9B32',
            name: 'Bài 32. Các quy tắc tính đạo hàm',
            children: [
              { id: 'TO11.C09.B32.D01', name: 'Công thức đạo hàm' },
              { id: 'TO11.C09.B32.D02', name: 'Đạo hàm của hàm số thường gặp' },
              { id: 'TO11.C09.B32.D03', name: 'Đạo hàm của hàm số hợp' },
            ]
          },
          {
            id: 'K11C9B33',
            name: 'Bài 33. Đạo hàm cấp hai',
            children: [
              { id: 'TO11.C09.B33.D01', name: 'Tính đạo hàm cấp hai của hàm số tại một điểm' },
              { id: 'TO11.C09.B33.D02', name: 'Tính đạo hàm cấp hai của các hàm số đa thức' },
              { id: 'TO11.C09.B33.D03', name: 'Tính đạo hàm cấp hai của các hàm số đơn giản' },
              { id: 'TO11.C09.B33.D04', name: 'Tìm mối liên hệ giữa y, y\' và y”' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'K12',
    name: 'KHỐI 12',
    children: [
      {
        id: 'K12C1',
        name: 'Chương 1: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số',
        children: [
          {
            id: 'K12C1B1',
            name: 'Bài 1. Tính đơn điệu và cực trị của hàm số',
            children: [
              { id: 'TO12.C01.B01.D01', name: 'Nhận biết tính đơn điệu của hàm số dựa vào dấu của đạo hàm' },
              { id: 'TO12.C01.B01.D02', name: 'Nhận biết đơn điệu của hàm số dựa vào đồ thị' },
              { id: 'TO12.C01.B01.D03', name: 'Nhận biết được tính đơn điệu của hàm số thông qua bảng biến thiên' },
              { id: 'TO12.C01.B01.D04', name: 'Xét tính đơn điệu bằng cách lập bảng biến thiên' },
              { id: 'TO12.C01.B01.D05', name: 'Nhận biết được điểm cực trị, cực trị của hàm số thông qua bảng biến thiên' },
            ]
          },
          {
            id: 'K12C1B2',
            name: 'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
            children: [
              { id: 'TO12.C01.B02.D01', name: 'Nhận biết được giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên một tập xác định cho trước' },
              { id: 'TO12.C01.B02.D02', name: 'Xác định được giá trị lớn nhất, giá trị nhỏ nhất của hàm số bằng đạo hàm' },
              { id: 'TO12.C01.B02.E01', name: 'Bài toán thực tế bằng cách sử dụng đạo hàm min max' },
            ]
          },
          {
            id: 'K12C1B3',
            name: 'Bài 3. Đường tiệm cận của đồ thị hàm số',
            children: [
              { id: 'TO12.C01.B03.D01', name: 'Nhận biết được hình ảnh hình học của đường tiệm cận' },
              { id: 'TO12.C01.B03.D02', name: 'Các bài toán thực tế liên quan đến tiệm cận' },
            ]
          },
          {
            id: 'K12C1B4',
            name: 'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
            children: [
              { id: 'TO12.C01.B04.D01', name: 'Nhận biết được tính đối xứng của đồ thị các hàm số' },
              { id: 'TO12.C01.B04.D02', name: 'Nhận dạng đồ thị của các hàm số thường gặp' },
              { id: 'TO12.C01.B04.D03', name: 'Cho biết đồ thị hoặc bảng biến thiên tìm các hệ số của hàm số bậc ba' },
              { id: 'TO12.C01.B04.D04', name: 'Cho biết đồ thị hoặc bảng biến thiên tìm các hệ số của hàm số bậc nhất trên bậc nhất' },
              { id: 'TO12.C01.B04.D05', name: 'Cho biết đồ thị hoặc bảng biến thiên tìm các hệ số của hàm số bậc hai trên bậc nhất' },
            ]
          },
          {
            id: 'K12C1B5',
            name: 'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
            children: [
              { id: 'TO12.C01.B05.D01', name: 'Bài toán thực tế tốc độ thay đổi của một đại lượng' },
              { id: 'TO12.C01.B05.D02', name: 'Bài toán thực tế liên quan đến hàm cung, hàm cầu, hàm giá' },
              { id: 'TO12.C01.B05.D03', name: 'Một số bài toán tối ưu đơn giản' },
            ]
          }
        ]
      },
      {
        id: 'K12C2',
        name: 'Chương 2: Vectơ và hệ trục tọa độ trong không gian',
        children: [
          {
            id: 'K12C2B6',
            name: 'Bài 6. Vectơ trong không gian',
            children: [
              { id: 'TO12.C02.B06.D01', name: 'Khái niệm vectơ trong không gian không có toạ độ' },
              { id: 'TO12.C02.B06.D02', name: 'Tổng của hai vectơ trong không gian không có toạ độ' },
              { id: 'TO12.C02.B06.D03', name: 'Hiệu của hai vectơ không có toạ độ' },
              { id: 'TO12.C02.B06.D04', name: 'Tích một số với một vectơ không có toạ độ' },
              { id: 'TO12.C02.B06.D05', name: 'Góc giữa hai vectơ trong không gian không có toạ độ' },
              { id: 'TO12.C02.B06.D06', name: 'Tích vô hướng của hai vectơ không có toạ độ' },
              { id: 'TO12.C02.B06.D07', name: 'Bài toán thực tế' },
            ]
          },
          {
            id: 'K12C2B7',
            name: 'Bài 7. Hệ trục toạ độ trong không gian',
            children: [
              { id: 'TO12.C02.B07.D01', name: 'Định nghĩa toạ độ vectơ' },
              { id: 'TO12.C02.B07.D02', name: 'Định nghĩa toạ độ điểm' },
              { id: 'TO12.C02.B07.D03', name: 'Hình chiếu, đối xứng của một điểm lên trục, mặt phẳng toạ độ' },
            ]
          },
          {
            id: 'K12C2B8',
            name: 'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
            children: [
              { id: 'TO12.C02.B08.D01', name: 'Độ dài vectơ có toạ độ' },
              { id: 'TO12.C02.B08.D02', name: 'Biểu thức toạ độ các phép toán' },
              { id: 'TO12.C02.B08.D03', name: 'Độ dài của vectơ' },
              { id: 'TO12.C02.B08.D04', name: 'Biểu thức toạ độ tích vô hướng của hai vectơ' },
              { id: 'TO12.C02.B08.D05', name: 'Bài toán thực tế liên quan đến tính độ dài của vectơ' },
            ]
          }
        ]
      },
      {
        id: 'K12C3',
        name: 'Chương 3: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
        children: [
          {
            id: 'K12C3B9',
            name: 'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
            children: [
              { id: 'TO12.C03.B09.D01', name: 'Khoảng biến thiên của mẫu số liệu ghép nhóm' },
              { id: 'TO12.C03.B09.D02', name: 'Khoảng tứ phân vị của mẫu số liệu ghép nhóm' },
            ]
          },
          {
            id: 'K12C3B10',
            name: 'Bài 10. Phương sai và độ lệch chuẩn',
            children: [
              { id: 'TO12.C03.B10.D01', name: 'Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm' },
            ]
          }
        ]
      },
      {
        id: 'K12C4',
        name: 'Chương 4: Nguyên hàm và tích phân',
        children: [
          {
            id: 'K12C4B11',
            name: 'Bài 11. Nguyên hàm',
            children: [
              { id: 'TO12.C04.B11.D01', name: 'Lý thuyết và tính chất nguyên hàm' },
              { id: 'TO12.C04.B11.D02', name: 'Nguyên hàm dạng x^a' },
              { id: 'TO12.C04.B11.D03', name: 'Nguyên hàm của hàm số đa thức' },
              { id: 'TO12.C04.B11.D04', name: 'Nguyên hàm của hàm số phân thức' },
              { id: 'TO12.C04.B11.D05', name: 'Nguyên hàm của hàm số lượng giác' },
              { id: 'TO12.C04.B11.D06', name: 'Nguyên hàm của hàm số mũ' },
              { id: 'TO12.C04.B11.D07', name: 'Nguyên hàm thỏa mãn F(a)=b' },
              { id: 'TO12.C04.B11.D08', name: 'Nguyên hàm thỏa mãn F(a)=b. Tính F(c)' },
              { id: 'TO12.C04.B11.D09', name: 'Biết nguyên hàm có chứa tham số, tính biểu thức liên quan đến tham số' },
              { id: 'TO12.C04.B11.D10', name: 'Ứng dụng nguyên hàm giải bài toán thực tế' },
            ]
          },
          {
            id: 'K12C4B12',
            name: 'Bài 12. Tích phân',
            children: [
              { id: 'TO12.C04.B12.D01', name: 'Lý thuyết và các tính chất của tích phân' },
              { id: 'TO12.C04.B12.D02', name: 'Tính tích phân bằng định nghĩa, tính chất' },
              { id: 'TO12.C04.B12.D03', name: 'Tính tích phân các hàm số đơn giản' },
              { id: 'TO12.C04.B12.D04', name: 'Biết tích phân chứa tham số, tính biểu thức liên quan đến tham số' },
              { id: 'TO12.C04.B12.D05', name: 'Bài toán thực tế liên quan đến tính tích phân' },
            ]
          },
          {
            id: 'K12C4B13',
            name: 'Bài 13. Ứng dụng của tích phân',
            children: [
              { id: 'TO12.C04.B13.D01', name: 'Lý thuyết ứng dụng của tích phân' },
              { id: 'TO12.C04.B13.D02', name: 'Tính diện tích hình phẳng' },
              { id: 'TO12.C04.B13.D03', name: 'Tính thể tích khối tròn xoay' },
              { id: 'TO12.C04.B13.D04', name: 'Bài toán liên quan đến hàm cầu, hàm cung' },
              { id: 'TO12.C04.B13.D05', name: 'Tính thể tích của vật thể khi biết diện tích thiết diện' },
              { id: 'TO12.C04.B13.D06', name: 'Bài toán thực tế liên quan đến tính diện tích hình phẳng hoặc tính thể tích' },
            ]
          }
        ]
      },
      {
        id: 'K12C5',
        name: 'Chương 5: Phương pháp tọa độ trong không gian',
        children: [
          {
            id: 'K12C5B14',
            name: 'Bài 14. Phương trình mặt phẳng',
            children: [
              { id: 'TO12.C05.B14.D01', name: 'Tích có hướng của hai vectơ' },
              { id: 'TO12.C05.B14.D02', name: 'Tìm vectơ pháp tuyến của mặt phẳng' },
              { id: 'TO12.C05.B14.D03', name: 'Tìm điểm thuộc mặt phẳng' },
              { id: 'TO12.C05.B14.D04', name: 'Viết phương trình tổng quát mặt phẳng biết VTPT' },
              { id: 'TO12.C05.B14.D05', name: 'Viết phương trình tổng quát mặt phẳng biết cặp VTCP' },
              { id: 'TO12.C05.B14.D06', name: 'Khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai mặt phẳng' },
              { id: 'TO12.C05.B14.D07', name: 'Bài toán thực tế liên quan đến phương trình mặt phẳng' },
            ]
          },
          {
            id: 'K12C5B15',
            name: 'Bài 15. Phương trình đường thẳng trong không gian',
            children: [
              { id: 'TO12.C05.B15.D01', name: 'Tìm VTCP của đường thẳng' },
              { id: 'TO12.C05.B15.D02', name: 'Tìm điểm thuộc đường thẳng' },
              { id: 'TO12.C05.B15.D03', name: 'Viết PTTS đường thẳng biết điểm VTCP' },
              { id: 'TO12.C05.B15.D04', name: 'Viết PTTS đi qua điểm đồng thời cắt và vuông góc với 1 đường thẳng' },
              { id: 'TO12.C05.B15.D05', name: 'Viết PTTS đi qua điểm đồng thời cắt 2 đường thẳng' },
              { id: 'TO12.C05.B15.D06', name: 'Viết phương trình đường vuông góc chung của hai đường thẳng chéo nhau' },
              { id: 'TO12.C05.B15.D07', name: 'Vị trí tương đối của hai đường thẳng' },
            ]
          },
          {
            id: 'K12C5B16',
            name: 'Bài 16. Công thức tính góc trong không gian',
            children: [
              { id: 'TO12.C05.B16.D01', name: 'Tính góc giữa hai đường thẳng' },
              { id: 'TO12.C05.B16.D02', name: 'Tính góc giữa đường thẳng và mặt phẳng' },
              { id: 'TO12.C05.B16.D03', name: 'Tính góc giữa hai mặt phẳng' },
            ]
          },
          {
            id: 'K12C5B17',
            name: 'Bài 17. Phương trình mặt cầu',
            children: [
              { id: 'TO12.C05.B17.D01', name: 'Nhận biết phương trình mặt cầu dạng khai triển' },
              { id: 'TO12.C05.B17.D02', name: 'Xác định tâm của mặt cầu' },
              { id: 'TO12.C05.B17.D03', name: 'Tìm bán kính của mặt cầu' },
              { id: 'TO12.C05.B17.D04', name: 'Viết phương trình mặt cầu' },
            ]
          }
        ]
      },
      {
        id: 'K12C6',
        name: 'Chương 6: Xác suất có điều kiện',
        children: [
          {
            id: 'K12C6B18',
            name: 'Bài 18. Xác suất có điều kiện',
            children: [
              { id: 'TO12.C06.B18.D01', name: 'Lý thuyết công thức nhân xác suất' },
              { id: 'TO12.C06.B18.D02', name: 'Xác suất có điều kiện' },
              { id: 'TO12.C06.B18.D03', name: 'Công thức nhân xác suất' },
            ]
          },
          {
            id: 'K12C6B19',
            name: 'Bài 19. Công thức xác suất toàn phần và công thức Bayes',
            children: [
              { id: 'TO12.C06.B19.D01', name: 'Công thức tính xác suất toàn phần' },
              { id: 'TO12.C06.B19.D02', name: 'Công thức Bayes' },
            ]
          }
        ]
      }
    ]
  },
];
