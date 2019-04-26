/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    updateIndentForItem<R = void, P0 = unknown>(_updateIndentForItem: P0): R;
    indentConstraint<R = NSLayoutConstraint>(): R;
    setIndentConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
  }
  namespace MSOverrideManagementViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSOverrideManagementViewController>(): R;
      new: <R = MSOverrideManagementViewController>() => R;
      rowHeight<R = number>(): R;
    }
  }
}

declare const MSOverrideManagementViewController: cocoa.MSOverrideManagementViewController.CLASS;
