/** @jsx h */
const { h, Component } = require('preact');
const BaseComponent = require('../../components/BaseComponent/BaseComponent');

class Music extends BaseComponent {
  constructor(props) {
    super(props);
  }

  toggle (state) {
    if (state === false) {
      this.audioEl.play();
    } else {
      this.audioEl.pause();
    }
  }

  componentWillUpdate(props) {
    this.toggle(props.isMuted);
  }

  render () {
    return (
      <audio
        ref={c => { this.audioEl = c; }}
        loop
        preload='auto'
        volume='1'
      >
        <source src='https://dl.sndup.net/r9nc/aao-naa.mp3' type='audio/mpeg'/>
        <source src='https://dl.sndup.net/nc2k/aao-naa.ogg' type='audio/ogg'/>
      </audio>
    )
  }
}

module.exports = Music;