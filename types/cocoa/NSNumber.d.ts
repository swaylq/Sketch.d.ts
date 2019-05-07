/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNumber<T0 = void, T1 = void, T2 = void> extends NSValue {
    // + NSNumber(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSNumber(OverrideInspector):
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    placeholderIdentifier<R = NSNumber>(): R;
  }
  namespace NSNumber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValue {
      alloc<R = NSNumber>(): R;
      new: <R = NSNumber>() => R;
      // + NSNumber(OverrideInspector): 
      subtleSeparator<R = unknown>(): R;
      padding2<R = unknown>(): R;
      padding1<R = unknown>(): R;
    }
  }
}

declare const NSNumber: cocoa.NSNumber.CLASS;
