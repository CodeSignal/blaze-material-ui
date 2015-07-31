if (Meteor.isClient) {
  Template.exampleCatalog.events({
    'click [event-hook=someDialog]': function(event, instance) {

      var targetId = event.currentTarget.getAttribute('event-hook');
      var targetDialog = document.querySelector('[data-id=' + targetId + ']');

      targetDialog.style.display = 'block';
    }
  });


  $(function(){

    //document.querySelector('[data-id=someDialog]').style.display = 'block';

  $('[data-id=someDialog]').show();
  });

}
