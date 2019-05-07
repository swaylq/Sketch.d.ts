/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementTitleViewController<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementViewController, MSThemeImageViewDelegateProtocol {
    overrideName<R = NSString>(): R;
    setOverrideName<R = void, P0 = NSString>(_v: P0): R;
    previewView<R = MSThemeImageView>(): R;
    setPreviewView<R = void, P0 = MSThemeImageView>(_v: P0): R;
    propertyTitle<R = MSOverrideManagementPropertyTitle>(): R;
    setPropertyTitle<R = void, P0 = MSOverrideManagementPropertyTitle>(_v: P0): R;
  }
  namespace MSOverrideManagementTitleViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementViewController, MSThemeImageViewDelegateProtocol {
      alloc<R = MSOverrideManagementTitleViewController>(): R;
      new: <R = MSOverrideManagementTitleViewController>() => R;
    }
  }
}

declare const MSOverrideManagementTitleViewController: cocoa.MSOverrideManagementTitleViewController.CLASS;
