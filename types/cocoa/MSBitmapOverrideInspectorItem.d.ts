/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem, MSDataMenuProviderDelegateProtocol {
    dataOverrides<R = unknown>(): R;
    overrideImage<R = unknown>(): R;
    NSImage<R = unknown>(): R;
    choosePatternImage<R = void, P0 = unknown>(_choosePatternImage: P0): R;
    imageView<R = MSImageOverrideView>(): R;
    setImageView<R = void, P0 = MSImageOverrideView>(_v: P0): R;
    controlRect<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBitmapOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem, MSDataMenuProviderDelegateProtocol {
      alloc<R = MSBitmapOverrideInspectorItem>(): R;
      new: <R = MSBitmapOverrideInspectorItem>() => R;
    }
  }
}

declare const MSBitmapOverrideInspectorItem: cocoa.MSBitmapOverrideInspectorItem.CLASS;
