/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementPropertyViewController<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementViewController {
    propertyName<R = NSString>(): R;
    setPropertyName<R = void, P0 = NSString>(_v: P0): R;
    propertyItem<R = MSOverrideManagementPropertyItem>(): R;
    setPropertyItem<R = void, P0 = MSOverrideManagementPropertyItem>(_v: P0): R;
    canOverride<R = boolean>(): R;
    setCanOverride<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSOverrideManagementPropertyViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementViewController {
      alloc<R = MSOverrideManagementPropertyViewController>(): R;
      new: <R = MSOverrideManagementPropertyViewController>() => R;
    }
  }
}

declare const MSOverrideManagementPropertyViewController: cocoa.MSOverrideManagementPropertyViewController.CLASS;
