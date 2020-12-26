import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        books: getBooks(),
        filter: {
            genre: 'Все',
            author: '',
            title: '',
            sort: 'нет'
        }
    },
    getters: {
        books(state) {
            let books = state.books.slice();
            //filter
            if (state.filter.title != ''){
                books = books.filter((obj) => obj.title.toLowerCase().includes(state.filter.title.toLowerCase()));
            }
            if (state.filter.author != '')
                books = books.filter((obj) => obj.author.toLowerCase().includes(state.filter.author.toLowerCase()));
            if (state.filter.genre != 'Все')
                books = books.filter((obj) => obj.genres.indexOf(state.filter.genre) != -1);
            //sort
            if (state.filter.sort == "автор")
                books.sort((a, b) => (a.author > b.author ? 1 : -1));
            if (state.filter.sort == "название")
                books.sort((a, b) => (a.title > b.title ? 1 : -1));

            return books;
        },
        bookIndex: (state, getters) => (id) => {
            return getters.books.findIndex((obj) => obj.id == id);
        },
        book: (state) => (id) => {
            return state.books.find((obj) => obj.id == id);
        },
        genres(state) {
            let genres = [];
            state.books.forEach((obj) => {
                genres.push(...obj['genres']);
            });
            return Array.from(new Set(genres));
        },
        amountBooks(state, getters) {
            return getters.books.length;
        },
        amountAuthor(state, getters) {
            let authors = new Set();
            getters.books.forEach((obj) => {
                authors.add(obj['author']);
            });
            return authors.size;
        },
    },
    mutations: {
        setFilter(state, newFilter) {
            state.filter = {...newFilter};
        },
        delBook(state, id) {
            state.books.forEach((item, index, arr) => {
                if (item['id'] == id) arr.splice(index, 1);
            });
        },
        changeBook(state, obj) {
            state.books.forEach((item) => {
                if (item['id'] == obj['id']) {
                    item.title = obj.title;
                    item.author = obj.author;
                    item.genres = [...obj.genres]
                }
            });
        }
    },
    actions: {
        setFilter(store, newFilter) {
            if (Object.keys(newFilter).length)
                store.commit('setFilter', newFilter);
        },
        delBook(store, obj) {
            store.commit('delBook', obj);
        },
        changeBook(store, obj) {
            console.log(1);
            store.commit('changeBook', obj);
        },
    }
});

function getBooks() {
    return [
        { "id": 1, "title": "Детское море", "author": "Николай Варухин", "genres": ["Наука", "Педагогика и воспитания", "Спорт"] },
        { "id": 2, "title": "Владычица Озера", "author": "Анджей Сапковский", "genres": ["Фэнтези"] },
        { "id": 3, "title": "Ловец человеков", "author": "Надежда Попова", "genres": ["Детектив", "Научная фантастика", "Тёмное фэнтези"] },
        { "id": 4, "title": "Болтливый мертвец", "author": "Макс Фрай", "genres": ["Фэнтези"] },
        { "id": 5, "title": "Меч Предназначения", "author": "Анджей Сапковский", "genres": ["Героический", "Фэнтези"] },
        { "id": 6, "title": "Герцог де Л'Омлет", "author": "Эдгар Алан По", "genres": ["Классические детективы", "Проза"] },
        { "id": 7, "title": "На байдарке", "author": "Феликс Квадригин", "genres": ["Спорт"] },
        { "id": 8, "title": "Тубурская игра", "author": "Макс Фрай", "genres": ["Детектив", "Фэнтези"] },
        { "id": 9, "title": "Маяк", "author": "Эдгар Алан По", "genres": ["Классические детективы", "Проза"] },
        { "id": 10, "title": "Последнее желание", "author": "Анджей Сапковский", "genres": ["Героический", "Фэнтези"] }
    ];
}