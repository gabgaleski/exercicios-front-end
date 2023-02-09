import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
const getApi = fetch(USERS_API)
const getUser = () => {
 getApi.then((promese) => promese.json())
.then((data) => {
  const user = data.users
  fillUsersSelect(user)
})
}
getUser();

usersSelect.addEventListener('change', () => {
  clearPageData();

  const USER = `https://dummyjson.com/posts/user/${usersSelect.value}`;
  
  fetch(USER)
  .then((promise) => promise.json())
  .then((data) => {
    const { posts } = data;
    fillPosts(posts)

    const [featuredPost] = posts;
    const coments = `https://dummyjson.com/posts/${featuredPost.id}/comments`

    return fetch(coments)
    .then((promise) => promise.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments)
    })
  })
  .catch((error) => {
    fillErrorMessage(error.mesage)
  })


 
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
