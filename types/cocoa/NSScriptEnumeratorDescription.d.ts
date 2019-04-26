/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptEnumeratorDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    value<R = unknown>(): R;
    matchesAppleEventCode<R = boolean, P0 = number>(_matchesAppleEventCode: P0): R;
    synonymDescriptions<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAppleEventCode_presentableDescription_name<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithAppleEventCode: P0, _presentableDescription: P1, _name: P2): R;
    initWithAppleEventCode_value_isHidden_presentableDescription_name_synonymDescriptions<R = unknown, P0 = number, P1 = unknown, P2 = boolean, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithAppleEventCode: P0, _value: P1, _isHidden: P2, _presentableDescription: P3, _name: P4, _synonymDescriptions: P5): R;
  }
  namespace NSScriptEnumeratorDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptEnumeratorDescription>(): R;
      new: <R = NSScriptEnumeratorDescription>() => R;
    }
  }
}

declare const NSScriptEnumeratorDescription: cocoa.NSScriptEnumeratorDescription.CLASS;
