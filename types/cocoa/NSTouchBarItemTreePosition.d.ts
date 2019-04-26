/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreePosition<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    parentNode<R = NSTouchBarItemTreeParentNode>(): R;
    indexInParent<R = number>(): R;
  }
  namespace NSTouchBarItemTreePosition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarItemTreePosition>(): R;
      new: <R = NSTouchBarItemTreePosition>() => R;
      positionInParentNode_atIndex<R = unknown, P0 = unknown, P1 = number>(_positionInParentNode: P0, _atIndex: P1): R;
    }
  }
}

declare const NSTouchBarItemTreePosition: cocoa.NSTouchBarItemTreePosition.CLASS;
