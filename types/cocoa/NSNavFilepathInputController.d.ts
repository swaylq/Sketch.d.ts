/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavFilepathInputController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    control_textShouldBeginEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldBeginEditing: P1): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    _handleTabKey<R = boolean, P0 = unknown>(__handleTabKey: P0): R;
    _doDelayedAutocomplete<R = boolean>(): R;
    _shouldExecuteDelayedAutocomplete<R = boolean>(): R;
    _doUserComplete<R = void>(): R;
    doFileCompletion_isAutoComplete_reverseCycle<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_doFileCompletion: P0, _isAutoComplete: P1, _reverseCycle: P2): R;
    _completePathWithPrefix_intoString_matchesIntoArray<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(__completePathWithPrefix: P0, _intoString: P1, _matchesIntoArray: P2): R;
    _simpleCompletePathWithPrefix_intoString_caseSensitive_matchesIntoArray_filterTypes<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown, P4 = unknown>(__simpleCompletePathWithPrefix: P0, _intoString: P1, _caseSensitive: P2, _matchesIntoArray: P3, _filterTypes: P4): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    _containsValidFilePath<R = boolean>(): R;
    _stopGotoWithCode<R = void, P0 = number>(__stopGotoWithCode: P0): R;
    runModalForSavePanel<R = number, P0 = unknown>(_runModalForSavePanel: P0): R;
    runModalForSavePanel_withFilepath<R = number, P0 = unknown, P1 = unknown>(_runModalForSavePanel: P0, _withFilepath: P1): R;
    sheetDidEnd_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_sheetDidEnd: P0, _returnCode: P1, _contextInfo: P2): R;
    beginSheetForSavePanel_withFilepath_delegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = void>(_beginSheetForSavePanel: P0, _withFilepath: P1, _delegate: P2, _didEndSelector: P3, _contextInfo: P4): R;
    isRunning<R = boolean>(): R;
    _prepareToRunForSavePanel_withFilepath<R = void, P0 = unknown, P1 = unknown>(__prepareToRunForSavePanel: P0, _withFilepath: P1): R;
    _setDefaultWindowKeyViewLoop<R = void>(): R;
    filepath<R = unknown>(): R;
    _currentInputFilepath<R = unknown>(): R;
    _setCurrentInputFilepath<R = void, P0 = unknown>(__setCurrentInputFilepath: P0): R;
    filepathLabel<R = unknown>(): R;
    setFilepathLabel<R = void, P0 = unknown>(_setFilepathLabel: P0): R;
    title<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    prompt<R = unknown>(): R;
    setPrompt<R = void, P0 = unknown>(_setPrompt: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    loadWindow<R = void>(): R;
    _loadUIIfNecessary<R = void>(): R;
    _updateUIToMatchCachedValues<R = void>(): R;
    _scheduleDelayedAutocomplete<R = void>(): R;
    _cancelDelayedAutocomplete<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    errorMessage<R = NSString>(): R;
    setErrorMessage<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSNavFilepathInputController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = NSNavFilepathInputController>(): R;
      new: <R = NSNavFilepathInputController>() => R;
    }
  }
}

declare const NSNavFilepathInputController: cocoa.NSNavFilepathInputController.CLASS;
