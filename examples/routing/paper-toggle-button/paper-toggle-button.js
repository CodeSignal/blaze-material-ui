if (Meteor.isClient) {


  Template.paperToggleButton.onCreated(function(){
    this.checked = new ReactiveVar(true);
    this.classes = new ReactiveVar('testToggle paper-toggle-button-1');



    setTimeout(function(){
      var checked = $('.testToggle')[0].getAttribute('checked');
      console.log(checked);
      this.checked.set(!checked);
    }.bind(this),10000);

     setInterval(function(){
       var classes = this.classes.get();
       classes = classes === 'testToggle paper-toggle-button-1' ? 'testToggle paper-toggle-button-2' : 'testToggle paper-toggle-button-1'
       this.classes.set(classes);
       console.log(this.checked.get())

    }.bind(this),5000);
  });

  Template.paperToggleButton.helpers({
    checkedState: function(){
      var instance = Template.instance();
      return instance.checked.get();
    },
    getClasses: function(){
      var instance = Template.instance();
      return instance.classes.get();
    }
  });
}
