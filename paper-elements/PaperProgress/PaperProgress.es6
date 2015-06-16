class PaperProgress extends BlazeComponent {

  getProgress() {
    var value = this.data().value;
    var max = this.data().max
    return value/max;
  }

}

PaperProgress.register('PaperProgress');