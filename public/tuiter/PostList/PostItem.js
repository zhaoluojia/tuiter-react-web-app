const PostItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col col-1">
          <img src="${post.avatarIcon}" class="rounded-circle" height="50px">
        </div>
        <div class="col col-11">
          <span class="fw-bolder" style="color: white">${post.userName}</span>
          <i class="fas fa-check-circle" style="color: white"></i>
          <span>@${post.handle}</span>
          <span> · ${post.time}</span>
          <i class="fas fa-ellipsis-h float-end" style="color: gray"></i>
          <div style="color: white">${post.comment}</div>
          <img src="${post.image}" class="mt-2 border border-secondary wd-rounded-top-frame" height="300px" width="100%">
          <div class="p-3 mb-2 border border-secondary wd-rounded-bottom-frame" height="100px">
            <div style="color: white">${post.title}</div>
            <div>${post.content}</div>
            <i class="fas fa-link"></i>
            <span> ${post.link}</span>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </li>
  `)
}
export default PostItem;