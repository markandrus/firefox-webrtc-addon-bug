var { ToggleButton } = require('sdk/ui/button/toggle');
var { Panel } = require('sdk/panel');
var self = require('sdk/self');

var button = ToggleButton({
  id: 'test-webrtc-button',
  label: 'Test WebRTC',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onChange: handleChange
});

var panel = Panel({
  contentURL: 'https://apprtc.appspot.com',
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', { checked: false });
}
