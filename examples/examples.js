if (Meteor.isClient) {
  Template.exampleCatalog.events({
    'click [event-hook=someDialog]': function(event, instance) {

      var targetId = event.currentTarget.getAttribute('event-hook');
      var targetDialog = document.querySelector('[data-id=' + targetId + ']');

      targetDialog.style.display = 'block';
    },

  });
  Template.exampleCatalog.helpers({
    checkboxChanges: function(){
      return function(checked, value){
        console.log(checked, value);
      }
    }

  });


  $(function(){

    //document.querySelector('[data-id=someDialog]').style.display = 'block';

  //$('[data-id=someDialog]').show();
 // $('[data-id=someTooltip]').hide();
  });

}
