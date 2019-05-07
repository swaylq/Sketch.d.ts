/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageTextStyleView<T0 = void, T1 = void, T2 = void> extends MSManageSharedObjectBaseViewController {
    sharedObjectsSortedByName<R = unknown>(): R;
  }
  namespace MSManageTextStyleView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSManageSharedObjectBaseViewController {
      alloc<R = MSManageTextStyleView>(): R;
      new: <R = MSManageTextStyleView>() => R;
    }
  }
}

declare const MSManageTextStyleView: cocoa.MSManageTextStyleView.CLASS;
