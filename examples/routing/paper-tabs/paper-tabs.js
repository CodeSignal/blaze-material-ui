if (Meteor.isClient) {
  Template.paperTabs.events(
  {
    'click [event-hook=tabEvent]': function(e,instance){
      console.log('>>>\nclicked tab on: ', instance,'\n<<<')
    }
  }
);
}
