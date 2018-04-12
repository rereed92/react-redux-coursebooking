const categories = [
    {
        id: 'javascript',
        title: 'JavaScript'
    },
    {
        id: 'software-practices',
        title: 'Software Practices'
    },
    {
        id: 'software-architecture',
        title: 'Software Architecture'
    },
    {
        id: 'career',
        title: 'Career'
    },
    {
        id: 'html5',
        title: 'HTML5'
    }
];

const delay = 500;

class categoryApi {

    static getCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], categories));
            }, delay);
        });
    }
}

export default categoryApi;