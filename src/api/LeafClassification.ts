import { PlantHistoryType, PlantType } from "../types/plantType";
import httpRequests from "./httpRequest";

// export const detectPlant = async (image_url: string): Promise<any> => {
//   return httpRequests.post('https://flask-hello-world-two-ebon.vercel.app/detect', {
//     'image_url': image_url
//   })
// };

export const detectPlant = async (image_url: string) => {
  const random_id = Math.floor(Math.random() * 10);
  const random_status = Math.random() < 0.5;
  return {
    plantid: random_id,
    status: random_status,
  };
};


// export const getPlantDirectory = async (): Promise<PlantType[]> => {
//   return httpRequests.get('https://flask-hello-world-two-ebon.vercel.app/get-plant-directory')
// }




export const getPlantDirectory = async (): Promise<PlantType[]> => {
  return [
    {
      id: 0,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 1,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 2,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 3,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 4,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 5,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 6,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 7,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 8,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 9,
      common_name: 'Cà chua',
      scientific_name: 'Solanum Lycopersicum',
      another_name: ['cà dầm', 'tomate (Pháp)'],
      description: "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định, thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. Đài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
      ingredient: 'Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4)',
      uses: 'cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân', 
      medicine: [
        "Lá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm)",
        "Tác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy",
        "Quả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch",
        "Một số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính"
      ],
      effect_medicine: 'Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp...',
      medicine_preparation: 'ấy lá cà chua , ép lấy nước khoảng 150ml rồi trộn chung với 20ml nước mía.(Điều trị khô miệng, rát lưỡi). Ăn quả cà chua chín (Điều trị chảy máu chân răng)',
      note_uses: [
        "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu (cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy)",
        "Sơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ",
        "Liều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da)",
        "Làm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn",
        "Đối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua",
      ],
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
  ]

};


