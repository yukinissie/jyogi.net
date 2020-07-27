$('.navbar-nav>a , .dropdown-menu>a').on('click', function(){
  if(this.id != 'navbarDropdown'){
    $('.navbar-collapse').collapse('hide');
  }
});