if (Meteor.isClient){

  Template.main.events({
    'click [event-hook=paperButtonDemo]': function(e, instance){
      Router.go('/paper-elements/paper-button');
    },
     'click [event-hook=paperCheckboxDemo]': function(e, instance){
      Router.go('/paper-elements/paper-checkbox');
     },
     'click [event-hook=paperDialogDemo]': function(e, instance){
      Router.go('/paper-elements/paper-dialog');
     },
     'click [event-hook=paperFabDemo]': function(e, instance){
      Router.go('/paper-elements/paper-fab');
     },
     'click [event-hook=paperInputDemo]': function(e, instance){
      Router.go('/paper-elements/paper-input');
     },
     'click [event-hook=paperMenuDemo]': function(e, instance){
      Router.go('/paper-elements/paper-menu');
     },
     'click [event-hook=paperRadioButtonDemo]': function(e, instance){
      Router.go('/paper-elements/paper-radio-button');
     },
     'click [event-hook=paperTabsDemo]': function(e, instance){
      Router.go('/paper-elements/paper-tabs');
     },
     'click [event-hook=paperToggleButtonDemo]': function(e, instance){
      Router.go('/paper-elements/paper-toggle-button');
     },
     'click [event-hook=paperToolbarDemo]': function(e, instance){
      Router.go('/paper-elements/paper-toolbar');
     }
  });

}
