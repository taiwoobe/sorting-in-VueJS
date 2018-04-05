new Vue({
  el: "#app",
  data: function data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [{ title: "White Chicks", rating: 82 }, { title: "Grey's Anatomy", rating: 98 }, { title: "Prison Break", rating: 98 }, { title: "How I Met Your Mother", rating: 94 }, { title: "Supernatural", rating: 95 }, { title: "Breaking Bad", rating: 97 }, { title: "The Vampire Diaries", rating: 91 }, { title: "The Walking Dead", rating: 98 }, { title: "Pretty Little Liars", rating: 96 }, { title: "Once Upon a Time", rating: 98 }, { title: "Sherlock", rating: 95 }, { title: "Death Note", rating: 77 }, { title: "Naruto", rating: 88 }, { title: "Arrow", rating: 96 }, { title: "Black Mirror", rating: 80 }, { title: "The Originals", rating: 74 }, { title: "The 100", rating: 97 }, { title: "Masha and the Bear", rating: 81 }, { title: "Hunter X Hunter", rating: 57 }, { title: "Marvel's Luke Cage", rating: 95 }, { title: "Marvel's Iron Fist", rating: 98 }]
    };
  },

  methods: {
    sortLowest: function sortLowest() {
      this.ratingsInfo.sort(function (a, b) {
        return a.rating > b.rating ? 1 : -1;
      });
    },
    sortHighest: function sortHighest() {
      this.ratingsInfo.sort(function (a, b) {
        return a.rating < b.rating ? 1 : -1;
      });
    }
  }
});