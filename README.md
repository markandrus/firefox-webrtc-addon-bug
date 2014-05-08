firefox-webrtc-addon-bug
========================

Demonstrates a Firefox bug using WebRTC in an AddOn

Instructions
------------

1. Clone this repository (`git clone https://github.com/markandrus/firefox-webrtc-addon-bug.git`).
2. Run `make` and `./run.sh`.
3. Firefox will show a Firefox button in the toolbar. Clicking this loads [apprtcdemo.appspot.com](http://apprtcdemo.appspot.com) in a panel.

Depending on how early or late you click the button to show the panel, the following error appears in the terminal:

```
************************************************************
* Call to xpconnect wrapped JSObject produced this error:  *
[Exception... "[JavaScript Error: "stringBundle is undefined" {file: "resource://app/modules/webrtcUI.jsm" line: 128}]'[JavaScript Error: "stringBundle is undefined" {file: "resource://app/modules/webrtcUI.jsm" line: 128}]' when calling method: [nsIGetUserMediaDevicesSuccessCallback::onSuccess]"  nsresult: "0x80570021 (NS_ERROR_XPC_JAVASCRIPT_ERROR_WITH_DETAILS)"  location: "native frame :: <unknown filename> :: <TOP_LEVEL> :: line 0"  data: yes]
************************************************************
```
