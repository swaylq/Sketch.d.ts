/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlert<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarProviderProtocol {
    _setSuppressionButton<R = void, P0 = unknown>(__setSuppressionButton: P0): R;
    _suppressionButton<R = unknown>(): R;
    _setDidDismissSelector<R = void, P0 = string>(__setDidDismissSelector: P0): R;
    _setDidEndSelector<R = void, P0 = string>(__setDidEndSelector: P0): R;
    _setModalDelegate<R = void, P0 = unknown>(__setModalDelegate: P0): R;
    _helpButton<R = unknown>(): R;
    _imageView<R = unknown>(): R;
    _informationField<R = unknown>(): R;
    _messageField<R = unknown>(): R;
    _third<R = unknown>(): R;
    _second<R = unknown>(): R;
    _first<R = unknown>(): R;
    _thirdButtonExists<R = boolean>(): R;
    _secondButtonExists<R = boolean>(): R;
    _firstButtonExists<R = boolean>(): R;
    buildAlertStyle_title_formattedMessage_first_second_third_oldStyle<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = boolean>(_buildAlertStyle: P0, _title: P1, _formattedMessage: P2, _first: P3, _second: P4, _third: P5, _oldStyle: P6): R;
    _constraintsForExplicitFrameSize_forView<R = unknown, P0 = CGSize, P1 = unknown>(__constraintsForExplicitFrameSize: P0, _forView: P1): R;
    _constraintForExplicitFrameHeight_forView_strength<R = unknown, P0 = CGSize, P1 = unknown, P2 = number>(__constraintForExplicitFrameHeight: P0, _forView: P1, _strength: P2): R;
    _constraintsForExplicitFrameSize_forView_strength<R = unknown, P0 = CGSize, P1 = unknown, P2 = number>(__constraintsForExplicitFrameSize: P0, _forView: P1, _strength: P2): R;
    startSpeaking<R = void, P0 = unknown>(_startSpeaking: P0): R;
    startTimerForSpeaking<R = void>(): R;
    stopTimerForSpeaking<R = void>(): R;
    windowDidBecomeKey<R = void, P0 = unknown>(_windowDidBecomeKey: P0): R;
    setTitle_andMessage<R = unknown, P0 = unknown, P1 = unknown>(_setTitle: P0, _andMessage: P1): R;
    messageWidthForMessage<R = number, P0 = unknown>(_messageWidthForMessage: P0): R;
    placeButtons_firstWidth_secondWidth_thirdWidth<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_placeButtons: P0, _firstWidth: P1, _secondWidth: P2, _thirdWidth: P3): R;
    _interceptKeyEquivalent<R = boolean, P0 = unknown>(__interceptKeyEquivalent: P0): R;
    _setDontSaveButton<R = void, P0 = unknown>(__setDontSaveButton: P0): R;
    _dontSaveButton<R = unknown>(): R;
    buttonPressed<R = void, P0 = unknown>(_buttonPressed: P0): R;
    _screenForMaxHeight<R = unknown>(): R;
    beginSheetModalForWindow_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginSheetModalForWindow: P0, _completionHandler: P1): R;
    runModal<R = number>(): R;
    prepare<R = void>(): R;
    layout<R = void>(): R;
    _dontWarnAgain<R = boolean>(): R;
    _setDontWarnMessage<R = void, P0 = unknown>(__setDontWarnMessage: P0): R;
    _showsDontWarnAgain<R = boolean>(): R;
    addButtonWithTitle<R = unknown, P0 = unknown>(_addButtonWithTitle: P0): R;
    dealloc<R = void>(): R;
    _clearTargetAndReleaseButton<R = void, P0 = unknown>(__clearTargetAndReleaseButton: P0): R;
    _removeTouchBar<R = void>(): R;
    windowClosing<R = void, P0 = unknown>(_windowClosing: P0): R;
    _alertTouchBar<R = unknown>(): R;
    didEndSheet_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_didEndSheet: P0, _returnCode: P1, _contextInfo: P2): R;
    didEndAlert_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_didEndAlert: P0, _returnCode: P1, _contextInfo: P2): R;
    beginSheetModalForWindow_modalDelegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = void>(_beginSheetModalForWindow: P0, _modalDelegate: P1, _didEndSelector: P2, _contextInfo: P3): R;
    buildAlertStyle_title_message_first_second_third_oldStyle_args<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = boolean, P7 = __va_list_tag>(_buildAlertStyle: P0, _title: P1, _message: P2, _first: P3, _second: P4, _third: P5, _oldStyle: P6, _args: P7): R;
    _panel<R = NSWindow>(): R;
    set_panel<R = void, P0 = NSWindow>(_v: P0): R;
    accessoryView<R = NSView>(): R;
    setAccessoryView<R = void, P0 = NSView>(_v: P0): R;
    suppressionButton<R = NSButton>(): R;
    showsSuppressionButton<R = boolean>(): R;
    setShowsSuppressionButton<R = void, P0 = boolean>(_v: P0): R;
    window<R = NSWindow>(): R;
    delegate<R = NSAlertDelegate>(): R;
    setDelegate<R = void, P0 = NSAlertDelegate>(_v: P0): R;
    alertStyle<R = number>(): R;
    setAlertStyle<R = void, P0 = number>(_v: P0): R;
    helpAnchor<R = NSString>(): R;
    setHelpAnchor<R = void, P0 = NSString>(_v: P0): R;
    showsHelp<R = boolean>(): R;
    setShowsHelp<R = void, P0 = boolean>(_v: P0): R;
    buttons<R = NSArray>(): R;
    icon<R = NSImage>(): R;
    setIcon<R = void, P0 = NSImage>(_v: P0): R;
    informativeText<R = NSString>(): R;
    setInformativeText<R = void, P0 = NSString>(_v: P0): R;
    messageText<R = NSString>(): R;
    setMessageText<R = void, P0 = NSString>(_v: P0): R;
    attributedInformativeText<R = NSAttributedString>(): R;
    setAttributedInformativeText<R = void, P0 = NSAttributedString>(_v: P0): R;
    attributedMessageText<R = NSAttributedString>(): R;
    setAttributedMessageText<R = void, P0 = NSAttributedString>(_v: P0): R;
    touchBar<R = NSTouchBar>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  
}
  namespace NSAlert {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarProviderProtocol {
      alloc<R = NSAlert>(): R;
      new: <R = NSAlert>() => R;
      _stopTimerForSpeakingForAlert<R = void, P0 = unknown>(__stopTimerForSpeakingForAlert: P0): R;
      _startTimerForSpeakingWithTitle_andText_forAlert<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__startTimerForSpeakingWithTitle: P0, _andText: P1, _forAlert: P2): R;
      stopAllTimersForSpeaking<R = void>(): R;
      _dontShowMessageAgainTitle<R = unknown>(): R;
      _dontSaveButtonTitle<R = unknown>(): R;
      alertWithError<R = unknown, P0 = unknown>(_alertWithError: P0): R;
      alertWithMessageText_defaultButton_alternateButton_otherButton_informativeTextWithFormat<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_alertWithMessageText: P0, _defaultButton: P1, _alternateButton: P2, _otherButton: P3, _informativeTextWithFormat: P4): R;
      // + NSAlert(Chocolat): 
      runSheetWithMessage_info<R = void, P0 = unknown, P1 = unknown>(_runSheetWithMessage: P0, _info: P1): R;
      runModalSessionWithMessage_info_buttons<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_runModalSessionWithMessage: P0, _info: P1, _buttons: P2): R;
      runModalWithMessage_info_buttons<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_runModalWithMessage: P0, _info: P1, _buttons: P2): R;
      runModalWithMessage_info<R = number, P0 = unknown, P1 = unknown>(_runModalWithMessage: P0, _info: P1): R;
      alertWithMessage_info_buttons<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_alertWithMessage: P0, _info: P1, _buttons: P2): R;
    }
  }
}

declare const NSAlert: cocoa.NSAlert.CLASS;
