import axios from "axios";
import { PlantHistoryType, PlantType } from "../types/plantType";
import httpRequests from "./httpRequest";

export const detectPlant = async (image_url: string) => {
  // const random_id = Math.floor(Math.random() * 10);
  // const random_status = Math.random() < 0.5;
  // return {
  //   plantid: random_id,
  //   status: random_status,
  // };
  const formData = new FormData();
  formData.append('image_url', image_url);
  try {
    const response = await httpRequests.post('/predict_url', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(Number(response.data.plant_id_top1));
    console.log(Number(Number(response.data.score_top1).toFixed(2)))
    console.log(Number(response.data.plant_id_top2));
    console.log(Number(Number(response.data.score_top2).toFixed(2)))
    console.log(Number(response.data.plant_id_top3));
    console.log(Number(Number(response.data.score_top3).toFixed(2)))
    console.log(Number(response.data.status));
    return {
      error: false,
      plant_id_top1: Number(response.data.plant_id_top1),
      plant_id_top2: Number(response.data.plant_id_top2),
      plant_id_top3: Number(response.data.plant_id_top3),
      score_top1: Number(response.data.score_top1).toFixed(2),
      score_top2: Number(response.data.score_top2).toFixed(2),
      score_top3: Number(response.data.score_top3).toFixed(2),
      status: Number(response.data.status),
    };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        plant_id_top1: -1,
        plant_id_top2: -1,
        score_top1: 0,
        score_top2: 0,
        status: 0,
      }
    }
};


export const getPlantDirectory = async (): Promise<PlantType[]> => {
  return httpRequests.get('/plant-data')
}




// export const getPlantDirectory = async (): Promise<PlantType[]> => {
//   return [
//     {
//       "id_leaf": 0,
//       "name": "Lá cà chua",
//       "scientific_name": "Solanum Lycopersicum",
//       "another_name": "cà dầm, tomate (Pháp)",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e"
//       ],
//       "description": "Cây thảo, sống theo mùa. Thân tròn, phân cành nhiều. Lá có cuống dài, phiến lá xẻ lông chim, số lượng thùy không ổn định,\n thường có răng cưa. Hoa họp thành những xim thưa ở nách lá, cuống phủ lông cứng. \nĐài 3-6 thùy hình mũi mác không dài hơn đài, mặt phủ lỏng. Nhị 5-6, bao phấn dính thành 1 ống bao quanh nhụy, thuôn dần ở đỉnh, mở bằng những kẽ nứt dọc ngắn. Bầu có 3 hoặc nhiều ô, mỗi ô chứa nhiều noãn. Quả mọng có 3 ô. Hạt dẹt, hình thận. Do một quá trình trồng trọt lâu đời, nên Cây cà chua có nhiều biến đổi về hình thái, số lượng các thùy của đài, tràng, bộ nhị có khi 5, 6, 7 có khi 8. Số lượng lá noãn cũng tăng lên nhiều. Mùa hoa quả: mùa đông và mùa xuân",
//       "ingredient": "Carotenoid, Vitamin C, Kali, Folate, Chất sơ, Can xi, Phốt pho, Ma giê, Ka li, Lưu huỳnh… và các vitamin như A, B1, B3, B6, C (4).",
//       "uses": "cải thiện thị lực. Phòng chống ung thư. Làm sáng da. Giảm lượng đường trong máu. Thúc đẩy giấc ngủ ngon. Giữ xương chắc khoẻ. Chữa các bệnh mãn tính. Tốt cho mái tóc của bạn. Giúp giảm cân.",
//       "medicine": "•\tLá cà chua có tác dụng: làm giảm kích ứng da do bị sâu bọ đốt bằng cách rửa sạch vò nát , rồi xát lên da. Ngoài ra trong y học , lá cà chua(đã phơi khô) có được dùng làm nguyên liệu chiết xuất tomatine(chất kháng khuẩn và chống nấm) . \n•\tTác dụng ngọn cà chua: làm giảm mụn nhọt và viêm tấy .\n•\tQuả cà chua có tác dụng: Bổ máu, hạ sốt, nhuận tràng và giảm táo bón, sinh tân dịch cho cơ thể, giúp điều hoà quá trình bài tiết, tốt cho mọi người bị sỏi niệu đạo, tốt cho người kém ăn, suy nhược và bị nhiễm độc mãn tính, tốt cho người bị xơ cứng động mạch. \n•\tMột số bài thuốc dùng quả và vỏ quả cà chua: Điều trị khô miệng, rát lưỡi, điều trị bỏng, điều trị sốt cao kèm theo khát nước, điều trị viêm gan mạn tính\n",
//       "effect_medicine": "Gây trào ngược dạ dày, ợ chua. Chứng đau nữa đầu. Dị ứng nhiễm trùng. Gây sỏi thận. Gây hội chứng ruột kích thích. Gây đau khớp. Gây tiêu chảy,gây các vấn đề hô hấp....",
//       "note_use": "Lựa chọn: Ngoài vấn đề cà chua ngâm tẩm hóa chất bảo quản, khi mua cà chua bạn cũng nên chọn nhà cung cấp uy tín để tránh mua nhầm hàng vượt quá dư lượng thuốc trừ sâu \n(cây cà chua rất dễ bị sâu phá hoại nên người trồng thường phải phun thuốc rất nhiều – tương tự như đậu bắp và đậu đũa vậy).\n•\tSơ chế: Chỉ nên ăn những quả cà chua đã chín đỏ hoàn toàn và rửa thật sạch với nước hoặc nước muối, nước vo gạo. Bên cạnh đó, không nên ăn cà chua lúc đói và không ăn cà chua đã nấu chín quá kỹ.\n•\tLiều lượng: Mỗi ngày, mỗi người bình thường chỉ nên ăn khoảng 1 quả cà chua và không nên ăn cà chua liên tục trong nhiều ngày (vì sẽ dẫn đến vàng da).\n•\tLàm đẹp: Thịt quả cà chua có thể dùng làm mặt nạ dưỡng da, tuy nhiên, những người có da nhạy cảm cần cẩn trọng vì cà chua có thể làm tình trạng da xấu hơn.\n•\tĐối tượng: Những người bị các bệnh về đường tiêu hóa cần cân nhắc khi dùng cà chua.\n"
//     },
//     {
//       "id_leaf": 1,
//       "name": "Lá diếp cá",
//       "scientific_name": "Houttuynia cordata",
//       "another_name": "giấp cá, lá giấp, dấp cá,.. Trong Đông y còn được gọi là: cửu tiết liên, sầm thảo, xú tinh thảo, tử sâm, lá giáp…",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca.jpg?alt=media&token=c6852208-94d6-452c-875a-54cf84539b7b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca1.jpg?alt=media&token=f2dae96d-769e-43e9-92ec-3f3830f4edb5",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca2.jpg?alt=media&token=8aa16a24-0de4-4d91-b570-45a260106913",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca3.jpg?alt=media&token=f1942729-6bfb-4b03-91f4-cf7766d70837"
//       ],
//       "description": "Rau diếp cá là loại cây thân thảo, mọc quanh năm và ưa chỗ ẩm ướt, có thân và rễ mọc ngầm dưới đất. Chiều cao trên mặt đất khoảng 20-40 cm. Lá diếp cá hình tim, móc so le, màu xanh sẫm, khi vò nát có mùi hơi tanh.",
//       "ingredient": ": Khoáng chất: canxi, kali, magie và axit lauric.\n•\tChất chống oxy hóa: rutin, quercetin và hyperin.\n•\tAlkaloid và flavonoid có tác dụng chữa bệnh và hỗ trợ quá trình trao đổi chất trong cơ thể.\n•\tChất xơ và vitamin C.\n",
//       "uses": "Trị mụn, mụn nhọt, giúp hạ sốt cho trẻ, chữa chứng mắt đỏ do trực khuẩn mủ xanh, chữa sưng vú do tắc sữa, bài thuốc chữa táo bón, trị sỏi thân, điều trị bệnh trĩ, chữa kinh nguyệt không đều, trị bệnh viêm phổi , trị ho, viêm ruột, trị quai bị,  hỗ trợ điều trị bệnh đái tháo đường, giúp kiểm soát cân nặng, giúp lợi tiểu,\n giải độc tốt cho cơ thể, chữa bệnh nhiễm trùng, tăng cường hệ miễn dịch. Thanh nhiệt giải độc",
//       "medicine": "Hỗ trợ giảm sốt cho trẻ em. Chữa ho. Hỗ trợ điều trị Herpes. Hỗ trợ điều trị bệnh trĩ. Hỗ trợ điều trị sỏi thận. Hỗ trợ phòng ngừa ung thư. Giảm dị ứng và phát ban. Tăng cường hệ miễn dịch . Hỗ trợ cải thiện các bệnh hô hấp. Giúp lợi tiểu. hỗ trợ điều trị bệnh tiểu đường.\n",
//       "effect_medicine": "Gây ảnh hưởng xấu đến chức năng thận: Việc tiêu thụ lượng lớn rau diếp cá khiến thận phải hoạt động quá mức.\n•\tTiêu chảy, lạnh bụng: Đặc biệt thường xảy ra đối với những người có cơ địa hàn hoặc chân tay thường xuyên bị lạnh.\n•\tNguy cơ ngộ độc: Môi trường trồng cây diếp cá rất dễ có nhiều vi khuẩn và giun sán phát triển, do đó nếu ăn rau diếp cá sống, chưa được rửa kỹ càng sẽ có nguy cơ bị nhiễm khuẩn, đau bụng và đi ngoài.\n",
//       "note_use": "Trước khi sử dụng rau diếp cá, cần rửa sạch và ngâm trong nước muối loãng để khử trùng và loại bỏ vi khuẩn, giun sán.\n•\tKhông nên ăn hoặc uống quá nhiều rau diếp cá trong một ngày.\n•\tHạn chế uống nước rau diếp cá khi đói vì thành phần có chứa nhiều vitamin C có thể gây hại cho dạ dày.\n•\tNhững người có bệnh về bụng yếu, thể trạng hàn hoặc hay bị lạnh chân tay nên tránh uống nước rau diếp cá sau 10 giờ tối.\n\n"
//     },
//     {
//       "id_leaf": 2,
//       "name": "Lá đinh lăng",
//       "scientific_name": "Panax fruticosum L, Tieghemopanax frutiscosus Vig, Polyscias fruticosa Harms ",
//       "another_name": "Nam dương sâm, cây gỏi cá",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang.jpg?alt=media&token=dbb2b68f-a5d7-490b-8110-180d2c9522c5",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang1.jpg?alt=media&token=288aa744-e45d-40dd-b2c8-af649995f184",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang2.jpg?alt=media&token=55dbd555-a25d-497b-88b8-f2d11ed85e11",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang3.jpg?alt=media&token=f01f4157-d103-44a9-9eef-d861e9256b32"
//       ],
//       "description": "Đinh lăng là một loại cây nhỏ có chiều cao trung bình từ 0.8 đến 1.5m. Thuộc giống cây lá kép, mọc so le, lá có 3 lần xẻ lông chim còn phía mép có răng cưa.\nĐinh lăng là một loại cây nhỏ có chiều cao trung bình từ 0.8 đến 1.5m. Thuộc giống cây lá kép, mọc so le, lá có 3 lần xẻ lông chim còn phía mép có răng cưa.",
//       "ingredient": "vitamin nhóm B, nhất là vitamin B1,13 loại acid amin(methionin, lyzin, cystein. ) trong lá đinh lăng có vai trò quan trọng cho sức khỏe tổng thể.\nGlucozit trong loại lá cây giúp hỗ trợ tăng cường khả năng co bóp của tim và giảm thiểu đáng kể lượng Natri trong tim. Còn Alcaloid trong lá đinh lăng có tác dụng tốt trong việc gây tê và giảm đau. \nHoạt chất Flavonoid trong lá đinh lăng là hoạt chất giúp ức chế chống lại các vi khuẩn gây bệnh.",
//       "uses": "Tăng cường thể lực và giảm stress với khả năng kích thích hoạt động của não bộ, chống mệt mỏi và giảm âu lo, tăng cường miễn dịch. \nGiảm đau nhức xương khớp. \nKháng viêm, giảm sưng. \nHỗ trợ cải thiện hoạt động tiểu tiện. \nBảo vệ gan.\nKháng histamin và điều trị hen suyễn với dịch chiết cồn từ cây đinh lăng. \nTăng cường trí nhớ và tăng tuổi thọ",
//       "medicine": "Lá chữa cảm sốt, sưng tấy và mụn nhọt. \nRễ dùng làm thuốc bổ, lợi tiểu. \nThân và cành cây đinh lăng chữa tê thấp, đau nhức lưng. \nChữa mất ngủ. Chữa tắc tia sữa sau sinh. Bồi bổ cho phụ nữ sau sinh. Chữa và phòng ngừa dị ứng. Chữa đau lưng.\n Hỗ trợ điều trị các bệnh lý ở thận. Chữa các bệnh đường tiêu hoá.",
//       "effect_medicine": "Uống khi đói có thể khiến bạn khó chịu ở đường tiêu hóa vì hàm lượng chất tanin cao trong rễ cây đinh lăng.\nUống quá nhiều cao đinh lăng khiến cơ thể mệt mỏi, buồn nôn, nôn mửa, tiêu chảy,…\nSaponin trong đinh lăng có thể gây tán huyết (vỡ hồng cầu) nên cần uống đúng liều lượng và tránh sử dụng trong thời gian dài. Nếu sử dụng quá liều lâu dài, độc tính có thể dẫn đến xung huyết ở gan, tim, phổi, dạ dày, ruột, biến loạn dinh dưỡng.\nKhông dùng cho phụ nữ có thai, phụ nữ cho con bú, người bị rối loạn đông máu, đang xuất huyết hoặc rong kinh.\nMệt mỏi, buồn nôn, nôn, tiêu chảy,... là những biểu hiện khi uống quá nhiều cao đinh lăng.",
//       "note_use": "Cây đinh lăng tuy có tác dụng tốt nhưng chỉ nên dùng với một lượng vừa đủ. Vì nếu dung nạp quá nhiều saponin sẽ làm cho cơ thể mệt mỏi, chóng mặt, hoa mắt và tiêu chảy.\nChỉ nên dùng khoảng từ 10 đến 20g cây đinh lăng đã phơi khô/ ngày.\nChú ý nên dùng cây đinh lăng từ 3 tuổi trở lên để đảm bảo dược tính.\nNgoài việc áp dụng bài thuốc từ dược liệu, bạn có thể hỗ trợ điều trị và nâng cao sức khỏe với các món ăn từ lá đinh lăng.,"
//     },
//     {
//       "id_leaf": 3,
//       "name": "Lá me",
//       "scientific_name": "Tamarindus indica L",
//       "another_name": "Me chua",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fme.jpg?alt=media&token=c258c812-b58a-4e9d-9d5e-ba2c417c7e2b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fme1.jpg?alt=media&token=6afdc529-5189-4fb3-8d91-2af611be36d1",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fme2.jpg?alt=media&token=d34a09e1-596d-43a6-9546-d282deb9dc3d",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fme3.jpg?alt=media&token=ab4c7ce1-7be8-4feb-a586-df7f9c620549"
//       ],
//       "description": "Cây me (Tamarindus indica) là loài duy nhất trong chi Me chua (Tamarindus ) thuộc họ Đậu (Fabaceae).\nThân: Là loại cây thân gỗ, có thể cao tới 20 mét và là cây thường xanh trong những khu vực không có mùa khô. Gỗ của thân cây me bao gồm lớp gỗ lõi cứng, màu đỏ sẫm và lớp dác gỗ mềm có màu ánh vàng.\nLá: Có dạng lá kép lông chim, bao gồm từ 10 đến 40 lá kép nhỏ.\nHoa: Tạo thành dạng cành hoa (cụm hoa với trục kéo dài và nhiều cuống nhỏ chứa một hoa, giống như ở cây xanh).\nQuả:Là loại quả đậu màu nâu, bên trong chứa cùi thịt và nhiều hạt có vỏ cứng.\nHạt: Màu nâu đậm, có thể có đường rạch đôi để tăng cường khả năng nảy mầm.",
//       "ingredient": "Calories, Protein, Chất béo, Chất xơ",
//       "uses": "Quả me có vị chua, tính mát, thanh nhiệt, giải khát, tăng cường tiêu hóa",
//       "medicine": "Chữa ho, làm ấm bụng, kích thích tiêu hóa\nTrị chứng hay chảy máu chân răng\nGiúp giảm đau nhức xương khớp\nChữa sốt do nắng nóng",
//       "effect_medicine": "Quả me có khả năng làm giảm huyết áp\nQuả me có thể có đặc tính làm loãng máu và nó cũng có thể tương tác với các loại thuốc như aspirin",
//       "note_use": "Trái me mặc dù có nhiều tác động tích cực đến sức khỏe nhưng không vì vậy mà bạn ăn quá nhiều. Với một vài đối tượng cụ thể, việc sử dụng trái me cần phải cẩn trọng. Cụ thể như:\nNgười huyết áp thấp không nên ăn nhiều: Ăn me được chứng minh là có khả năng làm giảm chỉ số huyết áp. Vì thế nếu đang bị huyết áp thấp thì bạn không nên ăn quá nhiều me. Bạn cần tham khảo qua ý kiến bác sĩ về việc bổ sung thực phẩm như me.\nCó khả năng tương tác với thuốc: Một số thành phần dưỡng chất trong me dễ tương tác với thuốc, ví dụ như thuốc Aspirin. Vì thế nếu đang dùng thuốc Aspirin thì bạn không nên ăn me.\nTạm dừng ăn me trước hai tuần phẫu thuật: Nhằm hạn chế hiện tượng máu khó đông."
//     },
//     {
//       "id_leaf": 4,
//       "name": "Lá ổi",
//       "scientific_name": "Psidium guajava L",
//       "another_name": "Phan thách lựu, Lá ủi, Mù úi piếu, Mác ổi…",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi.jpg?alt=media&token=807c198e-a0f4-4102-99b5-a0d403b13261",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi1.jpg?alt=media&token=400a8761-84da-4cb9-9305-a79b5c499c7c",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi2.jpg?alt=media&token=82818518-7b0e-48d9-8132-c728f9b283bc",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi3.jpg?alt=media&token=3790ecd1-3890-4ccd-90ac-7d3dee77a251"
//       ],
//       "description": "Ổi là một loại cây nhỡ có chiều cao khoảng từ 3 đến 5m, cành nhỏ thường vuông cạnh. Lá có hình bầu dục, mọc đối nhau với phần cuống ngắn. Mặt trên nhẵn hoặc hơi có lông còn mặt dưới có lông mịn. Phiến lá nguyên, khi soi lên sẽ thấy có túi tinh dầu trong.\nHoa ổi mọc đơn ở các kẽ lá, có màu trắng. Quả mọng ở đầu quả có sẹo của đài, hình dáng quả thay đổi tùy theo loài. Mỗi quả có chứa rất nhiều hạt, màu hơi hung, hình thân, không đều",
//       "ingredient": "polyphenol, tannin, flavonoid, carotenoid, berbargia, giàu vitamin C và pectin",
//       "uses": "Kiểm soát bệnh tiểu đường. Ổn định lượng đường trong máu. Giảm cholesterol. Hỗ trợ bị tiêu chảy. Ngăn ngừa rụng tóc.\n Ngăn ngừa nguy cơ ung thư. Cải thiện sức khoẻ răng miệng. \n Chữa cảm lạnh và ho. \n Cải thiện chất lượng giấc ngủ. \n Điều trị dị ứng. Hỗ trợ kiểm soát đường huyết. \n Tốt cho sức khoẻ tim mạch. \n Lá ổi giúp ngăn ngừa mụn trứng cá, làm mờ đi nếp nhăn, làm sáng vết thâm đen. Vitamin nhóm B kết hợp với các hoạt chất polyphenol, tannin trong lá ổi ngoài tác dụng giảm cân còn có khả năng chống oxy hoá, kháng viêm hiệu quả. Hơn nữa lá ổi còn giúp cho tóc thêm chắc khoẻ, giảm đi sự hư tổn tóc, kích thích phát triển các tế bào tóc. Lá ổi trị hôi miệng.",
//       "medicine": "Bài thuốc chữa bệnh viêm dạ dày, ruột cả cấp và mãn tính. Bài thuốc chữa cửu lỵ. Bài thuốc chữa chứng tiêu hoá không tốt cho trẻ em. Bài thuốc chữa tiêu chảy. Bài thuốc trị thổ tả. Bài thuốc chữa băng huyết. Bài thuốc chữa tiểu đường. Bài thuốc chữa đau răng. Bài thuốc chữa sa trực tràng. Bài thuốc giải đọc ba đậu.",
//       "effect_medicine": "gây kích ứng da. Đang điều trị bằng thuốc tây: Sử dụng lá ổi trong thời gian điều trị bằng thuốc tây có thể làm giảm hiệu quả của thuốc. ",
//       "note_use": "Chỉ sử dụng lá ổi với tần suất vừa phải. Việc quá lạm dụng lá ổi có thể gây ra các tác dụng phụ hoặc gây ra tình trạng dị ứng.\n•\tNgười bị bệnh chàm cần đặc biệt lưu ý khi sử dụng lá ổi bởi các chiết xuất có trong lá ổi có thể gây kích ứng da.\n•\tNên tham khảo ý kiến của bác sĩ trước khi sử dụng lá ổi nếu bạn đang mắc phải các bệnh mãn tính tim mạch, loãng xương, các bệnh lý liên quan đến thận,...\n•\tDùng lá ổi trong thời gian điều trị bằng thuốc tây có thể làm giảm các tác dụng của thuốc\n"
//     },
//     {
//       "id_leaf": 5,
//       "name": "Lá bàng",
//       "scientific_name": "Tẻminalia captappa ",
//       "another_name": "Quang Lang. Indian almond -trê, tropical almond(Anh), badamier(Pháp)",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang.jpg?alt=media&token=548cb6f8-a020-42e0-881a-6ba6f1192568",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang1.jpg?alt=media&token=11c97267-6669-4595-a1a9-febb551eee85",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang2.jpg?alt=media&token=f5fdb215-52f8-4ba6-a350-8806cea6e98f",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang3.jpg?alt=media&token=285bef31-10c8-4dec-a207-0ac132a9c978"
//       ],
//       "description": "Cây bàng là loại cây to, cao 8 - 10m, có khi hơn. Thân phân cành nằm ngang gần như mọc vòng làm thành nhiều tầng. Lá to, mọc so le, cuống lá ngắn, \nhình trứng ngược, gốc thuôn, đầu tròn hơi có mũi nhọn, dài 20 - 30cm, rộng 10 - 13cm, mặt trên nhẵn bóng, mặt dưới nhạt, hơi có lông màu hung nhạt, gân phụ chằng chịt men theo phiến đến tận đầu lá, cuống lá có lông màu hung.\nCụm hoa mọc thành chùm ở kẽ lá gắn gọn, dài 15 - 20cm. Hoa nhỏ nhiều, màu trắng lục, đài hoa có 5 răng, rụng sớm, gốc có 5 tuyến màu nâu, không có tràng. Nhị 10, cao hơn đài, bầu một ô, chứa hai noãn.\nQuả hạch, hình trứng dẹp, đầu múp nhọn, hai mép mỏng, khi chín màu vàng.\nMùa hoa: Tháng 4 - 5. Mùa quả: Tháng 6 - 7\n",
//       "ingredient": "polyphenol, tannin, flavonoid, carotenoid, berbargia, giàu vitamin C và pectin",
//       "uses": "Các chất kháng khuẩn sát khuẩn tự nhiên là những thành phần chính có trong lá bàng.  Những chất này có tác dụng cực kỳ mạnh mẽ. Vì vậy chúng có hiệu quả nhất định trong việc chữa trị trị các bệnh như cảm sốt, nhiệt miệng, đau họng, chữa trị mụn mủ,… Ngoài ra phải kể đến tác dụng thần kỳ  với các bệnh trĩ, đau dạ dày,….",
//       "medicine": "Chữa cảm sốt, làm ra mồ hôi.  Chữa ghẻ. Chữa đau nhức , tê thấp. Chữa sâu răng, viêm quanh răng. Chữa viêm họng. Có thể chữa viêm loét. Trị được bệnh phụ khoa. Chữa mụn nhọt và các vết sưng mủ. Chữa khỏi nhiệt miệng. Chữa bệnh trĩ. Trị chàm ở trẻ nhỏ. Tác dụng chữa sâu rang, viêm nướu. Giúp trị vết thương ngứa và lên da non. Trị bệnh đau dạ dày.",
//       "effect_medicine": "gây kích ứng da. Tác động đến huyết áp. Tương tác thuốc , đặc biệt thuốc chống đông, thuốc giảm đau. ",
//       "note_use": ": Nên lựa chọn lá bàng non, bánh tẻ, tránh sử dụng những lá quá già sẽ không đảm bảo được dược tính trong điều trị bệnh.\n•\tKhông sử dụng những lá sâu, bệnh, để tránh gây kích ứng thêm cho da.\nTrong quá trình điều trị, nếu xuất hiện dấu hiệu dị ứng, phản ứng bất thường thì nên dừng sử dụng lá bàng.\n•\tHạn chế sử dụng các loại thực phẩm dễ gây dị ứng dị, chất kích thích như: rượu, bia, hải sản, măng, cà… khi dùng lá bàng.\n•\tKhi điều trị viêm da, các bệnh về da, bạn nên mặc quần áo rộng rãi , thoáng mát, tránh cọ xát vào vùng da bị bệnh. Tuyệt đối không cào gãi lên vùng da đang điều trị.\n\n"
//     },
//     {
//       "id_leaf": 6,
//       "name": "Lá chanh",
//       "scientific_name": "Cirus limon",
//       "another_name": " Lá chanh thường không có nhiều tên gọi khác trong tiếng Việt.",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh.jpg?alt=media&token=1b545ecb-7a0c-47e6-9b5a-e6fe906f2bc4",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh1.jpg?alt=media&token=92dfe8fa-d80d-4417-9332-04354370d34b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh2.jpg?alt=media&token=797a3d47-912b-4230-96a6-fcdc39386764",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh3.jpg?alt=media&token=09672a8f-0899-4ca4-bfe8-368b0ceae179"
//       ],
//       "description": "Lá cây chanh là loại lá đơn, mọc xung quanh nhánh và cành của cây chanh. Lá có hình trứng hoặc hình bầu dục, gần giống với lá cam (phình to ở giữa, nhọn về 2 đầu). Lá chanh có màu xanh nhạt khi non, xanh thẫm khi già, bề mặt nhẵn mịn và có mùi thơm đặc trưng khi vò dập . Lá chanh có kích thước từ 4-9cm, rộng 2-4cm. Thông thường, lá chanh tốt hay cằn cỗi sẽ phụ thuộc vào chất lượng đất trồng. Giữa lá chanh thường là có đường gân khá cứng, màu trắng. Đường viền quanh lá chanh có hình răng cưa thưa, không nhẵn mịn.",
//       "ingredient": "Linalool, dầu Limonene, Flavonoid như Poncirin, Hesperidine, Rhoifolin và Naringin, Synerphrine, N-methyltyramine, Axit citric( ngăn ngừa đau sau phẩu thuật), Canxi, Phốt pho, Sắt, Vitamin A, B1, C,",
//       "uses": "Lá chanh có dược tính an thần và chứa thành phần chống co thắt, được sử dụng để điều trị các chứng rối loạn thần kinh như mất ngủ, căng thẳng và tim đập nhanh. Chữa đau đầu và bệnh hen suyễn. Cải thiện hoạt động của hệ tiêu hoá, tăng cường sức bền của cơ thể, ức chế lão hoá, giúp giảm cân, chữa trị bệnh ho kết hợp cảm cúm, điều trị bệnh sốt hoặc cúm. Giảm đau sau phẩu thuật sỏi thận.",
//       "medicine": "Chữa cảm sốt nóng, không có mồ hôi hay bị cảm cúm mùa hè. Sốt rét dai dẳng. Hen phế quản. Ho do lạnh. Chữa sâu quảng. Chữa nhưucs đầu, giải cảm. Thanh nhiệt , mát gan. Điều trị hen phế quản. Làm mượt tóc. Chữa đầu bụng, bí tiểu ở trẻ em. Bảo vệ răng.",
//       "effect_medicine": "Gây dị ứng da. Tác dụng phụ đối với răng. Tác dụng phụ với dạ dày... ",
//       "note_use": "Vì là loại dược liệu tự nhiên, lá chanh không gây ra bất cứ tác dụng phụ nào cho cơ thể nhưng nếu không được sử dụng đúng cách thì hiệu quả mang lại sẽ không cao. \n•\tKhi lựa chọn lá chanh để làm nguyên liệu để chế biến, sản xuất các bài thuốc Đông y thì chúng ta cần lựa chọn những loại lá không bị sâu bọ, sạch sẽ, tốt nhất từ các loại cây được trồng tự nhiên. Việc lựa chọn này sẽ làm tăng độ an toàn và công dụng của bài thuốc trong việc chữa trị, điều hòa, thanh lọc cơ thể.\n•\tPhụ nữ mang thai, trẻ em nhỏ tuổi không được pháp tự ý sử dụng lá chanh\n"
//     },
//     {
//       "id_leaf": 7,
//       "name": "Lá lạc tiên",
//       "scientific_name": "Passiflora foetida L",
//       "another_name": " dây chùm bao, dây nhãn lồng.",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien.jpg?alt=media&token=a2529e0c-5eca-4480-8435-77e4662cea75",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien1.jpg?alt=media&token=995167e7-d1be-425f-bd98-8fae7ddbb270",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien2.jpg?alt=media&token=407732c9-192b-49bb-a91f-1bfe8ffc5817",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien3.jpg?alt=media&token=286b0a4e-649e-42a3-bb20-70755499039f"
//       ],
//       "description": "Lạc tiên là cây thuộc dạng thân leo, có nhiều tua cuốn, bên trong rỗng. Toàn cây có lông mềm, lá dài khoảng 7cm, rộng khoảng 10cm, chia thành 3 thùy nhọn, mọc so le. Các tua cuốn thường mọc ở các nách lá, hoa màu trắng, có tràng phụ hình sợi, màu tím. Quả lạc tiên hình tròn, được bao bọc bởi lá bắc. Quả sống có màu xanh vị chua, quả chín vàng có vị ngọt, ăn được. ",
//       "ingredient": "Alcaloid , Flavonoid, Saponin, Saporaretin.. ngoài ra còn có nhiều dưỡng chất như vitamin và khoáng chất tốt mang lại nhiều lợi ích cho sức khoẻ",
//       "uses": "cải thiện tình trạng mất ngủ lâu ngày đồng thời giúp người bệnh an thần hiệu quả. Thành phần trong quả lạc tiên có tính bình, vị ngọt có thể giúp thanh nhiệt, giải độc cho những người gặp tình trạng mụn nhọt. Ổn định huyết áp, ổn định nhịp tim, tăng cường lưu thông máu. Giúp chông co thắt và làm giãn cơ trong hệ thống cơ của cơ thể, vì vậy lạc tiên có thể hỗ trợ điều trị các cơn đau tử cung. Ngoài ra trong thành phần lạc tiên còn chứa hợp chất tính kháng khuẩn, kháng viêm giúp cải thiện tình trạng đau nhức xương khớp hoặc bồi bổ sức khoẻ gan thận",
//       "medicine": "bài thuốc giúp chữa mất ngủ và suy nhược thần kinh, giúp chữa viêm da day ngứa, ghẻ. Bài thuốc giúp giải nhiệt, mát gán. Bài thuốc trị đau nhức khớp. Điều trị căng thẳng. Hỗ trợ điều trị hạ huyết áp.",
//       "effect_medicine": "Rối loạn chức năng vận động. Người mệt mỏi, lo lắng, bồn chồn. Không tỉnh táo. Buồn nôn. Nhip tim nhanh bất thường. Luôn buồn ngủ. ",
//       "note_use": ": Không lạm dụng lạc tiên\nVứt bỏ nếu sản phẩm có mùi hay bị nấm mốc\nChỉ kết hợp với các thảo dược khác khi được bác sĩ cho phép\n"
//     },
//     {
//       "id_leaf": 8,
//       "name": "Lá khế",
//       "scientific_name": "Averhoa carambola",
//       "another_name": "",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flakhe.jpg?alt=media&token=3b3b3b3b-1b3b-4b3b-8b3b-3b3b3b3b3b3b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flakhe1.jpg?alt=media&token=3b3b3b3b-1b3b-4b3b-8b3b-3b3b3b3b3b3b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flakhe2.jpg?alt=media&token=3b3b3b3b-1b3b-4b3b-8b3b-3b3b3b3b3b3b",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flakhe3.jpg?alt=media&token=3b3b3b3b-1b3b-4b3b-8b3b-3b3b3b3b3b3b"
//       ],
//       "description": "Khi cây trưởng thành hoàn toàn có chiều cao khoảng 5- 12 m. Hoa của cây khế có màu đỏ tím, nhỏ và những cánh có hình vuông. Quả khế hình ngôi sao màu vàng cam khi chín, quả giòn có vị ngọt chua xen lẫn và có thể ăn trực tiếp hoặc ngâm chua, nấu ăn.",
//       "ingredient": "Alkaloid, flavonoid, steroid, đường khử, triterpene, tanin và saponin.",
//       "uses": "Giúp cải thiện thị lực, kích thích vị giác, thúc đẩy quá trình trao đổi chất. Bảo vệ mạch máu và duy trì sức khoẻ hệ xương khớp. Hỗ trợ quá trình thải độc tố, tăng cường hệ miễn dịch và ngăn ngừa các loại tế bào ưng thư. Hạn chế bệnh táo bón, giúp kiểm soát đường huyết và giảm men gan. Ngăn ngừa loãng xương và các bệnh xương khớp mãn tính. Ức chế quá trình dị ứng nên có thể trị bệnh ung nhọt m chàm da hay rôm xảy ở trẻ nhỏ.",
//       "medicine": "Chữa lở sơn. Chữa chứng nổi mề đay và ngứa da. Trị chứng đau họng và ngứa mũi. Trị chứng tiểu tiện không thông, choáng váng , đau đầu. Trị chứng ho khan và ho có đờm. Thuốc thúc sởi, làm sởi nhanh mọc và mọc đều. Trị cảm nắng. Chữa sốt cao co giật cho trẻ em. Chữa hen suyễn , ho gà, ho có đờm và viêm họng.",
//       "effect_medicine": "Quả khế chứa một hợp chất oxalat hoặc axit oxalic. Nếu ăn nhiều thì có thể gây ra tổn thương thận, sỏi thận, ",
//       "note_use": "Đối với trẻ em trong giai đoạn phát triển, người mắc bệnh thận và người có nguy cơ bị loãng xương cao không nên dùng quá nhiều khế. Vì trong quả chứa axit oxalic - gây cản trở sự hấp thu canxi từ các thực phẩm khác.\n•\tNgoài ra với khế chua, không nên dùng cho những người mắc bệnh dạ dày vì khế chua chứa rất nhiều axit và hạn chế ăn lúc đói.\n•\tMặc dù, khế có nhiều thành phần cung cấp dinh dưỡng và tác dụng dược lý rất tốt nhưng bạn chỉ nên bổ sung với liều lượng vừa phải để tránh các tác dụng phụ ngoài ý muốn.\n•\tTrong thời gian điều trị, nếu có bất cứ biểu hiện hay vấn đề nào, bạn cần liên hệ ngay với bác sĩ để được tư vấn chuyên môn kịp thời.\n\n"
//     },
//     {
//       "id_leaf": 9,
//       "name": "Lá mồng tơi",
//       "scientific_name": "Basella alba L",
//       "another_name": "Rau mồng tơi, mùng tơi, lạc tuỳ",
//       "url_image": [
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi.jpg?alt=media&token=11117633-d438-4cba-a7a8-f5423b6eead7",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi1.jpg?alt=media&token=e3bcdcd8-c8c5-47c6-a819-203bc1e27e2a",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi2.jpg?alt=media&token=aa8561d7-1d5a-4a9f-a4e5-bce7d75bfb38",
//         "https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi3.jpg?alt=media&token=feb19028-fab9-412b-9bb5-3766176564c8"
//       ],
//       "description": "Cây mồng tơi thuộc dạng dây leo, dài khoảng 1.5m-2m và sống được từ 1-2 năm. Thân mồng tơi mọc cuốn, có phân nhánh, có màu xanh nhạt hoặc tím nhạt. Lá rau mồng tơi mọc đơn, mẫm, so le, có cuống, phiến lá hình trứng, phần đầu nhọn, phía cuống bằng hoặc hơi hẹp lại, dài 3 – 12cm, rộng 2 – 6cm.\n Cụm hoa hình bông nhỏ mọc ở kẽ lá, có màu trắng hoặc tím đỏ nhạt. Những bông hoa ở dưới sẽ to hơn, hoa phía trên dài và gầy hơn. Quả mồng tơi nhỏ hình trứng hoặc hình cầu, dài khoảng 5mm, quả có màu xanh lúc xanh và chuyển màu tím đen khi lúc. Cây mồng tơi nguồn gốc từ các nước nhiệt đới của châu Á và châu Phi. \n Tại Việt Nam, mồng tơi mọc hoang rất nhiều và được trồng cho leo hàng rào, leo giàn để lấy rau ăn. ",
//       "ingredient": "vitamin A3, vitamin B3, Vitamin C, calci, magie và vài chất chống oxy hóa, chất saponin, chất nhầy và chất sắt cùng các acid amin thiết yếu như arginin, isoleucine, leucine, lysin. ",
//       "uses": "Trong Đông y, mồng tơi có tính hàn, vị chua, không độc, đi vào 5 kinh tâm, tì, can, đại trường, tá tràng, giúp lợi tiểu, tán nhiệt, giải độc, làm đẹp da, trị rôm sảy, mụn nhọt. Trong sách cổ có ghi rau mồng tơi có vị chua, hàn, hoạt, không độc, dùng tán nhiệt, lợi đại tiểu trường.\n Là một loại rau vua với nhiều công dụng như vậy, nhưng người Việt Nam ít dùng rau mồng tơi làm thuốc mà sẽ dùng để nấu canh ăn cho mát, vừa dễ ăn, dễ chế biến. \nỞ Inđônexia, người dân dùng rau mùng tơi để trị táo bón cho trẻ bị và dùng cho phụ nữ đẻ khó. Người ta còn dùng quả mồng tơi đỏ để nhuộm đỏ các loại mứt, làm màu thực phẩm, hoặc để làm hồng má/môi.\nỞ Ấn Độ, Bangladesh dùng rau mồng tơi điều trị các bệnh thiếu máu do loại rau này chứa nhiều sắt, chống viêm, lợi tiểu, đường ruột. \n",
//       "medicine": "Tăng lượng sữa cho sản phụ. Thanh nhiệt, giải đọc cơ thể và chữa táo bón. Hỗ trợ làn da tươi trẻ. Trị vết thương và cải thiện tình trạng đau nhức xương khớp. Cải thiện chức năng sinh lý, chữa mộng tinh. Ngăn ngừa loãng xương. Bồi bổ cho phụ nữ mang thai. Hỗ trợ giảm chất béo, cholesterol. Chống oxy hoá và bảo vệ mắt. Nâng cao hệ miễn dịch. Điều trị chứng chảy máu cam. Chữa đầy bụng , ăn không tiêu. Trị mụn đinh nhọt. Chữa tiểu nóng, tiểu buốt, tiểu rắt, khó tiểu. Trị mụn trứng cá",
//       "effect_medicine": "Cản trở khả năng hấp thụ sắt và canxi của cơ thể do chứa nhiều axit oxalic.\nLàm tăng nguy cơ bị sỏi thận nếu ăn quá nhiều.\nGây hình thành mảng bám trên răng.\nDo chứa lượng chất xơ lớn, ăn nhiều mồng tơi có thể khiến dạ dày bị khó chịu.\nRau mồng tơi làm tăng axit uric trong máu do trong thành phần chứa nhiều nhân purin, tăng nguy cơ tạo sỏi thận và bệnh gút.\nGây lạnh bụng, tiêu chảy khi ăn nhiều.",
//       "note_use": "Nên phối hợp mồng tơi cùng với các thực phẩm có nguồn gốc từ động vật để giảm bớt tính hàn của vị thuốc.\nCác món ăn từ rau mồng tơi nên ăn hết trong ngày. Trước mỗi bữa ăn nên hâm nóng lại để giảm tính hàn. Tránh để qua đêm gây biến chất, ngộ độc.\nChọn rau mồng tơi sạch, không nhiễm các chất bảo vệ thực vật để dùng. Loại rau không nhiễm hóa chất thường có thân, lá nhỏ, hơi cứng. Ngược lại, rau nhiễm hóa chất thường có thân to mập, ngọn vươn dài, lá to và xanh mướt nhìn rất bắt mắt.\n"
//     }
//   ]
// }