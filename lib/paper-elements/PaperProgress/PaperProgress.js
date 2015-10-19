class PaperProgress extends BlazeComponent {
  
  /**
   * get the progress as a float
   * can be used when e.g. scaling the progressbar `scale({{getProgress}})
   * @return {Float}  Returns a value from 0 to 1
   */
  getProgress() {
    var value = this.data().value;
    var max = this.data().max
    return value/max;
  }
}

PaperProgress.register('PaperProgress');