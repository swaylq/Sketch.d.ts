/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextInputProtocol {
    getMarkedText_selectedRange<R = void, P0 = unknown, P1 = _NSRange>(_getMarkedText: P0, _selectedRange: P1): R;
    _trueName<R = unknown>(): R;
    description<R = unknown>(): R;
    _terminate<R = void>(): R;
    dealloc<R = void>(): R;
    image<R = unknown>(): R;
    language<R = unknown>(): R;
    wantsToHandleMouseEvents<R = boolean>(): R;
    wantsToDelayTextChangeNotifications<R = boolean>(): R;
    bundleObject<R = unknown>(): R;
    server<R = unknown>(): R;
    markedTextSelectionChanged_client<R = void, P0 = _NSRange, P1 = unknown>(_markedTextSelectionChanged: P0, _client: P1): R;
    markedTextAbandoned<R = void, P0 = unknown>(_markedTextAbandoned: P0): R;
    doCommandBySelector_client<R = void, P0 = string, P1 = unknown>(_doCommandBySelector: P0, _client: P1): R;
    insertText_client<R = void, P0 = unknown, P1 = unknown>(_insertText: P0, _client: P1): R;
    handleMouseEvent<R = boolean, P0 = unknown>(_handleMouseEvent: P0): R;
    isEnabled<R = boolean>(): R;
    wantsToInterpretAllKeystrokes<R = boolean>(): R;
    localizedInputManagerName<R = unknown>(): R;
    activateInputManagerFromMenu<R = void, P0 = unknown>(_activateInputManagerFromMenu: P0): R;
    _setCurrentClient<R = void, P0 = unknown>(__setCurrentClient: P0): R;
    _currentClient<R = unknown>(): R;
    _senderIsInvalid<R = void, P0 = unknown>(__senderIsInvalid: P0): R;
    _keyBindingManager<R = unknown>(): R;
    _loadKeyboardBindings<R = void>(): R;
    _loadBundle<R = void>(): R;
    _validateBundleSecurity<R = boolean>(): R;
    _activateServer<R = void>(): R;
    initWithName_host<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _host: P1): R;
    worksWhenModal<R = boolean>(): R;
    _isActivated<R = boolean>(): R;
    _setActivationState<R = boolean, P0 = boolean>(__setActivationState: P0): R;
  }
  namespace NSInputManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextInputProtocol {
      alloc<R = NSInputManager>(): R;
      new: <R = NSInputManager>() => R;
      installInputManagerMenu<R = void, P0 = unknown>(_installInputManagerMenu: P0): R;
      cycleToNextInputServerInLanguage<R = void, P0 = unknown>(_cycleToNextInputServerInLanguage: P0): R;
      cycleToNextInputLanguage<R = void, P0 = unknown>(_cycleToNextInputLanguage: P0): R;
      currentInputManager<R = unknown>(): R;
      setCurrentInputManager<R = void, P0 = unknown>(_setCurrentInputManager: P0): R;
      initialize<R = void>(): R;
      _nextInputManagerInScript<R = unknown, P0 = unknown>(__nextInputManagerInScript: P0): R;
      _inputManagerInNextScript<R = unknown, P0 = unknown>(__inputManagerInNextScript: P0): R;
      _switchToPlatformInput<R = void, P0 = unknown>(__switchToPlatformInput: P0): R;
    }
  }
}

declare const NSInputManager: cocoa.NSInputManager.CLASS;
