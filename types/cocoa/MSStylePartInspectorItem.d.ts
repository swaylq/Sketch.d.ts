/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorItem<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = unknown>(_sectionWithIdentifierWillCollapse: P0): R;
    updateDisplayedValues<R = void>(): R;
    delegate<R = MSStylePartInspectorItemDelegate>(): R;
    setDelegate<R = void, P0 = MSStylePartInspectorItemDelegate>(_v: P0): R;
    stylesController<R = NSArrayController>(): R;
    setStylesController<R = void, P0 = NSArrayController>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    layers<R = NSArray>(): R;
  }
  namespace MSStylePartInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSStylePartInspectorItem>(): R;
      new: <R = MSStylePartInspectorItem>() => R;
    }
  }
}

declare const MSStylePartInspectorItem: cocoa.MSStylePartInspectorItem.CLASS;
