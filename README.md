# Course Registration

# Course Registration Project Features add

* Users can browse a list of available courses and select the ones they want to register for.
* The user will see a toast if they want to register for a course a second time.
* On clicking the button,the user will see the course name,total credits,remaining credits that are subtracted from the total and toast if the total credits are more than 20.

# Managed the state in my assignment project

* I use the useState hook to create and manage component-specific state variables:

  1.courses:It holds the list of available courses,and I fetch this data from an external JSON file using the fetch api and update the state with setCourses.
  2.selectedCourse:It is an array that keeps track of the courses selected by the user.I update it when the user click the select button to add a course to their cart.
  3.remaining:it represents the remaining credit hours available to the user.I calculate and update this value based on the selected courses.
  4.totalCredit:It tracks the total credit hours of the selected courses.

* The handleSelectClick function is responsible for updating the state when a user selects a course.Check if the same course is in the selectedCourse array,calculate the remaining and total credits and check if the setSelectedCourse exists,update the state using the setRemaining and setTotalCredit functions.

* To share the state between components,I pass the relevant state variables as props to the Cart component.It allows to display and render the selected courses and credit information.

* In the Cart component,I receive the state props and use them to display the selected courses,remaining credit hours and total credit hours to the user.I map though the selectedCourse array to render each selected course's name.

* I use the toast notification to provide feedback to users.User will see a toast if they want to register for a course a second time and total credits are more than 20.
