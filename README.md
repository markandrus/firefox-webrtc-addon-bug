1. Clone this repository.
2. Run `make` to install the Firefox Add-on SDK.
3. Run `./run.sh` to launch the add-on.
4. Firefox shows a button in the toolbar with the Firefox logo. Clicking this
   loads [apprtc.appspot.com](http://apprtc.appspot.com) in a panel.

Depending on how early or late you click the button to show the panel, the
following error appears in the terminal:

```
************************************************************
* Call to xpconnect wrapped JSObject produced this error:  *
[Exception... "[JavaScript Error: "stringBundle is undefined" {file:
"resource://app/modules/webrtcUI.jsm" line: 128}]'[JavaScript Error:
"stringBundle is undefined" {file: "resource://app/modules/webrtcUI.jsm" line:
128}]' when calling method: [nsIGetUserMediaDevicesSuccessCallback::onSuccess]"
 nsresult: "0x80570021 (NS_ERROR_XPC_JAVASCRIPT_ERROR_WITH_DETAILS)"  location:
"native frame :: <unknown filename> :: <TOP_LEVEL> :: line 0"  data: yes]
************************************************************
```

This is reproducible in Firefox 29.
