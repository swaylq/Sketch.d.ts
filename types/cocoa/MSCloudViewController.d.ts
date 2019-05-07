/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    refreshLicenseIfIneligible<R = void>(): R;
    resetContentViewController<R = void, P0 = unknown>(_resetContentViewController: P0): R;
    licenseDidChangeNotification<R = void, P0 = unknown>(_licenseDidChangeNotification: P0): R;
    shareDidChangeNotification<R = void, P0 = unknown>(_shareDidChangeNotification: P0): R;
    shareUploadDidChangeNotification<R = void, P0 = unknown>(_shareUploadDidChangeNotification: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    environmentDidChangeNotification<R = void, P0 = unknown>(_environmentDidChangeNotification: P0): R;
    updateFrame<R = void>(): R;
    animateAlpha_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_animateAlpha: P0, _completionHandler: P1): R;
    defaultContentViewController<R = unknown>(): R;
    addContentViewController<R = void, P0 = unknown>(_addContentViewController: P0): R;
    removeContentViewController<R = void, P0 = unknown>(_removeContentViewController: P0): R;
    setContentViewController_animated<R = void, P0 = unknown, P1 = boolean>(_setContentViewController: P0, _animated: P1): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
    action<R = MSCloudAction>(): R;
    contentViewController<R = MSCloudBaseViewController>(): R;
    setContentViewController<R = void, P0 = MSCloudBaseViewController>(_v: P0): R;
  }
  namespace MSCloudViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSCloudViewController>(): R;
      new: <R = MSCloudViewController>() => R;
    }
  }
}

declare const MSCloudViewController: cocoa.MSCloudViewController.CLASS;
