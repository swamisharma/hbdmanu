/** @jsx h */
const { h, Component } = require('preact');
const BaseComponent = require('../../components/BaseComponent/BaseComponent');
const classnames = require('classnames');
const animate = require('@jam3/gsap-promise');
const Button = require('../../components/Button/Button');
const Controls = require('../../components/Controls/Controls');
const ReactGA = require('react-ga');

class Landing extends BaseComponent {
  constructor (props) {
    super(props);
  }

  animateIn () {
    this.muteButton.animateIn({ delay: 4.2 });
    this.shuffleButton.animateIn({ delay: 4.3 });
  }

  handleShuffle () {
    this.props.updateMessage();
    ReactGA.event({
      category: 'button',
      action: 'click',
      label: 'randomize'
    });
  }

  handleShare () {
    this.props.updateContent('Share');
    ReactGA.event({
      category: 'button',
      action: 'click',
      label: 'spread the love'
    });
  }

  render () {
    const classes = classnames({
      'Landing': true
    });
    return (
      <div className={classes} ref={ c => { this.container = c; } }>
        <Controls>
          <div className="ControlsGroup1">
            <Button
              onClick={() => this.props.toggleMusic()}
              ref={ c => { this.muteButton = c; } }
              icon='sound'
              extraClasses={{muted: this.props.isMuted}}
            />
          </div>
          <div className="ControlsGroup2">
            <Button
              onClick={() => this.handleShuffle()}
              ref={c => { this.shuffleButton = c;}}
              icon='random'
              extraClasses={{primary: true}}
            />
          </div>
        </Controls>
      </div>
    );
  }
}

Landing.defaultProps = {
  onMaterialSwap: () => {}
};

module.exports = Landing;
