const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-home"></i>
        <div class="d-none d-xl-inline">Home</div>
      </a>
      <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-hashtag"></i>
        <div class="d-none d-xl-inline">Explore</div>
      </a>
      <a href="notifications.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-bell"></i>
        <div class="d-none d-xl-inline">Notifications</div>
      </a>
      <a href="messages.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-envelope"></i>
        <div class="d-none d-xl-inline">Messages</div>
      </a>
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-bookmark"></i>
        <div class="d-none d-xl-inline">Bookmarks</div>
      </a>
      <a href="lists.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-list"></i>
        <div class="d-none d-xl-inline">Lists</div>
      </a>
      <a href="../profile.html" class="list-group-item list-group-item-action" id="event-target">
        <i class="fas fa-user"></i>
        <div class="d-none d-xl-inline">Profile</div>
      </a>
      <a href="more.html" class="list-group-item list-group-item-action" id="event-target">
        <span class="position-relative">
          <i class="fas fa-circle"></i>
          <i class="fas fa-ellipsis-h position-absolute wd-more-icon fa-xs" style="color: white"></i>
        </span>
        <div class="d-none d-xl-inline">More</div>
      </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

const handleEventTarget = (event) => {
  const target = event.target;
  console.log(target);
  $(target).css('background-color', 'blue');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);
