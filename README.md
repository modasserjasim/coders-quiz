# Coders Quiz Repository
Coders Quiz is a simple quiz test application so you can test your basic level of CSS, React, JavaScript and Git skills with this Quiz. It's just a nice way to see how much you know or don't know about React, JavaScript, CSS and Git.

Have fun, learn and test all the fundamentals of React, JavaScript, CSS & Git with Coders Quiz! Test your knowledge about all the basic features.

## Live Link

Hosted in Netlify -> [Coders Quiz](https://coders-quiz.netlify.app/)

## The features I use in this project
- This quiz app has four pages, and the routing path is handled by the React router dom hook createBrowserRouter().
- There are two parts to the home page. One relates to website introductions, and the other to quiz topics loaded via the Quiz Topics component.
- For the quiz topics cards, I'm using an external API and getting the data using the useLoaderData() hook and passing the data into the entire website using the Context API hook.
- When we click 'Start Quiz', the page comes with a dynamic URL with a unique :ID using loader and params.
- On the quiz page, when you select the option, it will show either the correct or incorrect answer with a toast. As well, if the selected option is correct, the background will be green, and the wrong answer will be a red background color. I implement this functionality using the useState() hook.
- There is an eye-icon, If you click on the eye-icon, you will see the correct answer on toast alert.
-On the statistics page, there is a chart that shows how many quizzes are available on each topic.

## Resources & Credits
- [ReactJS Library](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Context API](https://reactjs.org/docs/context.html#api)
- [TailwindCSS Framework](https://tailwindui.com/)
- [MambaUI Components](https://www.mambaui.com/components/)
- [Tostify](https://fkhadra.github.io/react-toastify/introduction/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [HeroIcons](https://heroicons.com/)