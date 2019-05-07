/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProxy<T0 = void, T1 = void, T2 = void> {
    isNSValue__<R = boolean>(): R;
    isNSTimeZone__<R = boolean>(): R;
    isNSString__<R = boolean>(): R;
    isNSSet__<R = boolean>(): R;
    isNSOrderedSet__<R = boolean>(): R;
    isNSNumber__<R = boolean>(): R;
    isNSDictionary__<R = boolean>(): R;
    isNSDate__<R = boolean>(): R;
    isNSData__<R = boolean>(): R;
    isNSCFConstantString__<R = boolean>(): R;
    isNSArray__<R = boolean>(): R;
    isNSObject__<R = boolean>(): R;
    respondsToSelector<R = boolean, P0 = string>(_respondsToSelector: P0): R;
    conformsToProtocol<R = boolean, P0 = unknown>(_conformsToProtocol: P0): R;
    isMemberOfClass<R = boolean, P0 = unknown>(_isMemberOfClass: P0): R;
    isKindOfClass<R = boolean, P0 = unknown>(_isKindOfClass: P0): R;
    isProxy<R = boolean>(): R;
    isFault<R = boolean>(): R;
    performSelector_withObject_withObject<R = unknown, P0 = string, P1 = unknown, P2 = unknown>(_performSelector: P0, _withObject: P1, _withObject1: P2): R;
    performSelector_withObject<R = unknown, P0 = string, P1 = unknown>(_performSelector: P0, _withObject: P1): R;
    performSelector<R = unknown, P0 = string>(_performSelector: P0): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    _copyDescription<R = unknown>(): R;
    _allowsDirectEncoding<R = boolean>(): R;
    zone<R = _NSZone>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
    autorelease<R = unknown>(): R;
    release<R = void>(): R;
    retainCount<R = number>(): R;
    retain<R = unknown>(): R;
    doesNotRecognizeSelector<R = void, P0 = string>(_doesNotRecognizeSelector: P0): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    forwardingTargetForSelector<R = unknown, P0 = string>(_forwardingTargetForSelector: P0): R;
    self<R = unknown>(): R;
    class<R = unknown>(): R;
    _conformsToProtocolNamed<R = boolean, P0 = string>(__conformsToProtocolNamed: P0): R;
    methodDescriptionForSelector<R = objc_method_description, P0 = string>(_methodDescriptionForSelector: P0): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      description<R = unknown>(): R;
      methodForSelector<R = CDUnknownFunctionPointerType, P0 = string>(_methodForSelector: P0): R;
      instanceMethodForSelector<R = CDUnknownFunctionPointerType, P0 = string>(_instanceMethodForSelector: P0): R;
      instancesRespondToSelector<R = boolean, P0 = string>(_instancesRespondToSelector: P0): R;
      isSubclassOfClass<R = boolean, P0 = unknown>(_isSubclassOfClass: P0): R;
      hash<R = number>(): R;
      debugDescription<R = unknown>(): R;
      init<R = unknown>(): R;
      instanceMethodSignatureForSelector<R = unknown, P0 = string>(_instanceMethodSignatureForSelector: P0): R;
      isAncestorOfObject<R = boolean, P0 = unknown>(_isAncestorOfObject: P0): R;
      mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
      mutableCopy<R = unknown>(): R;
      copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
      copy<R = unknown>(): R;
      superclass<R = unknown>(): R;
      alloc<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSProxy: cocoa.NSProxy.CLASS;
