let courses = [
    {
      id: "react-flux-building-applications",
      title: "Building Applications in React and Flux",
      watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
      author: "Cory House",
      length: "5:08",
      category: "JavaScript"
    },
    {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      author: "Cory House",
      length: "3:10",
      category: "Software Practices"
    },
    {
      id: "architecture",
      title: "Architecting Applications for the Real World",
      watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
      author: "Cory House",
      length: "2:52",
      category: "Software Architecture"
    },
    {
      id: "career-reboot-for-developer-mind",
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      author: "Cory House",
      length: "2:30",
      category: "Career"
    },
    {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      author: "Cory House",
      length: "5:10",
      category: "HTML5"
    }
];

const sortCourses = (key, asc=true) => {
    return function(a, b) {  
        if (a[key] > b[key]) {  
            return asc ? 1 : -1  
        } else if (a[key] < b[key]) {  
            return asc ? -1 : 1;
        }  
        return 0;  
    };
};

const delay = 500;

class courseApi {

    static getCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static getCourse(id) {
        return courses.filter(course => course.id === id);
    }

    static addCourse(course) {
        course = Object.assign({}, course);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                courses.push(course);
                resolve(course);
            }, delay);
        });
    }

    static updateCourse(course) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const courseIndex = courses.findIndex(c => c.id === course.id);
                courses.splice(courseIndex, 1, course);
                resolve(course);
            }, delay);
        });
    }

    static removeCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                courses = courses.filter(course => course.id !== courseId);
                resolve(courseId);
            }, delay);
        });
    }

    static sortCourse(option, order) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                courses = [...courses].sort(sortCourses(option, order === 'asc' ? true : false));
                resolve(option, order === true ? 'asc' : 'desc');
            }, delay);
        });
    }
}

export default courseApi;