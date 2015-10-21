if (Meteor.isClient) {
  Template.paperDialog.events({
    'click [event-hook=openDialog]': function(){
      var dialog = document.querySelector('.paper-dialog-0');
      if (dialog) {
        dialog.style.display = 'block';
      }
    }
  });
}
