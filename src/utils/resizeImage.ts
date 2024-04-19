
// Hàm thay đổi kích thước hình ảnh với tỷ lệ giữ nguyên
export function resizeImageWithAspectRatio(originalWidth: number, originalHeight: number, desiredWidth: number, desiredHeight: number) {
    const aspectRatio = originalWidth / originalHeight;

    // Tính toán kích thước mới dựa trên tỷ lệ và kích thước mong muốn
    let newWidth: number, newHeight: number;
    if (desiredWidth) {
      newWidth = desiredWidth;
      newHeight = Math.round(newWidth / aspectRatio);
    } else if (desiredHeight) {
      newHeight = desiredHeight;
      newWidth = Math.round(newHeight * aspectRatio);
    } else {
      throw new Error('Vui lòng cung cấp kích thước mong muốn cho chiều rộng hoặc chiều cao.');
    }

    return { newWidth, newHeight };
}