/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationDFRItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    invalidateSizes<R = void>(): R;
    _updateMinMaxSizeIfNeeded<R = void>(): R;
    hash<R = number>(): R;
    isCenteredInTree<R = boolean, P0 = unknown>(_isCenteredInTree: P0): R;
    dealloc<R = void>(): R;
    requiresExactMinSize<R = boolean>(): R;
    setRequiresExactMinSize<R = void, P0 = boolean>(_v: P0): R;
    section<R = number>(): R;
    setSection<R = void, P0 = number>(_v: P0): R;
    compressionLayout<R = NSCompressionGroupLayout>(): R;
    setCompressionLayout<R = void, P0 = NSCompressionGroupLayout>(_v: P0): R;
    contentClippingSize<R = CGSize>(): R;
    preferredSize<R = CGSize>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    itemView<R = NSView>(): R;
    representedItem<R = NSTouchBarItem>(): R;
  }
  namespace _NSFunctionRowCustomizationDFRItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFunctionRowCustomizationDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationDFRItem>() => R;
    }
  }
}
