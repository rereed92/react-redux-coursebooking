const sort = {
    options: [
        {
            id: 'title-asc', 
            option: 'Title - Ascending'
        },
        {
            id: 'title-desc', 
            option: 'Title - Descending'
        },
        {
            id: 'length-asc', 
            option: 'Length - Ascending'
        },
        {
            id: 'length-desc', 
            option: 'Length - Descending'
        }
    ],
    option: 'title-asc'
};

const delay = 500;

class sortApi {

    static getSort() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, sort));
            }, delay);
        });
    }

    static getSortOptions() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], sort.options));
            }, delay);
        });
    }

    static updateSortOption(option) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                sort.option = option;
                resolve(option);
            }, delay);
        });
    }
}

export default sortApi;