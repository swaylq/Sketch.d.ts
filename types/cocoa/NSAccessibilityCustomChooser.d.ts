/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooser<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithName_itemSearchBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithName: P0, _itemSearchBlock: P1): R;
    itemSearchBlock<R = CDUnknownBlockType>(): R;
    setItemSearchBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSAccessibilityCustomChooser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomChooser>(): R;
      new: <R = NSAccessibilityCustomChooser>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooser: cocoa.NSAccessibilityCustomChooser.CLASS;
