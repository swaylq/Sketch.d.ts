/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityActionEntry<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithName_description_handler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithName: P0, _description: P1, _handler: P2): R;
    accessibilityDescription<R = NSString>(): R;
    handler<R = CDUnknownBlockType>(): R;
    action<R = NSString>(): R;
  }
  namespace NSAccessibilityActionEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityActionEntry>(): R;
      new: <R = NSAccessibilityActionEntry>() => R;
      entryWithName_description_handler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_entryWithName: P0, _description: P1, _handler: P2): R;
    }
  }
}

declare const NSAccessibilityActionEntry: cocoa.NSAccessibilityActionEntry.CLASS;
