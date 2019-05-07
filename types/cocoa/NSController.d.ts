/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSController<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSEditorProtocol, NSEditorRegistrationProtocol {
    _refreshesAllModelKeys<R = boolean>(): R;
    _setRefreshesAllModelKeys<R = void, P0 = boolean>(__setRefreshesAllModelKeys: P0): R;
    _modelKeysTriggeringChangeNotificationsForDependentKey<R = unknown, P0 = unknown>(__modelKeysTriggeringChangeNotificationsForDependentKey: P0): R;
    _setModelKeys_triggerChangeNotificationsForDependentKey<R = void, P0 = unknown, P1 = unknown>(__setModelKeys: P0, _triggerChangeNotificationsForDependentKey: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _shouldSuppressObserverNotificationFromObject_keyPath<R = boolean, P0 = unknown, P1 = unknown>(__shouldSuppressObserverNotificationFromObject: P0, _keyPath: P1): R;
    _shouldSendObserverNotificationForModelOrProxyKey_keyPath_ofObject<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__shouldSendObserverNotificationForModelOrProxyKey: P0, _keyPath: P1, _ofObject: P2): R;
    _modelAndProxyKeysObserved<R = unknown>(): R;
    _observesModelObjects<R = boolean>(): R;
    _validateSingleValue_forKeyPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__validateSingleValue: P0, _forKeyPath: P1, _error: P2): R;
    _validateSingleValue_forKey_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__validateSingleValue: P0, _forKey: P1, _error: P2): R;
    _invokeSingleSelector_withArguments_onKeyPath<R = void, P0 = string, P1 = unknown, P2 = unknown>(__invokeSingleSelector: P0, _withArguments: P1, _onKeyPath: P2): R;
    _setSingleValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(__setSingleValue: P0, _forKeyPath: P1): R;
    _setSingleValue_forKey<R = void, P0 = unknown, P1 = unknown>(__setSingleValue: P0, _forKey: P1): R;
    _singleMutableArrayValueForKeyPath<R = unknown, P0 = unknown>(__singleMutableArrayValueForKeyPath: P0): R;
    _singleMutableArrayValueForKey<R = unknown, P0 = unknown>(__singleMutableArrayValueForKey: P0): R;
    _singleValueForKeyPath_operationType<R = unknown, P0 = unknown, P1 = number>(__singleValueForKeyPath: P0, _operationType: P1): R;
    _singleValueForKeyPath<R = unknown, P0 = unknown>(__singleValueForKeyPath: P0): R;
    _singleValueForKey<R = unknown, P0 = unknown>(__singleValueForKey: P0): R;
    _controllerEditor_didCommit_contextInfo<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__controllerEditor: P0, _didCommit: P1, _contextInfo: P2): R;
    alwaysPresentsApplicationModalAlerts<R = boolean>(): R;
    setAlwaysPresentsApplicationModalAlerts<R = void, P0 = boolean>(_setAlwaysPresentsApplicationModalAlerts: P0): R;
    _finishEditingState<R = void>(): R;
    _notifyEditorStateChanged<R = void, P0 = boolean>(__notifyEditorStateChanged: P0): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    willChangeValueForKey<R = void, P0 = unknown>(_willChangeValueForKey: P0): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    _notifyObserversForKeyPath_change<R = void, P0 = unknown, P1 = unknown>(__notifyObserversForKeyPath: P0, _change: P1): R;
    _shouldAddObservationForwardersForKey<R = boolean, P0 = unknown>(__shouldAddObservationForwardersForKey: P0): R;
    _specialPurposeType<R = number>(): R;
    _setSpecialPurposeType<R = void, P0 = number>(__setSpecialPurposeType: P0): R;
    _removeDeclaredKey<R = void, P0 = unknown>(__removeDeclaredKey: P0): R;
    _addDeclaredKey<R = void, P0 = unknown>(__addDeclaredKey: P0): R;
    _declaredKeys<R = unknown>(): R;
    _setDeclaredKeys<R = void, P0 = unknown>(__setDeclaredKeys: P0): R;
    _controllerKeys<R = unknown>(): R;
    _bindingAdaptor<R = unknown>(): R;
    _setBindingAdaptor<R = void, P0 = unknown>(__setBindingAdaptor: P0): R;
    dealloc<R = void>(): R;
    _dealloc<R = void>(): R;
    _init<R = void>(): R;
    editing<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSEditorProtocol, NSEditorRegistrationProtocol {
      alloc<R = NSController>(): R;
      new: <R = NSController>() => R;
      _modelAndProxyKeys<R = unknown>(): R;
      _keyValueBindingAccessPoints<R = unknown>(): R;
      _modelObservingTrackerClass<R = unknown>(): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      _nonAutomaticObservingKeys<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSController: cocoa.NSController.CLASS;
