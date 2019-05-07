/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityWeakReferenceContainer<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    hash<R = number>(): R;
    strongReference<R = unknown>(): R;
    autoreleasedReference<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
  }
  namespace NSAccessibilityWeakReferenceContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSAccessibilityWeakReferenceContainer>(): R;
      new: <R = NSAccessibilityWeakReferenceContainer>() => R;
    }
  }
}

declare const NSAccessibilityWeakReferenceContainer: cocoa.NSAccessibilityWeakReferenceContainer.CLASS;
