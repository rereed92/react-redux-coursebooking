const sortOptions = [
    {
        id: 'title-asc', 
        option: 'Title - Ascending'
    },
    {
        id: 'title-desc', 
        option: 'Title - Descending'
    }
];

const delay = 500;

class sortApi {

    static getSortOptions() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], sortOptions));
            }, delay);
        });
    }
}

export default sortApi;