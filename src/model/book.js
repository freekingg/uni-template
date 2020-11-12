import request from '@/common/http'

class Book {
  // constructor() {}

  async getBooks() {
    return request({
      method: 'get',
      url: 'v1/book',
      handleError: false,
    })
  }
}

export default new Book()
