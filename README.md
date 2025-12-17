# Website Nhà Hàng Cơm Quê Của Ngoại

Website nhà hàng mang đậm hương vị truyền thống Việt Nam, được xây dựng với HTML, CSS và JavaScript thuần túy.

## 🌟 Tính năng

- **Trang chủ**: Giới thiệu các món ăn nổi bật và khuyến mãi
- **Giới thiệu**: Thông tin về nhà hàng và đội ngũ
- **Menu**: Danh sách món ăn chi tiết với hình ảnh
- **Đặt bàn**: Form đặt bàn trực tuyến
- **Liên hệ**: Thông tin liên hệ và bản đồ
- **Giỏ hàng**: Đặt món online với thanh toán

## 🚀 Xem Website Local

1. Clone repository:
```bash
git clone https://github.com/[your-username]/Website_NhaHang.git
cd Website_NhaHang
```

2. Mở file `index.html` bằng trình duyệt:
   - Double-click vào `index.html`, hoặc
   - Sử dụng Live Server extension trong VS Code

## 📦 Cấu trúc Project

```
Website_NhaHang/
├── index.html              # Trang chủ
├── main.css               # CSS chính
├── README.md              # File này
├── About_page/            # Trang giới thiệu
│   ├── gioithieu.html
│   └── gioithieu-style.css
├── menu_page/             # Trang menu
├── datban_page/           # Trang đặt bàn
├── contact_page/          # Trang liên hệ
├── Order_page/            # Trang giỏ hàng
├── product/               # Chi tiết sản phẩm
├── thanhtoandonhang_page/ # Thanh toán
├── trangthoat1/           # Trang thành công
├── trangthoat2/           # Trang thất bại
└── imagine/               # Thư mục hình ảnh
```

## 🌐 Deploy lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập GitHub
2. Tạo repository mới với tên `Website_NhaHang`
3. **Không** tích chọn "Initialize with README"

### Bước 2: Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit: Restaurant website"
git branch -M main
git remote add origin https://github.com/[your-username]/Website_NhaHang.git
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages
1. Vào repository trên GitHub
2. Click **Settings** → **Pages**
3. Trong **Source**, chọn **main** branch
4. Click **Save**
5. Đợi vài phút, website sẽ có ở: `https://[your-username].github.io/Website_NhaHang/`

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc website
- **CSS3**: Styling và animations
- **JavaScript**: Tương tác và dynamic content
- **No frameworks**: Pure vanilla code

## 📱 Responsive Design

Website tối ưu cho:
- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

## 📝 Lưu ý

- Tất cả file names đã được chuẩn hóa (không có khoảng trắng)
- Hình ảnh nằm trong folder `imagine/`
- Navigation links sử dụng relative paths

## 👨‍💻 Phát triển

Website được phát triển bởi team Cơm Quê Của Ngoại.

## 📄 License

© 2025 Cơm Quê Của Ngoại. All rights reserved.
