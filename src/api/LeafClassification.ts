import { PlantHistoryType, PlantType } from "../types/plantType";
import httpRequests from "./httpRequest";

export const detectPlant = async (image_url: string): Promise<any> => {
  return httpRequests.post('https://flask-hello-world-two-ebon.vercel.app/detect', {
    'image_url': image_url
  })
};

// export const detectPlant = async (image_url: string) => {
//   const random_id = Math.floor(Math.random() * 10);
//   const random_status = Math.random() < 0.5;
//   return {
//     plantid: random_id,
//     status: random_status,
//   };
// };


// export const getPlantDirectory = async (): Promise<PlantType[]> => {
//   return httpRequests.get('https://flask-hello-world-two-ebon.vercel.app/get-plant-directory')
// }


export const getPlantDirectory = async (): Promise<PlantType[]> => {
  return [
    {
      id: 0,
      common_name: 'Cà chua',
      scientific_name: 'Solanum lycopersicum',
      another_name: ['Pomodoro', 'Tomato'],
      description: 'Cà chua là một loại cây ăn quả quan trọng, cung cấp nhiều vitamin và khoáng chất cho cơ thể.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Cà chua có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.', 
      medicine: 'Cà chua được cho là có tác dụng chống ung thư, giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      effect_medicine: 'Cà chua có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Cà chua có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn cà chua khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua1.jpg?alt=media&token=43b12095-7b9a-440d-bbca-38479f3afa31',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua2.jpg?alt=media&token=e931e3dd-7ee4-4c57-b85a-f7183940745a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua3.jpg?alt=media&token=70c8a6ed-2245-43a7-84f3-95e5fabf4e9e',
      ]
    },
    {
      id: 1,
      common_name: 'Diếp cá',
      scientific_name: 'Piper sarmentosum',
      another_name: ['Betel leaf'],
      description: 'Diếp cá là một loại cây ăn lá, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Diếp cá có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Diếp cá được cho là có tác dụng chống vi khuẩn, giúp tiêu hóa, giảm đau.',
      effect_medicine: 'Diếp cá có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Diếp cá có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn diếp cá khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca.jpg?alt=media&token=c6852208-94d6-452c-875a-54cf84539b7b',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca1.jpg?alt=media&token=f2dae96d-769e-43e9-92ec-3f3830f4edb5',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca2.jpg?alt=media&token=8aa16a24-0de4-4d91-b570-45a260106913',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdiepca3.jpg?alt=media&token=f1942729-6bfb-4b03-91f4-cf7766d70837'
      ]
    }, 
    {
      id: 2,
      common_name: 'Đinh Lăng',
      scientific_name: 'Polyscias fruticosa',
      another_name: ['Đinh lang'],
      description: 'Đinh lăng là một loại cây cảnh, thường được trồng trong nhà.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Đinh lăng có thể trồng trong nhà, tạo không gian xanh.',
      medicine: 'Đinh lăng được cho là có tác dụng giảm căng thẳng, giúp ngủ ngon.',
      effect_medicine: 'Đinh lăng có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Đinh lăng có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn đinh lăng khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang.jpg?alt=media&token=dbb2b68f-a5d7-490b-8110-180d2c9522c5',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang1.jpg?alt=media&token=288aa744-e45d-40dd-b2c8-af649995f184',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang2.jpg?alt=media&token=55dbd555-a25d-497b-88b8-f2d11ed85e11',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fdinhlang3.jpg?alt=media&token=f01f4157-d103-44a9-9eef-d861e9256b32'
      ]
    },
    {
      id: 3,
      common_name: 'Lá ổi',
      scientific_name: 'Psidium guajava',
      another_name: ['Guava leaf'],
      description: 'Lá ổi là một loại cây ăn lá, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Lá ổi có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Lá ổi được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      effect_medicine: 'Lá ổi có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Lá ổi có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn lá ổi khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi.jpg?alt=media&token=807c198e-a0f4-4102-99b5-a0d403b13261',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi1.jpg?alt=media&token=400a8761-84da-4cb9-9305-a79b5c499c7c',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi2.jpg?alt=media&token=82818518-7b0e-48d9-8132-c728f9b283bc',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flaoi3.jpg?alt=media&token=3790ecd1-3890-4ccd-90ac-7d3dee77a251'
      ]
    },
    {
      id: 4,
      common_name: 'Lá Bàng',
      scientific_name: 'Colocasia esculenta',
      another_name: ['Taro'],
      description: 'Lá bàng là một loại cây ăn củ, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Lá bàng có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Lá bàng được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      effect_medicine: 'Lá bàng có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Lá bàng có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn lá bàng khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang.jpg?alt=media&token=548cb6f8-a020-42e0-881a-6ba6f1192568',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang1.jpg?alt=media&token=11c97267-6669-4595-a1a9-febb551eee85',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang2.jpg?alt=media&token=f5fdb215-52f8-4ba6-a350-8806cea6e98f',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flabang3.jpg?alt=media&token=285bef31-10c8-4dec-a207-0ac132a9c978'
      ]
    },
    {
      id: 5,
      common_name: 'Lá Chanh',
      scientific_name: 'Citrus aurantifolia',
      another_name: ['Lime'],
      description: 'Lá chanh là một loại cây ăn quả, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Lá chanh có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Lá chanh được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      effect_medicine: 'Lá chanh có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Lá chanh có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn lá chanh khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh.jpg?alt=media&token=1b545ecb-7a0c-47e6-9b5a-e6fe906f2bc4',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh1.jpg?alt=media&token=92dfe8fa-d80d-4417-9332-04354370d34b',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh2.jpg?alt=media&token=797a3d47-912b-4230-96a6-fcdc39386764',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flachanh3.jpg?alt=media&token=09672a8f-0899-4ca4-bfe8-368b0ceae179'
      ]
    },
    {
      id: 6,
      common_name: 'Lạc tiên',
      scientific_name: 'Dipterocarpus alatus',
      another_name: ['Dipterocarpus'],
      description: 'Lạc tiên là một loại cây cảnh, thường được trồng trong nhà.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Lạc tiên có thể trồng trong nhà, tạo không gian xanh.',
      medicine: 'Lạc tiên được cho là có tác dụng giảm căng thẳng, giúp ngủ ngon.',
      effect_medicine: 'Lạc tiên có thể gây dị ứng cho một số người.', 
      medicine_preparation: 'Lạc tiên có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn lạc tiên khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien.jpg?alt=media&token=a2529e0c-5eca-4480-8435-77e4662cea75',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien1.jpg?alt=media&token=995167e7-d1be-425f-bd98-8fae7ddbb270',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien2.jpg?alt=media&token=407732c9-192b-49bb-a91f-1bfe8ffc5817',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Flactien3.jpg?alt=media&token=286b0a4e-649e-42a3-bb20-70755499039f'
      ]
    }, 
    {
      id: 7,
      common_name: 'Khế',
      scientific_name: 'Annona squamosa',
      another_name: ['Sugar-apple'],
      description: 'Khế là một loại cây ăn quả, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Khế có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      effect_medicine: 'Khế được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      medicine_preparation: 'Khế có thể chế biến thành nhiều loại thuốc khác nhau.',
      medicine: 'Khế được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      note_uses: 'Không nên ăn khế khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fkhe.jpg?alt=media&token=08ca0134-7972-43fd-8611-64e25dd74132',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fkhe1.jpg?alt=media&token=7c7eb3ba-5bb5-4468-ba52-6e1545b55581',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fkhe2.jpg?alt=media&token=00059390-b1be-4a9b-93a5-eae6ef5bbbb5',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fkhe3.jpg?alt=media&token=a0bbcd47-9959-4dd9-a27b-2e10672272a8'
      ]
    },
    {
      id: 8,
      common_name: 'Lá vông',
      scientific_name: 'Cymbopogon citratus',
      another_name: ['Lemongrass'],
      description: 'Lá vông là một loại cây ăn lá, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Lá vông có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Lá vông được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      effect_medicine: 'Lá vông có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Lá vông có thể chế biến thành nhiều loại thuốc khác nhau.',
      note_uses: 'Không nên ăn lá vông khi đang đói.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fvong.jpg?alt=media&token=c9ab32af-5e60-4f3c-a116-d8421f0f5c6e',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fvong.jpg?alt=media&token=c9ab32af-5e60-4f3c-a116-d8421f0f5c6e',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fvong.jpg?alt=media&token=c9ab32af-5e60-4f3c-a116-d8421f0f5c6e',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fvong.jpg?alt=media&token=c9ab32af-5e60-4f3c-a116-d8421f0f5c6e',
      ]
    },
    {
      id: 9,
      common_name: 'Mồng tơi',
      scientific_name: 'Basella alba',
      another_name: ['Malabar spinach'],
      description: 'Mồng tơi là một loại cây ăn lá, thường được sử dụng trong nấu ăn.',
      ingredient: 'Vitamin A, Vitamin C, Vitamin K, Folate, Potassium',
      uses: 'Mồng tơi có thể ăn sống hoặc chế biến thành nhiều món ăn khác nhau.',
      medicine: 'Mồng tơi được cho là có tác dụng giảm cholesterol, giảm nguy cơ mắc bệnh tim mạch.',
      note_uses: 'Không nên ăn mồng tơi khi đang đói.',
      effect_medicine: 'Mồng tơi có thể gây dị ứng cho một số người.',
      medicine_preparation: 'Mồng tơi có thể chế biến thành nhiều loại thuốc khác nhau.',
      image_url: [
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi.jpg?alt=media&token=11117633-d438-4cba-a7a8-f5423b6eead7',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi1.jpg?alt=media&token=e3bcdcd8-c8c5-47c6-a819-203bc1e27e2a',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi2.jpg?alt=media&token=aa8561d7-1d5a-4a9f-a4e5-bce7d75bfb38',
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fmongtoi3.jpg?alt=media&token=feb19028-fab9-412b-9bb5-3766176564c8'
      ]
    }
  ]

};
