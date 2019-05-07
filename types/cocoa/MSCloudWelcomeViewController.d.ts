/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudWelcomeViewController<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    signIn<R = void, P0 = unknown>(_signIn: P0): R;
    actionView<R = unknown>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    infoButton<R = MSCursorButton>(): R;
  }
  namespace MSCloudWelcomeViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
      alloc<R = MSCloudWelcomeViewController>(): R;
      new: <R = MSCloudWelcomeViewController>() => R;
    }
  }
}

declare const MSCloudWelcomeViewController: cocoa.MSCloudWelcomeViewController.CLASS;
