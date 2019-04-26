/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooserItemResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithTargetElement_targetRange<R = unknown, P0 = unknown, P1 = unknown>(_initWithTargetElement: P0, _targetRange: P1): R;
    descriptionOverride<R = NSString>(): R;
    setDescriptionOverride<R = void, P0 = NSString>(_v: P0): R;
    targetRange<R = NSValue>(): R;
    setTargetRange<R = void, P0 = NSValue>(_v: P0): R;
    targetElement<R = NSObject>(): R;
    setTargetElement<R = void, P0 = NSObject>(_v: P0): R;
  }
  namespace NSAccessibilityCustomChooserItemResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomChooserItemResult>(): R;
      new: <R = NSAccessibilityCustomChooserItemResult>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooserItemResult: cocoa.NSAccessibilityCustomChooserItemResult.CLASS;
