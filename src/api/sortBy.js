const sortOptions = [
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