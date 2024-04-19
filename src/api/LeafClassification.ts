export const plantDetect = async (image_url: string) => {
  try {
    // const response = await httpRequests.post("/detect", { image });
    // return response;
    const scientific_names = [
      'Solanum lycopersicum',
      'Piper sarmentosum',
      'Polyscias fruticosa',
      'Psidium guajava',
      'Barringtonia acutangula',
      'Citrus aurantiifolia',
      'Dendrobium loddigesii',
      'Oxalis corniculata',
      'Epipremnum aureum',
      'Ipomoea aquatica',
    ];
    const common_names = [
      'Lá cà chua',
      'lá diếp cá',
      'Lá đinh lăng',
      'Lá ổi',
      'Lá bàng',
      'Lá chanh',
      'Lá lạc tiên',
      'Lá khế',
      'Lá vong',
      'Lá mồng tơi',
    ];
    const descriptions = [
      'Cà chua (danh pháp hai phần: Solanum lycopersicum), thuộc họ Cà (Solanaceae), là một loại rau quả làm thực phẩm. Quả ban đầu có màu xanh, chín ngả màu từ vàng đến đỏ. Cà chua có vị hơi chua và là một loại thực phẩm bổ dưỡng, tốt cho cơ thể, giàu vitamin C và A, đặc biệt là giàu lycopene tốt cho sức khỏe.',
      'Diếp cá (danh pháp hai phần: Piper sarmentosum) là một loài thực vật có hoa trong họ Hồ tiêu. Loài này được Miq. mô tả khoa học đầu tiên năm 1861.',
      'Dinh lăng (danh pháp hai phần: Polyscias fruticosa) là một loài thực vật có hoa trong họ Araliaceae. Loài này được (L.) Harms mô tả khoa học đầu tiên năm 1897.',
      'Ổi (danh pháp hai phần: Psidium guajava) là một loài thực vật có hoa trong họ Đào lộn hột. Loài này được L. mô tả khoa học đầu tiên năm 1753.',
      'Bàng (danh pháp hai phần: Barringtonia acutangula) là một loài thực vật có hoa trong họ Lý thuyết. Loài này được (L.) Gaertn. mô tả khoa học đầu tiên năm 1788.',
      'Chanh (danh pháp hai phần: Citrus aurantiifolia) là một loài thực vật có hoa trong họ Cam chanh. Loài này được (Christm.) Swingle mô tả khoa học đầu tiên năm 1913.',
      'Lạc tiên (danh pháp hai phần: Dendrobium loddigesii) là một loài thực vật có hoa trong họ Lan. Loài này được Rchb.f. mô tả khoa học đầu tiên năm 1862.',
      'Khế (danh pháp hai phần: Oxalis corniculata) là một loài thực vật có hoa trong họ Oxalidaceae. Loài này được L. mô tả khoa học đầu tiên năm 1753.',
      'Vong (danh pháp hai phần: Epipremnum aureum) là một loài thực vật có hoa trong họ Ráy (Araceae). Loài này được (Linden & André) G.S.Bunting mô tả khoa học đầu tiên năm 1965.',
      'Mồng tơi (danh pháp hai phần: Ipomoea aquatica) là một loài thực vật có hoa trong họ Rau muống. Loài này được Forssk. mô tả khoa học đầu tiên năm 1775.',
    ];

    const randomIndex = Math.floor(Math.random() * scientific_names.length);

    return {
      description: descriptions[randomIndex],
      image_url: image_url,
      scientific_name: scientific_names[randomIndex],
      common_name: common_names[randomIndex],
      status: true,
      timestamp: new Date().getTime(),
    } as PlantDetectType;
  } catch (error) {
    throw error;
  }
};


export const plantDirectory = async (): Promise<PlantDetectType[]> => {
  const scientific_names = [
    'Solanum lycopersicum',
    'Piper sarmentosum',
    'Polyscias fruticosa',
    'Psidium guajava',
    'Barringtonia acutangula',
    'Citrus aurantiifolia',
    'Dendrobium loddigesii',
    'Oxalis corniculata',
    'Epipremnum aureum',
    'Ipomoea aquatica',
  ];
  const common_names = [
    'Lá cà chua',
    'lá diếp cá',
    'Lá đinh lăng',
    'Lá ổi',
    'Lá bàng',
    'Lá chanh',
    'Lá lạc tiên',
    'Lá khế',
    'Lá vong',
    'Lá mồng tơi',
  ];
  const descriptions = [
    'Cà chua (danh pháp hai phần: Solanum lycopersicum), thuộc họ Cà (Solanaceae), là một loại rau quả làm thực phẩm. Quả ban đầu có màu xanh, chín ngả màu từ vàng đến đỏ. Cà chua có vị hơi chua và là một loại thực phẩm bổ dưỡng, tốt cho cơ thể, giàu vitamin C và A, đặc biệt là giàu lycopene tốt cho sức khỏe.',
    'Diếp cá (danh pháp hai phần: Piper sarmentosum) là một loài thực vật có hoa trong họ Hồ tiêu. Loài này được Miq. mô tả khoa học đầu tiên năm 1861.',
    'Dinh lăng (danh pháp hai phần: Polyscias fruticosa) là một loài thực vật có hoa trong họ Araliaceae. Loài này được (L.) Harms mô tả khoa học đầu tiên năm 1897.',
    'Ổi (danh pháp hai phần: Psidium guajava) là một loài thực vật có hoa trong họ Đào lộn hột. Loài này được L. mô tả khoa học đầu tiên năm 1753.',
    'Bàng (danh pháp hai phần: Barringtonia acutangula) là một loài thực vật có hoa trong họ Lý thuyết. Loài này được (L.) Gaertn. mô tả khoa học đầu tiên năm 1788.',
    'Chanh (danh pháp hai phần: Citrus aurantiifolia) là một loài thực vật có hoa trong họ Cam chanh. Loài này được (Christm.) Swingle mô tả khoa học đầu tiên năm 1913.',
    'Lạc tiên (danh pháp hai phần: Dendrobium loddigesii) là một loài thực vật có hoa trong họ Lan. Loài này được Rchb.f. mô tả khoa học đầu tiên năm 1862.',
    'Khế (danh pháp hai phần: Oxalis corniculata) là một loài thực vật có hoa trong họ Oxalidaceae. Loài này được L. mô tả khoa học đầu tiên năm 1753.',
    'Vong (danh pháp hai phần: Epipremnum aureum) là một loài thực vật có hoa trong họ Ráy (Araceae). Loài này được (Linden & André) G.S.Bunting mô tả khoa học đầu tiên năm 1965.',
    'Mồng tơi (danh pháp hai phần: Ipomoea aquatica) là một loài thực vật có hoa trong họ Rau muống. Loài này được Forssk. mô tả khoa học đầu tiên năm 1775.',
  ];
  const image_urls = [
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fcachua.jpg?alt=media&token=9773a7bc-5e00-4212-b668-12e22345438b',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fdiepca.jpg?alt=media&token=8d3ee0a6-3292-4cfa-8292-09c5b5065680',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fdinhlang.jpg?alt=media&token=8dac3d3e-b051-4bf0-9d72-2e23977b643c',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Flaoi.jpg?alt=media&token=a897c7a7-a154-45ee-9ba4-3f867427ac8d',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Flabang.jpg?alt=media&token=aa8da710-55dc-48c6-959c-ffd025103266',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Flachanh.jpg?alt=media&token=7fb18c42-662f-49a8-bbf4-af85cdcf546a',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Flactien.jpg?alt=media&token=65bf46e9-8cdc-4175-9524-90f192f6d53d',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fkhe.jpg?alt=media&token=bee7999c-2a53-459d-bbc9-f238e48932e9',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fvong.jpg?alt=media&token=605f18fc-d002-4a91-9043-9f35ca3a4dd5',
    'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/directory%2Fmongtoi.jpg?alt=media&token=ac16cba4-f777-490e-9951-b593164c7246'
  ]

  const directory = scientific_names.map((scientific_name, index) => {
    return {
      common_name: common_names[index],
      description: descriptions[index],
      image_url: image_urls[index],
      scientific_name: scientific_name,
      status: true,
    };
  })

  return directory
};
