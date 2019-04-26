/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudLoginWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    cxx_destruct<R = void>(): R;
    changeEnvironment<R = void, P0 = unknown>(_changeEnvironment: P0): R;
    updateEnvironmentMenuItems<R = void>(): R;
    cancelButtonClicked<R = void, P0 = unknown>(_cancelButtonClicked: P0): R;
    openBrowserBucconClicked<R = void, P0 = unknown>(_openBrowserBucconClicked: P0): R;
    signInButtonClicked<R = void, P0 = unknown>(_signInButtonClicked: P0): R;
    windowDidLoad<R = void>(): R;
    environmentPopUpButton<R = NSPopUpButton>(): R;
    setEnvironmentPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    titleLabel<R = NSTextField>(): R;
    setTitleLabel<R = void, P0 = NSTextField>(_v: P0): R;
    password<R = NSString>(): R;
    setPassword<R = void, P0 = NSString>(_v: P0): R;
    email<R = NSString>(): R;
    setEmail<R = void, P0 = NSString>(_v: P0): R;
    isLoading<R = boolean>(): R;
    setIsLoading<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = MSCloudLoginWindowControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSCloudLoginWindowControllerDelegate>(_v: P0): R;
    environment<R = SCKAPIEnvironment>(): R;
    setEnvironment<R = void, P0 = SCKAPIEnvironment>(_v: P0): R;
  }
  namespace MSCloudLoginWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = MSCloudLoginWindowController>(): R;
      new: <R = MSCloudLoginWindowController>() => R;
    }
  }
}

declare const MSCloudLoginWindowController: cocoa.MSCloudLoginWindowController.CLASS;
