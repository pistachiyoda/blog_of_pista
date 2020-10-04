export default {
  computed: {
    trimmedYear() {
      return new Date(this.post.fields.publishDate).getFullYear()
    },
    trimmedMonth() {
      return new Date(this.post.fields.publishDate).getMonth() + 1
    },
    trimmedDate() {
      return new Date(this.post.fields.publishDate).getDate()
    },
    trimmedHour() {
      const hour = new Date(this.post.fields.publishDate).getHours()
      return hour
    },
    trimmedTime() {
      const minutes = (
        '00' + new Date(this.post.fields.publishDate).getMinutes()
      ).slice(-2)
      return minutes
    },
  },
}
