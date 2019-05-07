/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityAttributeAccessorInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    debuggingDictionary<R = unknown>(): R;
    setAttributeValueForObject_withValue<R = boolean, P0 = unknown, P1 = unknown>(_setAttributeValueForObject: P0, _withValue: P1): R;
    _setAttributeValueForObject_withValue<R = void, P0 = unknown, P1 = unknown>(__setAttributeValueForObject: P0, _withValue: P1): R;
    getAttributeValue_forObject<R = boolean, P0 = unknown, P1 = unknown>(_getAttributeValue: P0, _forObject: P1): R;
    _getAttributeValueForObject<R = unknown, P0 = unknown>(__getAttributeValueForObject: P0): R;
    getParameterizedAttributeValue_forObject_withParameter<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_getParameterizedAttributeValue: P0, _forObject: P1, _withParameter: P2): R;
    _getParameterizedAttributeForObject_withParameter<R = unknown, P0 = unknown, P1 = unknown>(__getParameterizedAttributeForObject: P0, _withParameter: P1): R;
    description<R = unknown>(): R;
    objectSupportsSetter<R = boolean, P0 = unknown>(_objectSupportsSetter: P0): R;
    objectSupportsGetter<R = boolean, P0 = unknown>(_objectSupportsGetter: P0): R;
    _isSelector_supportedByObject<R = boolean, P0 = string, P1 = unknown>(__isSelector: P0, _supportedByObject: P1): R;
    isBaseImplementationAcceptable<R = boolean>(): R;
    setIsBaseImplementationAcceptable<R = void, P0 = boolean>(_v: P0): R;
    parameterized<R = boolean>(): R;
    setParameterized<R = void, P0 = boolean>(_v: P0): R;
    setter<R = string>(): R;
    setSetter<R = void, P0 = string>(_v: P0): R;
    getter<R = string>(): R;
    setGetter<R = void, P0 = string>(_v: P0): R;
    paramType<R = number>(): R;
    setParamType<R = void, P0 = number>(_v: P0): R;
    returnType<R = number>(): R;
    setReturnType<R = void, P0 = number>(_v: P0): R;
    attribute<R = NSString>(): R;
    setAttribute<R = void, P0 = NSString>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
  }
  namespace NSAccessibilityAttributeAccessorInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityAttributeAccessorInfo>(): R;
      new: <R = NSAccessibilityAttributeAccessorInfo>() => R;
      _stringForAttributeType<R = unknown, P0 = number>(__stringForAttributeType: P0): R;
      stringArrayForEnumType<R = unknown, P0 = number>(_stringArrayForEnumType: P0): R;
    }
  }
}

declare const NSAccessibilityAttributeAccessorInfo: cocoa.NSAccessibilityAttributeAccessorInfo.CLASS;
