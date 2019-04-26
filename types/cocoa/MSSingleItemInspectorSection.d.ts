/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSingleItemInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
    item<R = MSInspectorItem>(): R;
    setItem<R = void, P0 = MSInspectorItem>(_v: P0): R;
  }
  namespace MSSingleItemInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
      alloc<R = MSSingleItemInspectorSection>(): R;
      new: <R = MSSingleItemInspectorSection>() => R;
      canHandleLayer<R = boolean, P0 = unknown>(_canHandleLayer: P0): R;
      itemClass<R = unknown>(): R;
    }
  }
}

declare const MSSingleItemInspectorSection: cocoa.MSSingleItemInspectorSection.CLASS;
