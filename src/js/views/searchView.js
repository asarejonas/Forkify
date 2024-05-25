class SearchView {
  #parentEl = document.querySelector('.search');

  getQuerry() {
    return this.#parentEl.querySelector('.search_field').value;
  }
}

export default new SearchView();
