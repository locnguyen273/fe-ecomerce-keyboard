/* eslint-disable @typescript-eslint/no-explicit-any */
const slugToTitleDictionary : any = {
  "admin": "Trang chủ",
  "manage-user": "Quản lý người dùng",
  "manage-product": "Quản lý sản phẩm",
}

export const convertSlugToTitle = (slug: string) => {
  return slugToTitleDictionary[slug] || slug.replace(/-/g,' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}