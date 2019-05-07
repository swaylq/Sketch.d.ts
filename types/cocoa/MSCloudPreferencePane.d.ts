/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
    platformDidChangeNotification<R = void, P0 = unknown>(_platformDidChangeNotification: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    userDidSignIn<R = void>(): R;
    signIn<R = void>(): R;
    fixFirstResponder<R = void>(): R;
    updateWindowFrame<R = void>(): R;
    showRootViewController<R = void>(): R;
    showAccountViewController<R = void>(): R;
    showIntroViewController<R = void>(): R;
    showCloudViewControllerOfClass<R = void, P0 = unknown>(_showCloudViewControllerOfClass: P0): R;
    signinSheet<R = MSCloudSigninWindowController>(): R;
    setSigninSheet<R = void, P0 = MSCloudSigninWindowController>(_v: P0): R;
    currentViewController<R = MSCloudPreferencesViewController>(): R;
    setCurrentViewController<R = void, P0 = MSCloudPreferencesViewController>(_v: P0): R;
    cloudStoryboard<R = NSStoryboard>(): R;
    setCloudStoryboard<R = void, P0 = NSStoryboard>(_v: P0): R;
  }
  namespace MSCloudPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
      alloc<R = MSCloudPreferencePane>(): R;
      new: <R = MSCloudPreferencePane>() => R;
      showAndSignIn<R = void>(): R;
    }
  }
}

declare const MSCloudPreferencePane: cocoa.MSCloudPreferencePane.CLASS;
