import { isUserLoggedIn } from './auth';
import { openCommentModal } from './createPostModal';

export const handleCommentForRecipes = (recipe, recipeElement) => {
  if (isUserLoggedIn()) {
    const containerPost = document.createElement('div');
    containerPost.className = 'containerCreatePost';

    const commentIcon = document.createElement('i');
    commentIcon.className = 'fa-regular fa-comment';

    const commentAll = document.createElement('p');
    commentAll.className = 'commentPostAll';
    commentAll.textContent = 'View all comments';

    commentIcon.addEventListener('click', () => {
      openCommentModal();
    });

    containerPost.append(commentIcon, commentAll);
    recipeElement.append(containerPost);
  }
};
