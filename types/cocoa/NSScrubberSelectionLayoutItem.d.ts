/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionLayoutItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberSelectionLayoutProtocol {
    floatingSelection<R = boolean>(): R;
    setFloatingSelection<R = void, P0 = boolean>(_v: P0): R;
    itemAlignment<R = number>(): R;
    setItemAlignment<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScrubberSelectionLayoutItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberSelectionLayoutProtocol {
      alloc<R = NSScrubberSelectionLayoutItem>(): R;
      new: <R = NSScrubberSelectionLayoutItem>() => R;
    }
  }
}

declare const NSScrubberSelectionLayoutItem: cocoa.NSScrubberSelectionLayoutItem.CLASS;
