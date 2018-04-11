let courses = [
    {
      id: "react-flux-building-applications",
      title: "Building Applications in React and Flux",
      watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
      authorId: "cory-house",
      length: "5:08",
      category: "JavaScript"
    },
    {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"
    },
    {
      id: "architecture",
      title: "Architecting Applications for the Real World",
      watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
      authorId: "cory-house",
      length: "2:52",
      category: "Software Architecture"
    },
    {
      id: "career-reboot-for-developer-mind",
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      authorId: "cory-house",
      length: "2:30",
      category: "Career"
    },
    {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }
];

const delay = 500;

class courseApi {

    static getCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
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

    static removeCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                courses = courses.filter(course => course.id !== courseId);
                resolve(courseId);
            }, delay);
        });
    }
}

export default courseApi;