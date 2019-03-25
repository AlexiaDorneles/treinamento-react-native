let _img

class ImgMockService {
  constructor() {
  }

  setImg(img) {
    _img = img
  }

  getImg() {
    return _img
  }

  getImgAsObject() {
    return { uri: _img }
  }
}

const imgMockService = new ImgMockService()
export { imgMockService }
