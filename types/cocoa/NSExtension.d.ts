/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtension<T0 = void, T1 = void, T2 = void> extends NSObject, _NSExtensionContextHostingProtocol {
    _dropAssertion<R = void>(): R;
    extensionContexts<R = unknown>(): R;
    _kill<R = void, P0 = number>(__kill: P0): R;
    _safelyEndUsingWithProcessAssertion_continuation<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__safelyEndUsingWithProcessAssertion: P0, _continuation: P1): R;
    _safelyEndUsing<R = void, P0 = CDUnknownBlockType>(__safelyEndUsing: P0): R;
    newAssertionToBeginUsingPluginWithOptions_error<R = unknown, P0 = number, P1 = unknown>(_newAssertionToBeginUsingPluginWithOptions: P0, _error: P1): R;
    _safelyBeginUsingWithOptions_withAssertion_onSafeQueue<R = void, P0 = number, P1 = CDUnknownBlockType>(__safelyBeginUsingWithOptions: P0, _withAssertion_onSafeQueue: P1): R;
    _safelyBeginUsingSynchronously_options_withAssertion_onSafeQueue<R = void, P0 = boolean, P1 = number, P2 = CDUnknownBlockType>(__safelyBeginUsingSynchronously: P0, _options: P1, _withAssertion_onSafeQueue: P2): R;
    _safelyBeginUsing<R = void, P0 = CDUnknownBlockType>(__safelyBeginUsing: P0): R;
    _plugInProcessIdentifier<R = number>(): R;
    _wantsProcessPerRequest<R = boolean>(): R;
    _isSystemExtension<R = boolean>(): R;
    _isPhotoServiceAccessGranted<R = boolean>(): R;
    _itemProviderForPayload_extensionContext<R = unknown, P0 = unknown, P1 = unknown>(__itemProviderForPayload: P0, _extensionContext: P1): R;
    _extensionContextForUUID<R = unknown, P0 = unknown>(__extensionContextForUUID: P0): R;
    objectForInfoDictionaryKey<R = unknown, P0 = unknown>(_objectForInfoDictionaryKey: P0): R;
    _didCreateExtensionContext<R = void, P0 = unknown>(__didCreateExtensionContext: P0): R;
    pidForRequestIdentifier<R = number, P0 = unknown>(_pidForRequestIdentifier: P0): R;
    cancelExtensionRequestWithIdentifier<R = void, P0 = unknown>(_cancelExtensionRequestWithIdentifier: P0): R;
    beginExtensionRequestWithInputItems_error<R = unknown, P0 = unknown, P1 = unknown>(_beginExtensionRequestWithInputItems: P0, _error: P1): R;
    beginExtensionRequestWithInputItems_completion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginExtensionRequestWithInputItems: P0, _completion: P1): R;
    beginExtensionRequestWithInputItems_listenerEndpoint_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_beginExtensionRequestWithInputItems: P0, _listenerEndpoint: P1, _error: P2): R;
    beginExtensionRequestWithInputItems_listenerEndpoint_completion<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_beginExtensionRequestWithInputItems: P0, _listenerEndpoint: P1, _completion: P2): R;
    beginExtensionRequestWithOptions_inputItems_listenerEndpoint_error<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _listenerEndpoint: P2, _error: P3): R;
    beginExtensionRequestWithOptions_inputItems_listenerEndpoint_completion<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _listenerEndpoint: P2, _completion: P3): R;
    beginExtensionRequestWithOptions_inputItems_error<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _error: P2): R;
    beginExtensionRequestWithOptions_inputItems_completion<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _completion: P2): R;
    _reallyBeginExtensionRequestWithContext_extensionServiceConnection_listenerEndpoint_synchronously_completion<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = CDUnknownBlockType>(__reallyBeginExtensionRequestWithContext: P0, _extensionServiceConnection: P1, _listenerEndpoint: P2, _synchronously: P3, _completion: P4): R;
    _newExtensionContextAndGetConnection_assertion_inputItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__newExtensionContextAndGetConnection: P0, _assertion: P1, _inputItems: P2): R;
    _reallyBeginExtensionRequestWithInputItems_processAssertion_listenerEndpoint_completion<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(__reallyBeginExtensionRequestWithInputItems: P0, _processAssertion: P1, _listenerEndpoint: P2, _completion: P3): R;
    _bareExtensionServiceConnection<R = unknown>(): R;
    attemptOptOut<R = boolean, P0 = unknown>(_attemptOptOut: P0): R;
    attemptOptIn<R = boolean, P0 = unknown>(_attemptOptIn: P0): R;
    dealloc<R = void>(): R;
    _initWithPKPlugin<R = unknown, P0 = unknown>(__initWithPKPlugin: P0): R;
    _resetExtensionState<R = void>(): R;
    _didShowNewExtensionIndicator<R = void>(): R;
    _didShowExtensionManagementInterface<R = void>(): R;
    connectionUUID<R = NSUUID>(): R;
    setConnectionUUID<R = void, P0 = NSUUID>(_v: P0): R;
    _allowedErrorClasses<R = NSSet>(): R;
    set_allowedErrorClasses<R = void, P0 = NSSet>(_v: P0): R;
    _extensionContexts<R = NSMutableDictionary>(): R;
    set_extensionContexts<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _extensionServiceConnections<R = NSMutableDictionary>(): R;
    set_extensionServiceConnections<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _extensionExpirationIdentifiers<R = NSMutableDictionary>(): R;
    set_extensionExpirationIdentifiers<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _requestPostCompletionBlockWithItems<R = CDUnknownBlockType>(): R;
    set_requestPostCompletionBlockWithItems<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    _requestPostCompletionBlock<R = CDUnknownBlockType>(): R;
    set_requestPostCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    _localizedShortName<R = NSString>(): R;
    set_localizedShortName<R = void, P0 = NSString>(_v: P0): R;
    _localizedName<R = NSString>(): R;
    set_localizedName<R = void, P0 = NSString>(_v: P0): R;
    _extensionBundle<R = NSBundle>(): R;
    set_extensionBundle<R = void, P0 = NSBundle>(_v: P0): R;
    _plugIn<R = PKPlugIn>(): R;
    set_plugIn<R = void, P0 = PKPlugIn>(_v: P0): R;
    _stashedPlugInConnection<R = unknown>(): R;
    set_stashedPlugInConnection<R = void, P0 = unknown>(_v: P0): R;
    wantsDedicatedQueue<R = number>(): R;
    setWantsDedicatedQueue<R = void, P0 = number>(_v: P0): R;
    requestInterruptionBlock<R = CDUnknownBlockType>(): R;
    setRequestInterruptionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    requestCancellationBlock<R = CDUnknownBlockType>(): R;
    setRequestCancellationBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    requestCompletionBlock<R = CDUnknownBlockType>(): R;
    setRequestCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    extensionPointIdentifier<R = NSString>(): R;
    setExtensionPointIdentifier<R = void, P0 = NSString>(_v: P0): R;
    infoDictionary<R = NSDictionary>(): R;
    setInfoDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    attributes<R = NSDictionary>(): R;
    setAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    version<R = NSString>(): R;
    setVersion<R = void, P0 = NSString>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    icons<R = NSArray>(): R;
    setIcons<R = void, P0 = NSArray>(_v: P0): R;
    optedIn<R = boolean>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    _markedNew<R = boolean>(): R;
    _extensionState<R = NSDictionary>(): R;
    set_extensionState<R = void, P0 = NSDictionary>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  
}
  namespace NSExtension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSExtensionContextHostingProtocol {
      alloc<R = NSExtension>(): R;
      new: <R = NSExtension>() => R;
      endMatchingExtensions<R = void, P0 = unknown>(_endMatchingExtensions: P0): R;
      beginMatchingExtensionsWithAttributes_completion<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_beginMatchingExtensionsWithAttributes: P0, _completion: P1): R;
      extensionWithURL_completion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_extensionWithURL: P0, _completion: P1): R;
      extensionWithUUID_completion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_extensionWithUUID: P0, _completion: P1): R;
      extensionWithIdentifier_excludingDisabledExtensions_error<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_extensionWithIdentifier: P0, _excludingDisabledExtensions: P1, _error: P2): R;
      extensionWithIdentifier_error<R = unknown, P0 = unknown, P1 = unknown>(_extensionWithIdentifier: P0, _error: P1): R;
      extensionsWithMatchingAttributes_synchronously_completion<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_extensionsWithMatchingAttributes: P0, _synchronously: P1, _completion: P2): R;
      extensionsWithMatchingAttributes_completion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_extensionsWithMatchingAttributes: P0, _completion: P1): R;
      extensionsWithMatchingAttributes_error<R = unknown, P0 = unknown, P1 = unknown>(_extensionsWithMatchingAttributes: P0, _error: P1): R;
      _shouldLogExtensionDiscovery<R = boolean>(): R;
      initialize<R = void>(): R;
      predicateForActivationRule<R = unknown, P0 = unknown>(_predicateForActivationRule: P0): R;
      evaluateActivationRule_withExtensionItemsRepresentation<R = boolean, P0 = unknown, P1 = unknown>(_evaluateActivationRule: P0, _withExtensionItemsRepresentation: P1): R;
      initializeFiltering<R = void>(): R;
      // + NSExtension(NSExtension_AppKitAdditions): 
      numberOfNewItems<R = number>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSExtension: cocoa.NSExtension.CLASS;
