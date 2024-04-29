export interface PlantType {
    id: number;
    common_name: string;
    scientific_name: string;
    another_name: string;
    description: string;
    ingredient: string;
    uses: string;
    medicine: string;
    effect_medicine: string;
    medicine_preparation: string;
    note_uses: string;
    image_url: string[];
}

export interface PlantHistoryType {
    timestamp: number;
    plantid: number;
    image_url: string;
    common_name: string;
    scientific_name: string;
    status: boolean;
}

// export interface PlantDetectionType {
//     plantid: number;
//     status: boolean;
// }


// 1 Lá me:
// +Id: 1
// +common_name: lá me
// + scientific_name:  Tam Meus indica
// + another_name:
// + description: 
// +ingredient:
// +uses: Kiểm soát bệnh tiểu đường, Điều hoà huyết áp ,Cứu trợ cho bệnh sốt rét, chữa bệnh vàng da và tiểu đường, giúp chữa bệnh Scurvy, Chữa lành vết thương, bảo vệ cơ thể khỏi nhiễm trùng, tốt cho sức khoẻ răng miệng, điều trị loét, giảm căng thằng, làm chậm lão hoá…

// + medicine:
// +  note_uses:
// + status: 1
