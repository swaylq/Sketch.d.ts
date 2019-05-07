/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
    setDisplaysLabel<R = void, P0 = boolean>(_setDisplaysLabel: P0): R;
    displaysLabel<R = boolean>(): R;
    buildMenu<R = void>(): R;
    menuObjectProvider<R = MSForeignObjectProvider>(): R;
    overrideControl<R = MSStyleOverridePopupButton>(): R;
    setOverrideControl<R = void, P0 = MSStyleOverridePopupButton>(_v: P0): R;
    labelConstraint<R = NSLayoutConstraint>(): R;
    setLabelConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    labelView<R = NSControl>(): R;
    setLabelView<R = void, P0 = NSControl>(_v: P0): R;
  }
  namespace MSStyleOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
      alloc<R = MSStyleOverrideInspectorItem>(): R;
      new: <R = MSStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSStyleOverrideInspectorItem: cocoa.MSStyleOverrideInspectorItem.CLASS;
