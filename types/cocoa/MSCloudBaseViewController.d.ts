/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudBaseViewController<T0 = void, T1 = void, T2 = void> extends MSToolbarPopoverContentViewController {
    cloudBaseViewControllerDidAppear<R = void>(): R;
    cloudViewController<R = MSCloudViewController>(): R;
    cloudAction<R = MSCloudAction>(): R;
  }
  namespace MSCloudBaseViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToolbarPopoverContentViewController {
      alloc<R = MSCloudBaseViewController>(): R;
      new: <R = MSCloudBaseViewController>() => R;
    }
  }
}

declare const MSCloudBaseViewController: cocoa.MSCloudBaseViewController.CLASS;
